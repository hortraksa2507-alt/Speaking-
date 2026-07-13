/* ============ Speaking Exam Trainer — app logic ============ */

(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------------- tabs ---------------- */
  function showTab(name) {
    const btn = $('.tab[data-tab="' + name + '"]');
    if (!btn) return;
    $$(".tab").forEach((t) => t.classList.toggle("active", t === btn));
    $$(".panel").forEach((p) =>
      p.classList.toggle("active", p.id === "panel-" + name)
    );
    stopTimer();
  }

  $("#tabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    history.replaceState(null, "", "#" + btn.dataset.tab);
    showTab(btn.dataset.tab);
  });

  window.addEventListener("hashchange", () =>
    showTab(location.hash.slice(1) || "part1")
  );

  /* ---------------- coach bar: timer + recorder ---------------- */
  const coachBar = $("#coach-bar");
  const coachPhase = $("#coach-phase");
  const coachTimer = $("#coach-timer");
  const recordBtn = $("#coach-record");
  const stopBtn = $("#coach-stop");
  const playback = $("#coach-playback");

  let timerInterval = null;
  let audioCtx = null;

  function beep(freq, duration) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.value = freq;
      gain.gain.value = 0.12;
      osc.connect(gain).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (_) {
      /* audio not available — timer still works visually */
    }
  }

  function fmt(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function runPhase(label, seconds, isSpeaking, onDone) {
    coachPhase.textContent = label;
    coachPhase.classList.toggle("speaking", isSpeaking);
    let remaining = seconds;
    coachTimer.textContent = fmt(remaining);
    coachTimer.classList.remove("ending");
    timerInterval = setInterval(() => {
      remaining -= 1;
      coachTimer.textContent = fmt(Math.max(remaining, 0));
      if (remaining <= 10) coachTimer.classList.add("ending");
      if (remaining <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        onDone();
      }
    }, 1000);
  }

  function startTimer(prepSeconds, speakSeconds) {
    stopTimer(true);
    coachBar.hidden = false;
    const speak = () => {
      beep(880, 0.4);
      runPhase("Speaking", speakSeconds, true, () => {
        beep(440, 0.7);
        coachPhase.textContent = "Time's up!";
        coachPhase.classList.remove("speaking");
        coachTimer.textContent = "0:00";
      });
    };
    if (prepSeconds > 0) {
      beep(660, 0.25);
      runPhase("Preparation", prepSeconds, false, speak);
    } else {
      speak();
    }
  }

  function stopTimer(keepBar) {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (!keepBar) coachBar.hidden = true;
  }

  stopBtn.addEventListener("click", () => {
    stopRecording();
    stopTimer();
  });

  /* recorder */
  let mediaRecorder = null;
  let chunks = [];

  recordBtn.addEventListener("click", async () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      stopRecording();
      return;
    }
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      alert("Recording is not supported in this browser.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      chunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: mediaRecorder.mimeType || "audio/webm" });
        playback.src = URL.createObjectURL(blob);
        playback.hidden = false;
        stream.getTracks().forEach((t) => t.stop());
      };
      mediaRecorder.start();
      recordBtn.textContent = "■ Stop rec";
      recordBtn.classList.add("recording");
    } catch (err) {
      alert("Could not access the microphone: " + err.message);
    }
  });

  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
    }
    recordBtn.textContent = "● Rec";
    recordBtn.classList.remove("recording");
  }

  /* ---------------- helpers ---------------- */
  function chip(label, onClick, extraClass) {
    const b = document.createElement("button");
    b.className = "topic-chip" + (extraClass ? " " + extraClass : "");
    b.textContent = label;
    b.addEventListener("click", onClick);
    return b;
  }

  function activateChip(container, chipEl) {
    $$(".topic-chip", container).forEach((c) =>
      c.classList.toggle("active", c === chipEl)
    );
  }

  function helpBlock(title, items, open) {
    if (!items || !items.length) return "";
    return (
      '<details class="help-block"' + (open ? " open" : "") + "><summary>" +
      title +
      "</summary><ul>" +
      items.map((i) => "<li>" + i + "</li>").join("") +
      "</ul></details>"
    );
  }

  /* ---------------- Part 1 ---------------- */
  const p1 = EXAM_DATA.part1;
  $("#part1-title").textContent = p1.title;
  $("#part1-instructions").textContent = p1.instructions;

  const p1Topics = $("#part1-topics");
  const p1Card = $("#part1-card");

  p1.topics.forEach((topic, idx) => {
    const c = chip(topic.topic, () => {
      activateChip(p1Topics, c);
      renderPart1(idx);
    });
    p1Topics.appendChild(c);
  });
  const p1Random = chip("🎲 Random topic", () => {
    const idx = Math.floor(Math.random() * p1.topics.length);
    activateChip(p1Topics, p1Topics.children[idx]);
    renderPart1(idx, true);
  }, "random");
  p1Topics.appendChild(p1Random);

  function renderPart1(idx, randomQuestion) {
    const topic = p1.topics[idx];
    const startQ = randomQuestion
      ? Math.floor(Math.random() * topic.questions.length)
      : 0;
    p1Card.innerHTML =
      '<span class="card-part-label">Part 1 · ' + topic.topic + "</span>" +
      '<p class="card-sub">Click a question to select it, then start the timer and answer out loud.</p>' +
      '<ul class="question-list">' +
      topic.questions
        .map(
          (q, i) =>
            '<li data-q="' + i + '"' + (i === startQ ? ' class="current"' : "") + ">" + q + "</li>"
        )
        .join("") +
      "</ul>" +
      helpBlock("💡 Tips for this topic", topic.tips) +
      '<div class="card-actions">' +
      '<button class="btn btn-primary" id="p1-start">▶ Answer (' + p1.speakSeconds + 's)</button>' +
      '<button class="btn btn-secondary" id="p1-next">Next question →</button>' +
      "</div>";

    $$(".question-list li", p1Card).forEach((li) => {
      li.addEventListener("click", () => {
        $$(".question-list li", p1Card).forEach((x) => x.classList.remove("current"));
        li.classList.add("current");
      });
    });
    $("#p1-start").addEventListener("click", () =>
      startTimer(p1.prepSeconds, p1.speakSeconds)
    );
    $("#p1-next").addEventListener("click", () => {
      const items = $$(".question-list li", p1Card);
      const cur = items.findIndex((x) => x.classList.contains("current"));
      items[cur].classList.remove("current");
      items[(cur + 1) % items.length].classList.add("current");
      items[(cur + 1) % items.length].scrollIntoView({ block: "nearest" });
    });
  }

  activateChip(p1Topics, p1Topics.children[0]);
  renderPart1(0);

  /* ---------------- Part 2 ---------------- */
  const p2 = EXAM_DATA.part2;
  $("#part2-title").textContent = p2.title;
  $("#part2-instructions").textContent = p2.instructions;

  const p2Topics = $("#part2-topics");
  const p2Card = $("#part2-card");

  p2.tasks.forEach((task, idx) => {
    const c = chip(task.topic, () => {
      activateChip(p2Topics, c);
      renderPart2(idx);
    });
    p2Topics.appendChild(c);
  });
  p2Topics.appendChild(
    chip("🎲 Random task", () => {
      const idx = Math.floor(Math.random() * p2.tasks.length);
      activateChip(p2Topics, p2Topics.children[idx]);
      renderPart2(idx);
    }, "random")
  );

  function renderPart2(idx) {
    const task = p2.tasks[idx];
    p2Card.innerHTML =
      '<span class="card-part-label">Part 2 · Discuss &amp; Decide</span>' +
      '<h3 class="card-question">' + task.topic + "</h3>" +
      '<div class="discuss-decide">' +
      '<div class="dd-row"><span class="dd-label">Discuss</span><span class="dd-text">' + task.discuss + "</span></div>" +
      '<div class="dd-row decide"><span class="dd-label">Decide</span><span class="dd-text">' + task.decide + "</span></div>" +
      "</div>" +
      '<div class="options-grid">' +
      task.options
        .map(
          (o, i) =>
            '<div class="option-card" data-i="' + i + '">' +
            '<span class="option-emoji">' + o.emoji + "</span>" +
            '<div class="option-label">' + o.label + "</div>" +
            '<div class="option-note">' + o.note + "</div>" +
            "</div>"
        )
        .join("") +
      "</div>" +
      '<p class="options-hint">Talk about every option first — then click the one you decide on together.</p>' +
      helpBlock("💡 Ideas you can use", task.ideas) +
      helpBlock(
        "🗣️ Phrases for discussing & deciding",
        phrasesFor(["Discussing & comparing options (Part 2)", "Making a decision together (Part 2)"])
      ) +
      '<div class="card-actions">' +
      '<button class="btn btn-primary" id="p2-start">▶ Start: ' +
      p2.prepSeconds + "s prep + " + Math.round(p2.speakSeconds / 60) + " min discussion</button>" +
      "</div>";

    $$(".option-card", p2Card).forEach((card) => {
      card.addEventListener("click", () => {
        $$(".option-card", p2Card).forEach((x) => x.classList.remove("chosen"));
        card.classList.add("chosen");
      });
    });
    $("#p2-start").addEventListener("click", () =>
      startTimer(p2.prepSeconds, p2.speakSeconds)
    );
  }

  activateChip(p2Topics, p2Topics.children[0]);
  renderPart2(0);

  /* ---------------- Part 3 ---------------- */
  const p3 = EXAM_DATA.part3;
  $("#part3-title").textContent = p3.title;
  $("#part3-instructions").textContent = p3.instructions;

  const p3Topics = $("#part3-topics");
  const p3Card = $("#part3-card");

  p3.tasks.forEach((task, idx) => {
    const short = task.question.length > 46 ? task.question.slice(0, 44) + "…" : task.question;
    const c = chip(short, () => {
      activateChip(p3Topics, c);
      renderPart3(idx);
    });
    p3Topics.appendChild(c);
  });
  p3Topics.appendChild(
    chip("🎲 Random question", () => {
      const idx = Math.floor(Math.random() * p3.tasks.length);
      activateChip(p3Topics, p3Topics.children[idx]);
      renderPart3(idx);
    }, "random")
  );

  function renderPart3(idx) {
    const task = p3.tasks[idx];
    p3Card.innerHTML =
      '<span class="card-part-label">Part 3 · Discussion</span>' +
      '<h3 class="card-question">' + task.question + "</h3>" +
      helpBlock("📌 Ideas to talk about", task.ideas, true) +
      helpBlock("💡 Tips", task.tips) +
      helpBlock(
        "🗣️ Phrases to keep the conversation going",
        phrasesFor(["Keeping the conversation going (Part 3)", "Agreeing & disagreeing"])
      ) +
      '<div class="card-actions">' +
      '<button class="btn btn-primary" id="p3-start">▶ Start: ' +
      p3.prepSeconds + "s prep + " + Math.round(p3.speakSeconds / 60) + " min discussion</button>" +
      "</div>";

    $("#p3-start").addEventListener("click", () =>
      startTimer(p3.prepSeconds, p3.speakSeconds)
    );
  }

  activateChip(p3Topics, p3Topics.children[0]);
  renderPart3(0);

  /* ---------------- Vocabulary ---------------- */
  function phrasesFor(categories) {
    const out = [];
    EXAM_DATA.vocab
      .filter((c) => categories.includes(c.category))
      .forEach((c) => {
        (c.phrases || c.words || []).forEach((p) =>
          out.push("<strong>" + p.en + "</strong> — " + p.note)
        );
      });
    return out;
  }

  const vocabFilter = $("#vocab-filter");
  const vocabGrid = $("#vocab-grid");

  const allChip = chip("All", () => {
    activateChip(vocabFilter, allChip);
    renderVocab(null);
  });
  allChip.classList.add("active");
  vocabFilter.appendChild(allChip);

  EXAM_DATA.vocab.forEach((cat) => {
    const c = chip(cat.icon + " " + cat.category, () => {
      activateChip(vocabFilter, c);
      renderVocab(cat.category);
    });
    vocabFilter.appendChild(c);
  });

  function renderVocab(onlyCategory) {
    vocabGrid.innerHTML = "";
    EXAM_DATA.vocab
      .filter((c) => !onlyCategory || c.category === onlyCategory)
      .forEach((cat) => {
        const card = document.createElement("div");
        card.className = "vocab-card";
        card.innerHTML =
          "<h3><span>" + cat.icon + "</span>" + cat.category + "</h3>" +
          '<div class="vocab-items">' +
          (cat.phrases || cat.words)
            .map(
              (p) =>
                '<div class="vocab-item" title="Click to hide/show the meaning">' +
                '<div class="vocab-en">' + p.en + "</div>" +
                '<div class="vocab-note">' + p.note + "</div>" +
                "</div>"
            )
            .join("") +
          "</div>";
        vocabGrid.appendChild(card);
      });

    $$(".vocab-item", vocabGrid).forEach((item) => {
      item.addEventListener("click", () => item.classList.toggle("hidden-note"));
    });
  }

  renderVocab(null);

  if (location.hash) showTab(location.hash.slice(1));
})();
