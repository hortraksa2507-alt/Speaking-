/* ============================================================
   Speaking Exam Trainer — Question & Vocabulary Data
   Based on Monash College speaking exam practice materials.
   ============================================================ */

const EXAM_DATA = {
  /* ----------------------------------------------------------
     PART 1 — Individual Questions
     The examiner asks you questions directly. Answer with
     2–4 sentences: direct answer + reason + example.
     ---------------------------------------------------------- */
  part1: {
    title: "Part 1 — Individual Questions",
    instructions:
      "The examiner asks you questions about a familiar topic. " +
      "Give a direct answer, then add a reason and a personal example. " +
      "Aim for 20–40 seconds per answer.",
    prepSeconds: 0,
    speakSeconds: 40,
    topics: [
      {
        topic: "Multiculturalism",
        questions: [
          "What are the benefits of living in a multicultural city like Melbourne?",
          "Tell me about the last time you visited a multicultural festival. Did you enjoy it? Why / why not?",
          "What festivals from other cultures would you like to visit?",
        ],
        tips: [
          "Mention concrete benefits: food, festivals, friends, languages, new perspectives.",
          "For the festival question, use past tenses: “Last year I went to…”, “It was…”.",
          "For the last question use would like to + verb: “I would like to experience…”.",
        ],
      },
      {
        topic: "Food & Eating Habits",
        questions: [
          "What kind of food from other countries do you enjoy eating?",
          "Tell me about a traditional dish from your country.",
          "Do you prefer eating at home or in restaurants? Why?",
        ],
        tips: [
          "Describe taste and ingredients: spicy, sweet, fresh, made from…",
          "Compare: “Eating at home is cheaper and healthier, whereas restaurants…”",
        ],
      },
      {
        topic: "Study & Student Life",
        questions: [
          "What do you enjoy most about studying in another country?",
          "Tell me about a subject you find interesting. Why do you like it?",
          "How do you usually prepare for exams?",
        ],
        tips: [
          "Use linking words: firstly, also, on top of that.",
          "Give a routine with present simple: “I usually revise my notes, then…”",
        ],
      },
      {
        topic: "Free Time & Hobbies",
        questions: [
          "What do you like to do in your free time?",
          "Tell me about the last time you tried a new activity. Did you enjoy it?",
          "What new hobby would you like to take up in the future?",
        ],
        tips: [
          "Say how often: “Once a week I…”, “Whenever I have time…”",
          "For the future question: “I've always wanted to…”, “I'd love to try…”",
        ],
      },
      {
        topic: "Cities & Places",
        questions: [
          "What do you like about the city you live in now?",
          "Tell me about an interesting place you visited recently.",
          "What place in the world would you most like to visit? Why?",
        ],
        tips: [
          "Use adjectives: lively, peaceful, crowded, historic, modern.",
          "Add senses: what you saw, heard, ate.",
        ],
      },
    ],
  },

  /* ----------------------------------------------------------
     PART 2 — Discuss & Decide (with a partner)
     You look at four options/pictures, discuss the question
     together and agree on a decision.
     ---------------------------------------------------------- */
  part2: {
    title: "Part 2 — Discuss & Decide",
    instructions:
      "You and a partner look at four options. First DISCUSS the question, " +
      "talking about each option, then DECIDE together which option is best. " +
      "Take turns, react to your partner's ideas, and justify your choice.",
    prepSeconds: 30,
    speakSeconds: 180,
    tasks: [
      {
        topic: "Plastic waste",
        discuss: "What are the problems of plastic for the environment?",
        decide: "Which is the best solution to plastic waste?",
        options: [
          {
            emoji: "📦",
            label: "Paper & cardboard packaging",
            note: "Replace plastic packaging with paper alternatives.",
          },
          {
            emoji: "🌊",
            label: "Cleaning up ocean plastic",
            note: "Organise clean-ups of beaches, rivers and the ocean.",
          },
          {
            emoji: "🚫",
            label: "Banning single-use plastics",
            note: "Governments ban plastic bags, straws and cutlery.",
          },
          {
            emoji: "♻️",
            label: "Recycling plastic waste",
            note: "Collect, sort and recycle plastic into new products.",
          },
        ],
        ideas: [
          "Problems: plastic pollutes oceans, harms wildlife, takes hundreds of years to break down, microplastics enter our food.",
          "Compare solutions: which is fastest? cheapest? most realistic? who is responsible — governments, companies or individuals?",
          "Recycling helps but not all plastic can be recycled; bans prevent waste before it exists.",
        ],
      },
      {
        topic: "Reducing the effects of climate change",
        discuss: "How good are these options for reducing the effects of climate change?",
        decide: "Which option would be the MOST effective?",
        options: [
          {
            emoji: "🏫",
            label: "Education & awareness",
            note: "Teach children and communities about climate change.",
          },
          {
            emoji: "🏛️",
            label: "Government policies",
            note: "Laws and taxes to limit pollution and emissions.",
          },
          {
            emoji: "♻️",
            label: "Recycling programs",
            note: "Separate paper, plastic and glass to reduce waste.",
          },
          {
            emoji: "🌬️",
            label: "Renewable energy",
            note: "Solar panels and wind turbines instead of fossil fuels.",
          },
        ],
        ideas: [
          "Evaluate each option: short-term vs long-term impact, cost, how many people it affects.",
          "Renewable energy attacks the main cause (fossil fuels); education changes behaviour for the next generation.",
          "You can combine: “Ideally we need both, but if we have to choose one…”",
        ],
      },
      {
        topic: "Healthy lifestyle (extra practice)",
        discuss: "How good are these options for staying healthy as a student?",
        decide: "Which option is the MOST important?",
        options: [
          {
            emoji: "🥗",
            label: "Eating a balanced diet",
            note: "Cook at home, eat fruit and vegetables every day.",
          },
          {
            emoji: "🏃",
            label: "Regular exercise",
            note: "Sport, gym or walking at least 30 minutes a day.",
          },
          {
            emoji: "😴",
            label: "Getting enough sleep",
            note: "7–9 hours of sleep and a regular routine.",
          },
          {
            emoji: "🧘",
            label: "Managing stress",
            note: "Breaks, hobbies, meditation, talking to friends.",
          },
        ],
        ideas: [
          "Think about what students actually struggle with: late nights, fast food, exam stress.",
          "Argue that one habit supports the others: “If you sleep well, it's easier to exercise and eat well.”",
        ],
      },
      {
        topic: "Improving your English (extra practice)",
        discuss: "How useful are these ways of improving your English?",
        decide: "Which is the BEST way to improve quickly?",
        options: [
          {
            emoji: "🎬",
            label: "Watching films & series",
            note: "Watch in English with or without subtitles.",
          },
          {
            emoji: "🗣️",
            label: "Speaking with native speakers",
            note: "Language exchanges, clubs, making local friends.",
          },
          {
            emoji: "📚",
            label: "Studying grammar & vocabulary",
            note: "Textbooks, apps and word lists.",
          },
          {
            emoji: "✈️",
            label: "Living in an English-speaking country",
            note: "Full immersion in daily life.",
          },
        ],
        ideas: [
          "Distinguish between input (watching, reading) and output (speaking, writing).",
          "Mention your own experience: what has worked for you?",
        ],
      },
    ],
  },

  /* ----------------------------------------------------------
     PART 3 — Discussion (with a partner)
     A bigger question about culture. Use the “ideas to talk
     about” to keep the conversation going for a few minutes.
     ---------------------------------------------------------- */
  part3: {
    title: "Part 3 — Discussion",
    instructions:
      "You and a partner discuss a question about culture and customs. " +
      "Use the ideas to keep talking, compare your cultures, ask each " +
      "other follow-up questions and react to each other's answers.",
    prepSeconds: 30,
    speakSeconds: 240,
    tasks: [
      {
        question: "Is it appropriate to give a hug to a friend when you say goodbye?",
        ideas: [
          "In what situations do people give each other a hug in your culture? Why?",
          "Do people give each other a hug to say goodbye in other cultures? In what situations?",
          "How would you feel if your friend hugged you in a way that is different from use in your culture?",
        ],
        tips: [
          "Compare cultures: “In my culture we usually…, whereas in Australia…”",
          "Use hedging: “It depends on the situation / how close you are.”",
          "Ask your partner: “What about in your culture?”, “Would you feel comfortable if…?”",
        ],
      },
      {
        question: "Is it impolite to interrupt someone during a discussion?",
        ideas: [
          "Is interrupting people impolite in your culture? In what situations?",
          "Do you know if interrupting is OK / not OK in other cultures? In what situations?",
          "How would you react if someone interrupted you in a way that is different from your culture?",
        ],
        tips: [
          "Contrast formal vs informal situations: class discussion vs chatting with friends.",
          "Useful language: “to cut someone off”, “to talk over someone”, “to wait for your turn”.",
          "Talk about polite ways to interrupt: “Sorry to interrupt, but…”",
        ],
      },
      {
        question: "Is it important to celebrate traditional festivals? (extra practice)",
        ideas: [
          "Which traditional festivals are important in your culture? What do people do?",
          "Are young people less interested in traditional festivals nowadays? Why / why not?",
          "Should schools teach students about festivals from other cultures?",
        ],
        tips: [
          "Describe a festival: when it happens, what people eat, wear and do.",
          "Discuss change over time: “In the past…, but nowadays…”",
        ],
      },
      {
        question: "Is it better to live in a multicultural city or a city with one main culture? (extra practice)",
        ideas: [
          "What are the advantages and disadvantages of living in a multicultural city?",
          "What can be difficult when people from many cultures live together?",
          "How can people from different cultures understand each other better?",
        ],
        tips: [
          "Balance both sides before giving your opinion.",
          "Useful language: “On the one hand… on the other hand…”, “Overall, I'd say…”",
        ],
      },
    ],
  },

  /* ----------------------------------------------------------
     VOCABULARY & PHRASES
     ---------------------------------------------------------- */
  vocab: [
    {
      category: "Giving your opinion",
      icon: "💬",
      phrases: [
        { en: "In my opinion, …", note: "neutral, always safe" },
        { en: "I think / I believe / I feel that …", note: "basic openers" },
        { en: "From my point of view, …", note: "slightly more formal" },
        { en: "Personally, I'd say that …", note: "personal touch" },
        { en: "As far as I'm concerned, …", note: "advanced" },
        { en: "It seems to me that …", note: "softer, less direct" },
      ],
    },
    {
      category: "Agreeing & disagreeing",
      icon: "🤝",
      phrases: [
        { en: "I completely agree with you.", note: "strong agreement" },
        { en: "That's a good point.", note: "react to your partner" },
        { en: "Exactly! And I'd add that …", note: "agree + build on it" },
        { en: "I see what you mean, but …", note: "polite disagreement" },
        { en: "I'm not sure I agree, because …", note: "soft disagreement" },
        { en: "That's true to some extent, however …", note: "partial agreement" },
      ],
    },
    {
      category: "Discussing & comparing options (Part 2)",
      icon: "⚖️",
      phrases: [
        { en: "Let's look at each option one by one.", note: "start the task" },
        { en: "What do you think about this one?", note: "involve your partner" },
        { en: "This option seems more effective than … because …", note: "comparing" },
        { en: "The main advantage / disadvantage of this is …", note: "evaluating" },
        { en: "On the one hand … on the other hand …", note: "balancing" },
        { en: "Compared to the others, this one is …", note: "comparing" },
      ],
    },
    {
      category: "Making a decision together (Part 2)",
      icon: "✅",
      phrases: [
        { en: "So, which one should we choose?", note: "move to the decision" },
        { en: "Shall we go with this one?", note: "suggest a decision" },
        { en: "I'd rule this one out because …", note: "eliminate an option" },
        { en: "Let's narrow it down to two options.", note: "useful strategy" },
        { en: "We both agree that … is the best option.", note: "state the decision" },
        { en: "To sum up, we've decided that … because …", note: "final answer" },
      ],
    },
    {
      category: "Keeping the conversation going (Part 3)",
      icon: "🔄",
      phrases: [
        { en: "What about in your culture?", note: "return the question" },
        { en: "Have you ever experienced that?", note: "ask for experience" },
        { en: "That's interesting — why do you think that is?", note: "dig deeper" },
        { en: "Sorry to interrupt, but …", note: "polite interruption" },
        { en: "Going back to what you said about …", note: "reconnect ideas" },
        { en: "Can you give me an example?", note: "ask for detail" },
      ],
    },
    {
      category: "Buying thinking time",
      icon: "⏳",
      phrases: [
        { en: "That's a good question. Let me think…", note: "natural pause" },
        { en: "Well, it depends on the situation.", note: "buys time + true" },
        { en: "I've never really thought about it, but …", note: "honest opener" },
        { en: "How can I put it…", note: "searching for words" },
        { en: "What I'm trying to say is …", note: "rephrase yourself" },
      ],
    },
    {
      category: "Multiculturalism & culture",
      icon: "🌏",
      words: [
        { en: "cultural diversity", note: "many different cultures together" },
        { en: "to broaden your horizons", note: "learn about new things" },
        { en: "cuisine", note: "style of cooking (Italian cuisine)" },
        { en: "a melting pot", note: "a place where cultures mix" },
        { en: "traditions and customs", note: "what people traditionally do" },
        { en: "to celebrate a festival", note: "collocation" },
        { en: "cultural background", note: "where someone's culture comes from" },
        { en: "tolerance / open-mindedness", note: "accepting differences" },
        { en: "to feel at home", note: "feel comfortable in a place" },
        { en: "a tight-knit community", note: "a close community" },
      ],
    },
    {
      category: "Environment & climate change",
      icon: "🌱",
      words: [
        { en: "single-use plastic", note: "plastic used once then thrown away" },
        { en: "to pollute / pollution", note: "make air, water, land dirty" },
        { en: "microplastics", note: "tiny pieces of plastic in food/water" },
        { en: "biodegradable", note: "breaks down naturally" },
        { en: "carbon emissions / carbon footprint", note: "CO₂ we produce" },
        { en: "renewable energy", note: "solar, wind, hydro power" },
        { en: "fossil fuels", note: "coal, oil, gas" },
        { en: "to ban / a ban on …", note: "make something illegal" },
        { en: "to raise awareness", note: "make people know about a problem" },
        { en: "sustainable / sustainability", note: "can continue long-term" },
        { en: "landfill", note: "place where rubbish is buried" },
        { en: "to harm wildlife", note: "hurt animals and nature" },
      ],
    },
    {
      category: "Politeness & social customs (Part 3)",
      icon: "🙇",
      words: [
        { en: "appropriate / inappropriate", note: "socially right / wrong" },
        { en: "to be considered rude / polite", note: "how society sees it" },
        { en: "personal space", note: "physical distance people prefer" },
        { en: "to greet someone", note: "say hello (bow, shake hands, hug)" },
        { en: "to shake hands / to bow / to hug", note: "ways of greeting" },
        { en: "to cut someone off / to talk over someone", note: "interrupt rudely" },
        { en: "to take turns", note: "speak one after another" },
        { en: "body language", note: "communication without words" },
        { en: "to offend someone / to take offence", note: "hurt feelings" },
        { en: "It depends on how close you are.", note: "useful hedge" },
      ],
    },
    {
      category: "Linking words & structure",
      icon: "🔗",
      phrases: [
        { en: "Firstly / Secondly / Finally", note: "ordering ideas" },
        { en: "For example / For instance", note: "giving examples" },
        { en: "However / On the other hand", note: "contrast" },
        { en: "Moreover / What's more / On top of that", note: "adding ideas" },
        { en: "As a result / That's why", note: "cause and effect" },
        { en: "Overall / To sum up / All in all", note: "concluding" },
      ],
    },
  ],
};
