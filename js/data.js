/* ============================================================
   Speaking Exam Trainer — Question & Vocabulary Data
   Based on Monash College Group Speaking Test practice materials.
   ============================================================ */

const EXAM_DATA = {
  /* ----------------------------------------------------------
     PART 1 — Individual Questions
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
        topic: "You & Your Hometown",
        questions: [
          {
            q: "Describe your hometown and what makes it special.",
            steps: [
              "Name it and say where it is: “I come from…, a city in…”",
              "Give the ONE thing that makes it special.",
              "Add 2 details: atmosphere, food, people.",
              "Finish with a personal feeling: what you miss or love.",
            ],
            simple:
              "I come from Siem Reap in Cambodia. It's special because it's next to Angkor Wat, the biggest temple in the world. The people are friendly and the street food is amazing — I really miss it.",
            model:
              "I come from Siem Reap, a city in northwest Cambodia. What makes it truly special is that it's home to Angkor Wat, the largest religious monument in the world. Growing up surrounded by ancient Khmer architecture is actually one of the reasons I decided to study architecture. Beyond the temples, Siem Reap has a relaxed atmosphere, friendly people, and amazing street food. Although it's a tourist city, the local community is very close-knit, which I miss now that I live overseas.",
          },
          {
            q: "Describe a person who has influenced your life.",
            steps: [
              "Say who they are and your relationship.",
              "Say WHAT they did or taught you.",
              "Give one concrete example or saying of theirs.",
              "Finish with the effect on you today.",
            ],
            simple:
              "My architecture professor in Japan influenced me most. He taught me to watch how people really use buildings, not just draw them. He also encouraged me to study abroad — that's why I'm in Melbourne now.",
            model:
              "The person who influenced me most is my architecture professor in Japan. He didn't just teach us how to design buildings — he taught us how to observe how people actually live and use spaces. He always said a good architect listens before drawing. He also encouraged me to study abroad and challenge myself in English, which is why I'm in Melbourne today. Whenever I face a difficult decision, I still ask myself what he would advise.",
          },
          {
            q: "Talk about a festival or celebration in your country.",
            steps: [
              "Name the festival and WHEN it happens.",
              "Describe WHAT people do (2–3 activities).",
              "Say what YOU love about it.",
              "Bonus: compare it with another culture's festival.",
            ],
            simple:
              "The biggest festival in Cambodia is Khmer New Year in April. Families visit pagodas, pour water for blessings, and play traditional games. I love it because everyone goes back to their hometown to celebrate together.",
            model:
              "The biggest celebration in Cambodia is Khmer New Year in April, which lasts three days. Families clean their houses, visit pagodas, and pour water on Buddha statues and elders' hands for blessings. There are also traditional games in the streets and lots of food. What I love about it is that everyone returns to their hometown, so cities empty out and villages come alive. It's similar to Japanese New Year in spirit, but much louder and more playful.",
          },
        ],
        tips: [
          "Hometown: location, size, famous food or places, and one thing you personally love about it.",
          "Person: who they are, what they did, and how they changed you — “Thanks to him, I…”.",
          "Festival: when it happens, what people eat, wear and do — describe it so the examiner can picture it.",
        ],
      },
      {
        topic: "Student Life in Melbourne",
        questions: [
          {
            q: "What do you enjoy most about studying in Melbourne?",
            steps: [
              "Answer directly: “What I enjoy most is…”",
              "Give reason 1 with an example (classmates, discussions).",
              "Give reason 2 (the city itself).",
              "Bonus: compare with somewhere you lived before.",
            ],
            simple:
              "What I enjoy most is the multicultural environment. My classmates come from many countries, so I learn something new in every discussion. I also love the city — the laneways and the coffee culture.",
            model:
              "What I enjoy most is the multicultural environment. In one classroom, I have classmates from China, Vietnam, Colombia and the Middle East, so every discussion gives me a new perspective. I also love the city itself — the laneways, the coffee culture, and the mix of Victorian and modern architecture, which is fascinating for me as a future architecture student. Compared to Japan, where I studied before, people here are more casual and open, so it's easier to start conversations.",
          },
          {
            q: "Talk about your daily routine as a student.",
            steps: [
              "Morning: how you get to class, how long it takes.",
              "Day: classes and what you do after them.",
              "Evening: work, study or relaxing.",
              "Use time words: first, then, usually, before bed.",
            ],
            simple:
              "On weekdays I take the train to the city, which takes about 25 minutes. I have English classes in the morning, and after class I review vocabulary with classmates. In the evening I sometimes work part-time, and before bed I watch something in English.",
            model:
              "On weekdays, I take the train from Williams Landing to the city, which takes about 25 minutes. I have English classes at the Docklands campus in the morning and early afternoon. After class, I usually review vocabulary or practise speaking with classmates. Some evenings I work part-time as a food delivery rider, which is good exercise and helps me learn the city. Before bed, I try to watch something in English to improve my listening. Weekends are for study, bouldering, and photography.",
          },
          {
            q: "What do you find difficult about learning English?",
            steps: [
              "Name ONE main difficulty honestly.",
              "Explain WHY it's hard for you.",
              "Give a real example (slang, speed, accents).",
              "Say what you DO to improve — end positively.",
            ],
            simple:
              "The most difficult part for me is speaking fluently under pressure. I sometimes translate from Khmer in my head, which slows me down. To improve, I speak with classmates from other countries every day.",
            model:
              "For me, the most difficult part is speaking fluently under pressure. I can prepare ideas in my head, but in real conversations, especially fast group discussions, I sometimes translate from Khmer or Japanese, which slows me down. Australian accents and slang were also challenging at first — words like “arvo” or “no worries” confused me. To improve, I force myself to speak with classmates from other countries and I work part-time, which gives me real conversation practice every day.",
          },
        ],
        tips: [
          "Melbourne: mention something specific — cafés, libraries, events, meeting people from many cultures.",
          "Routine: use present simple + time expressions — “First I…, then I usually…, after class I…”.",
          "English: name a real difficulty (listening speed, articles, pronunciation) and say how you practise it.",
        ],
      },
      {
        topic: "Hobbies, Food & Relaxing",
        questions: [
          {
            q: "Talk about a hobby you do in your free time.",
            steps: [
              "Name the hobby and how often you do it.",
              "Explain WHY you enjoy it (physical? mental? social?).",
              "Add one extra benefit (friends, stress relief).",
              "Bonus: a short history — when and where you started.",
            ],
            simple:
              "My main hobby is bouldering — indoor rock climbing without ropes. I go once or twice a week. I enjoy it because every wall is like a puzzle, and it helps me relax after studying.",
            model:
              "My main hobby is bouldering, which is indoor rock climbing without ropes. I usually go once or twice a week. I enjoy it because it's both physical and mental — every wall is like a puzzle you solve with your body. It also helps me relieve stress from studying. Another benefit is social: climbing gyms are friendly places, so I've made friends from different backgrounds. I started in Japan and continued here in Melbourne, so it also connects the different chapters of my life.",
          },
          {
            q: "Describe your favourite way to relax after a busy day.",
            steps: [
              "Name your favourite way to relax.",
              "Describe what you actually do.",
              "Explain WHY it clears your mind.",
              "Add a second, smaller option for other days.",
            ],
            simple:
              "My favourite way to relax is photography. I walk around the city and take photos of buildings and street life. It clears my mind because I only think about the picture, not my worries.",
            model:
              "My favourite way to relax is photography. After a busy day, I sometimes take my camera and walk around the city, especially around Docklands or the laneways, capturing buildings and street life. It clears my mind because I focus completely on light and composition instead of my worries. It also connects to my passion for architecture — through the lens, I notice details in buildings I'd normally walk past. On quieter days, I just listen to music on the train home.",
          },
          {
            q: "What kind of food do you like and why?",
            steps: [
              "Give a direct answer — one type or “a wide range”.",
              "Name 2–3 favourite dishes and where they're from.",
              "Explain WHY food matters to you.",
              "Use taste words: spicy, fresh, rich, comforting.",
            ],
            simple:
              "I like many kinds of food because I've lived in three countries. My comfort food is fish amok from Cambodia, and I also love Japanese ramen. Food is the easiest way to understand a culture.",
            model:
              "I like a wide range of food because I've lived in three countries. From Cambodia, my comfort food is fish amok, a coconut fish curry. From my four years in Japan, I love ramen and sushi. Here in Melbourne, I've discovered brunch culture, which doesn't really exist in Asia. I enjoy food because it's the easiest way to understand a culture — you can learn a lot about a country's history and lifestyle just from what people eat.",
          },
        ],
        tips: [
          "Say how often you do it and why you enjoy it: “It helps me switch off / stay fit / be creative.”",
          "Food: describe taste and ingredients — spicy, fresh, sweet, made from rice / noodles / seafood.",
          "Add a small story: “Last weekend, for example, I…”",
        ],
      },
      {
        topic: "Future Plans",
        questions: [
          {
            q: "Describe a place you would like to visit in the future.",
            steps: [
              "Name the place: “I'd love to visit…”",
              "Give your MAIN reason with a specific example.",
              "Explain why seeing it in person matters.",
              "Say WHEN you'd ideally go.",
            ],
            simple:
              "I'd love to visit Barcelona in Spain because of Gaudí's architecture, especially the Sagrada Família. Photos can't show the real size and light of the buildings. I hope to go after finishing my degree.",
            model:
              "I'd love to visit Barcelona in Spain, mainly because of Antoni Gaudí's architecture, especially the Sagrada Família. As a future architecture student, seeing his organic, nature-inspired designs in person would be inspiring — photos can't capture the scale and light of real buildings. I'd also like to experience Spanish culture, which seems very different from the Asian cultures I know. Ideally, I'd go after finishing my degree, so I can appreciate the buildings with professional eyes.",
          },
          {
            q: "What job would you like to do in the future and why?",
            steps: [
              "Name the job and where: “I want to work as…”",
              "Connect it to your studies (past and future).",
              "Give reasons: what the job combines or offers.",
              "End with your dream or long-term goal.",
            ],
            simple:
              "In the future I want to be an architect in Australia. I studied architecture in Japan and I'll start my Bachelor at Monash next year. I love it because buildings shape how people live.",
            model:
              "In the future, I want to work as an architect at an international firm here in Australia. I studied architecture for four years in Japan, and next year I'll start my Bachelor of Architectural Design at Monash. I chose this career because architecture combines creativity, technology, and social responsibility — buildings shape how people live. My dream is to design projects that mix ideas from my three cultures: Khmer tradition, Japanese precision, and Australian openness.",
          },
          {
            q: "Talk about a skill you would like to learn.",
            steps: [
              "Name the skill: “A skill I'd really like to learn is…”",
              "Connect it to something you already do.",
              "Give a personal AND a professional reason.",
              "Say HOW you plan to learn it.",
            ],
            simple:
              "I'd like to learn professional video editing. I already do photography, and video would let me tell better stories about my life as an international student. I want to learn proper editing software step by step.",
            model:
              "A skill I'd really like to learn is professional video editing. I already do photography, and I recently started documenting my journey as an international student. Video would let me tell richer stories — for example, about my four years in Japan or life in Melbourne. It's also a valuable skill for architects, because we increasingly present designs through animation and film. I've experimented with mobile apps like CapCut, but I want to learn proper editing software step by step.",
          },
        ],
        tips: [
          "Use future forms: “I'm planning to…”, “I hope to…”, “One day I'd love to…”.",
          "Give two reasons: one practical (career, money) and one personal (passion, family).",
          "Skill: say how you would learn it — a course, online videos, practising with friends.",
        ],
      },
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
     PART 2 — Discuss & Decide (as a group)
     ---------------------------------------------------------- */
  part2: {
    title: "Part 2 — Discuss & Decide",
    instructions:
      "Your group looks at four options. First DISCUSS the question, " +
      "talking about each option, then DECIDE together which option is best. " +
      "Take turns, react to your partners' ideas, and justify your choice.",
    prepSeconds: 30,
    speakSeconds: 180,
    tasks: [
      {
        topic: "Class excursion in Melbourne",
        short: "Class excursion",
        discuss: "Your class has a budget for one excursion. How good is each destination?",
        decide: "Choose the best destination in Melbourne for the excursion.",
        options: [
          { emoji: "🦁", label: "Melbourne Zoo", note: "See Australian animals and enjoy a day outdoors." },
          { emoji: "🏛️", label: "Melbourne Museum", note: "Learn about history, science and Aboriginal culture." },
          { emoji: "🏖️", label: "St Kilda Beach", note: "Relax by the sea, walk the pier, see little penguins." },
          { emoji: "🛍️", label: "Queen Victoria Market", note: "Try food from many cultures and practise English with sellers." },
        ],
        ideas: [
          "Criteria to compare: cost, weather, what everyone can enjoy, what you can learn.",
          "Think about the whole class — some people may not like walking / animals / shopping.",
          "“The zoo is fun, but the museum works in any weather, so…”",
        ],
        simple:
          "How about the museum? It's indoors, so the weather doesn't matter, and everyone can learn something. Shall we choose that one?",
        model:
          "How about the Royal Botanic Gardens? It's free, easy to reach, and we could combine it with a walk along the Yarra. That said, I'm also open to the NGV — as it's indoors, the weather wouldn't matter, and the architecture of the building itself is worth seeing. If most of us prefer something active, the gardens win; if we want culture, the gallery is better. Shall we vote between these two? … Great, so we've decided on the NGV because it works in any weather.",
      },
      {
        topic: "One item every international student should bring to Australia",
        short: "Item to bring to Australia",
        discuss: "How useful is each item for a new international student?",
        decide: "Choose ONE item every international student should bring.",
        options: [
          { emoji: "💻", label: "A laptop", note: "For study, assignments and calling family." },
          { emoji: "🖼️", label: "Photos of family & friends", note: "To feel at home and fight homesickness." },
          { emoji: "🍜", label: "Food & spices from home", note: "Your comfort food while you settle in." },
          { emoji: "🧥", label: "A warm jacket", note: "Melbourne weather changes four seasons in one day!" },
        ],
        ideas: [
          "Which item is hardest to replace in Australia? You can buy a jacket here, but not your family photos.",
          "Practical needs vs emotional needs — which matters more in the first weeks?",
          "“I see your point, but you can video-call your family, whereas without a laptop…”",
        ],
        simple:
          "I think a laptop is the most useful item, because everything here is online — study, banking, calling family. Do we all agree on the laptop?",
        model:
          "In my opinion, the most useful item is a laptop, because everything here is online — enrolment, assignments, even banking. However, I take your point that a laptop can be bought here. So maybe something irreplaceable is better, like important documents or medicine from home. Actually, could we compromise and say a phone with translation and banking apps set up? It covers communication, maps, payment, and study. Does everyone agree the smartphone is our final choice?",
      },
      {
        topic: "Best part-time job for a university student",
        short: "Best part-time job",
        discuss: "What are the pros and cons of each job for a student?",
        decide: "Decide on the best part-time job for a university student.",
        options: [
          { emoji: "☕", label: "Café barista", note: "Social, good for English, but early morning shifts." },
          { emoji: "🛒", label: "Supermarket assistant", note: "Steady hours and easy to combine with study." },
          { emoji: "📖", label: "Tutor", note: "Well paid, flexible, uses what you already know." },
          { emoji: "🚴", label: "Food delivery rider", note: "Very flexible hours, but weather and safety issues." },
        ],
        ideas: [
          "Criteria: pay, flexible hours around classes, English practice, useful experience for your CV.",
          "“Tutoring pays more per hour, however a café gives you more speaking practice…”",
        ],
        simple:
          "I think a café job is best, because you practise English with customers every day and the hours fit around classes. Shall we go with the café?",
        model:
          "From my own experience, food delivery is very flexible — you choose your own hours, which is perfect around classes. On the other hand, I agree with you that a café job gives more English practice and teamwork skills. So it depends on our priority: flexibility or communication. Since we're all English students, maybe speaking practice matters more than flexibility. So shall we agree that a customer-service job, like a café or supermarket, is the best overall choice?",
      },
      {
        topic: "Most useful app for students",
        short: "Most useful app",
        discuss: "How useful is each type of app in a student's daily life?",
        decide: "Choose ONE app that is most useful for students.",
        options: [
          { emoji: "🗺️", label: "Maps & public transport app", note: "Never get lost, plan trams and trains." },
          { emoji: "🌐", label: "Translation app", note: "Understand lectures, forms and menus instantly." },
          { emoji: "📅", label: "Study planner / calendar", note: "Manage deadlines, classes and exams." },
          { emoji: "💬", label: "Messaging & group chat app", note: "Stay connected with classmates and family." },
        ],
        ideas: [
          "Which app do you actually open every day? Which could you live without?",
          "Does a translation app help or stop you improving your English?",
          "“For a new student, maps might be essential, but after a month…”",
        ],
        simple:
          "I'd choose a calendar app, because time management affects everything — classes, assignments and work. What do you think?",
        model:
          "I'd suggest Google Maps, because for a new international student, simply getting to class, work, and appointments is the first challenge. But you make a fair point about translation apps. Actually, thinking about daily study, maybe a calendar app is the most essential, because time management affects everything — assignments, work-hour limits, exams. Between Maps and Calendar, I'd lean towards Calendar for students specifically. Are we agreed on that as our final decision?",
      },
      {
        topic: "Best way for new students to make friends",
        short: "Making friends",
        discuss: "How effective is each way of making friends?",
        decide: "Decide the BEST way for new students to make friends.",
        options: [
          { emoji: "🎾", label: "Join a club or society", note: "Meet people who share your interests every week." },
          { emoji: "🏠", label: "Live in shared accommodation", note: "Make friends at home, share meals and daily life." },
          { emoji: "🎉", label: "Attend orientation events", note: "Everyone is new and looking for friends too." },
          { emoji: "🤝", label: "Volunteer in the community", note: "Meet locals and help others at the same time." },
        ],
        ideas: [
          "Which option creates regular contact? Friendship needs repeated meetings, not one event.",
          "Which works for shy people? Which helps you meet people outside your own culture?",
        ],
        simple:
          "I believe joining a club is the best way, because you meet people who share your interests every week. Do we all agree on clubs?",
        model:
          "I believe joining a club is the best way, because you meet people who already share your interests — for me, that was the climbing gym. However, I understand that clubs can feel intimidating at first. Group assignments are easier because you're forced to talk. Maybe we can combine both ideas: start with classmates, then expand to clubs. But if we must choose one, I'd say clubs create deeper friendships. Do we all agree clubs are our final answer?",
      },
      {
        topic: "A subject to add to the university curriculum",
        short: "New subject",
        discuss: "How valuable would each subject be for all students?",
        decide: "Choose ONE subject that should be added to the curriculum.",
        options: [
          { emoji: "💰", label: "Personal finance", note: "Budgeting, tax, saving — skills everyone needs." },
          { emoji: "🗣️", label: "Public speaking", note: "Confidence for presentations, interviews and work." },
          { emoji: "🤖", label: "AI & coding basics", note: "Technology skills for almost every future job." },
          { emoji: "🧘", label: "Mental health & wellbeing", note: "Managing stress, sleep and balance as a student." },
        ],
        ideas: [
          "Which subject helps the most students, for the longest time?",
          "Is it the university's job to teach life skills, or only academic subjects?",
        ],
        simple:
          "My suggestion is personal finance — budgeting and tax — because every student needs it but nobody teaches it. Can we agree on that?",
        model:
          "My suggestion is personal finance — tax, budgeting, and superannuation — because every student needs it, but nobody teaches it. I registered as a sole trader here, and I had to learn everything alone. That said, your idea of intercultural communication is also strong, especially on a campus this diverse. Still, I'd argue finance affects daily survival more directly. Can we agree that personal finance is the most practical choice for all students?",
      },
      {
        topic: "Best gift for a teacher who is leaving",
        short: "Gift for a teacher",
        discuss: "How suitable is each gift for a leaving teacher?",
        decide: "Decide on the BEST gift for the teacher.",
        options: [
          { emoji: "📸", label: "Class photo album", note: "Personal memories from the whole class." },
          { emoji: "💐", label: "Flowers and a card", note: "Classic, warm and easy to organise." },
          { emoji: "🎁", label: "Gift voucher", note: "The teacher chooses what they really want." },
          { emoji: "🎬", label: "Video with messages", note: "Every student records a short thank-you message." },
        ],
        ideas: [
          "Personal and memorable vs practical and useful — what would a teacher treasure?",
          "Think about effort, cost, and whether everyone in the class can take part.",
        ],
        simple:
          "What about a photo book with a thank-you message from every student? It's personal and the teacher can keep it forever. Shall we choose that?",
        model:
          "What about a photo book? We could each add a picture and a short thank-you message in our own language — imagine one page in Khmer, one in Chinese, one in Spanish. It's personal and shows our multicultural class. Flowers are nice, but they only last a week. A gift card feels a bit impersonal for someone who taught us for months. So, are we all happy to choose the multilingual photo book as our final decision?",
      },
      {
        topic: "Most important invention of the last 100 years",
        short: "Greatest invention",
        discuss: "How much has each invention changed people's lives?",
        decide: "Choose the MOST important invention of the last 100 years.",
        options: [
          { emoji: "🌐", label: "The internet", note: "Information, communication and work — all transformed." },
          { emoji: "💊", label: "Antibiotics & vaccines", note: "Millions of lives saved from disease." },
          { emoji: "📱", label: "The smartphone", note: "A computer, camera and phone in every pocket." },
          { emoji: "✈️", label: "Modern air travel", note: "The world connected — study abroad became possible." },
        ],
        ideas: [
          "Criteria: how many people it affects, whether it saves lives, whether life is possible without it.",
          "“Smartphones are useful, but without antibiotics many of us wouldn't be alive, so…”",
        ],
        simple:
          "I'd choose the internet, because education, work and communication all depend on it today. Shall we settle on the internet?",
        model:
          "I'd propose the internet, because it made every other modern invention more powerful — education, medicine, communication all depend on it. I do see your argument for antibiotics, which have saved millions of lives directly. That's probably the strongest counterpoint. But if we consider impact on daily life for the most people today, the internet touches everything. Even this course is full of online tools. Shall we settle on the internet as our group's final choice?",
      },
      {
        topic: "Best way to spend a free weekend in Melbourne",
        short: "Weekend in Melbourne",
        discuss: "How enjoyable is each way to spend the weekend?",
        decide: "Decide on the BEST way to spend a free weekend in Melbourne.",
        options: [
          { emoji: "🚗", label: "Great Ocean Road trip", note: "See the Twelve Apostles and amazing coast views." },
          { emoji: "☕", label: "Laneways & café hopping", note: "Street art, coffee culture and hidden shops." },
          { emoji: "🏏", label: "Watch sport at the MCG", note: "Feel the atmosphere of footy or cricket with locals." },
          { emoji: "🌳", label: "Picnic in the Botanic Gardens", note: "Cheap, relaxing and beautiful in good weather." },
        ],
        ideas: [
          "Compare: cost, weather risk, how tired you'll be for Monday, what's unique to Melbourne.",
          "“A road trip is amazing but expensive, whereas a picnic is almost free…”",
        ],
        simple:
          "How about exploring the laneways and Queen Victoria Market? It's free, central and very “Melbourne”. Are we agreed?",
        model:
          "How about a day trip along the Great Ocean Road? It's iconic, and many of us haven't seen it. However, it needs a car and a full day, so it's less flexible. A cheaper option is exploring the laneways and Queen Victoria Market — free, central, and very “Melbourne”. Considering budget and transport, maybe the city option suits more people. So, are we agreed: laneways and the market for this weekend, and the Ocean Road later in the term?",
      },
      {
        topic: "Environmental action your campus should adopt first",
        short: "Campus eco action",
        discuss: "How effective is each environmental action for a campus?",
        decide: "Choose ONE action your campus should adopt FIRST.",
        options: [
          { emoji: "🚫", label: "Ban single-use plastics", note: "No plastic cups, straws or cutlery on campus." },
          { emoji: "☀️", label: "Install solar panels", note: "Clean energy for campus buildings." },
          { emoji: "♻️", label: "Better recycling stations", note: "Clear bins for paper, plastic, glass and food waste." },
          { emoji: "🌱", label: "Plant trees & a community garden", note: "Green spaces that students help look after." },
        ],
        ideas: [
          "Compare speed vs impact: a plastic ban starts tomorrow; solar panels cost more but cut emissions for decades.",
          "Which action also changes students' behaviour and awareness?",
        ],
        simple:
          "I think the first step should be banning single-use plastics in the café, because it can start immediately and everyone sees it every day. Do you agree?",
        model:
          "In my view, the first step should be banning single-use plastics in the campus café, because it's visible, immediate, and changes daily habits. Solar panels are a great long-term idea, but they need big budgets and years of planning. Recycling bins already exist, so the plastic ban adds something new. Quick wins build momentum for bigger projects. So can we agree our recommendation is: start with the single-use plastic ban, then move to solar?",
      },
      {
        topic: "Which facility does your campus need most?",
        short: "Campus facility",
        discuss: "How much would each facility improve student life?",
        decide: "Decide which facility your campus needs MOST.",
        options: [
          { emoji: "🏋️", label: "A gym", note: "Fitness and stress relief between classes." },
          { emoji: "📚", label: "More library space", note: "Quiet places to study, especially at exam time." },
          { emoji: "☕", label: "A café", note: "Affordable food and a place to meet friends." },
          { emoji: "🪑", label: "Group study rooms", note: "Space for projects and practising presentations." },
        ],
        ideas: [
          "Who benefits from each option — everyone, or only some students?",
          "What do students complain about most right now? Start from the real problem.",
        ],
        simple:
          "I'd argue for more study rooms, because in exam weeks it's impossible to find a quiet space. Shall our final answer be study rooms?",
        model:
          "I'd argue for more study rooms, because during exam weeks it's almost impossible to find a quiet space, and not everyone can study at home — I share a house, for example. A gym would be great for health, I agree, but there are commercial gyms nearby, while free study space is something only the campus can provide. A café already exists on our street. So shall our final decision be additional bookable study rooms?",
      },
      {
        topic: "Best transport option for students commuting to the city",
        short: "Student transport",
        discuss: "What are the advantages and disadvantages of each option?",
        decide: "Choose the BEST transport option for students commuting to the city.",
        options: [
          { emoji: "🚋", label: "Tram", note: "Frequent, free in the city centre, but slow at rush hour." },
          { emoji: "🚆", label: "Train", note: "Fast over long distances, student discounts available." },
          { emoji: "🚲", label: "Bicycle", note: "Free, healthy and green, but weather and safety matter." },
          { emoji: "🚌", label: "Bus", note: "Reaches places trains and trams don't." },
        ],
        ideas: [
          "Criteria: cost, speed, reliability, health, environment, and how far away students live.",
          "The best option may depend on distance — say so, then choose for a typical student.",
        ],
        simple:
          "Based on my daily experience, the train is best: it's fast, affordable with a concession fare, and you can study during the trip. Are we all happy with the train?",
        model:
          "Based on my daily experience, the train is the best option: it's fast, you can study during the trip, and the concession fare makes it affordable. Cycling is healthy and I ride an e-bike for work, but the distance from the outer suburbs makes it unrealistic every day. Driving is expensive with city parking. So trains suit the most students in the most situations. Are we all comfortable choosing the train as our answer?",
      },
      {
        topic: "Plastic waste",
        short: "Plastic waste",
        discuss: "What are the problems of plastic for the environment?",
        decide: "Which is the best solution to plastic waste?",
        options: [
          { emoji: "📦", label: "Paper & cardboard packaging", note: "Replace plastic packaging with paper alternatives." },
          { emoji: "🌊", label: "Cleaning up ocean plastic", note: "Organise clean-ups of beaches, rivers and the ocean." },
          { emoji: "🚫", label: "Banning single-use plastics", note: "Governments ban plastic bags, straws and cutlery." },
          { emoji: "♻️", label: "Recycling plastic waste", note: "Collect, sort and recycle plastic into new products." },
        ],
        ideas: [
          "Problems: plastic pollutes oceans, harms wildlife, takes hundreds of years to break down, microplastics enter our food.",
          "Compare solutions: which is fastest? cheapest? most realistic? who is responsible — governments, companies or individuals?",
          "Recycling helps but not all plastic can be recycled; bans prevent waste before it exists.",
        ],
      },
      {
        topic: "Reducing the effects of climate change",
        short: "Climate change",
        discuss: "How good are these options for reducing the effects of climate change?",
        decide: "Which option would be the MOST effective?",
        options: [
          { emoji: "🏫", label: "Education & awareness", note: "Teach children and communities about climate change." },
          { emoji: "🏛️", label: "Government policies", note: "Laws and taxes to limit pollution and emissions." },
          { emoji: "♻️", label: "Recycling programs", note: "Separate paper, plastic and glass to reduce waste." },
          { emoji: "🌬️", label: "Renewable energy", note: "Solar panels and wind turbines instead of fossil fuels." },
        ],
        ideas: [
          "Evaluate each option: short-term vs long-term impact, cost, how many people it affects.",
          "Renewable energy attacks the main cause (fossil fuels); education changes behaviour for the next generation.",
          "You can combine: “Ideally we need both, but if we have to choose one…”",
        ],
      },
      {
        topic: "Healthy lifestyle",
        short: "Healthy lifestyle",
        discuss: "How good are these options for staying healthy as a student?",
        decide: "Which option is the MOST important?",
        options: [
          { emoji: "🥗", label: "Eating a balanced diet", note: "Cook at home, eat fruit and vegetables every day." },
          { emoji: "🏃", label: "Regular exercise", note: "Sport, gym or walking at least 30 minutes a day." },
          { emoji: "😴", label: "Getting enough sleep", note: "7–9 hours of sleep and a regular routine." },
          { emoji: "🧘", label: "Managing stress", note: "Breaks, hobbies, meditation, talking to friends." },
        ],
        ideas: [
          "Think about what students actually struggle with: late nights, fast food, exam stress.",
          "Argue that one habit supports the others: “If you sleep well, it's easier to exercise and eat well.”",
        ],
      },
      {
        topic: "Improving your English",
        short: "Improving English",
        discuss: "How useful are these ways of improving your English?",
        decide: "Which is the BEST way to improve quickly?",
        options: [
          { emoji: "🎬", label: "Watching films & series", note: "Watch in English with or without subtitles." },
          { emoji: "🗣️", label: "Speaking with native speakers", note: "Language exchanges, clubs, making local friends." },
          { emoji: "📚", label: "Studying grammar & vocabulary", note: "Textbooks, apps and word lists." },
          { emoji: "✈️", label: "Living in an English-speaking country", note: "Full immersion in daily life." },
        ],
        ideas: [
          "Distinguish between input (watching, reading) and output (speaking, writing).",
          "Mention your own experience: what has worked for you?",
        ],
      },
    ],
  },

  /* ----------------------------------------------------------
     PART 3 — Group Discussion
     ---------------------------------------------------------- */
  part3: {
    title: "Part 3 — Group Discussion",
    instructions:
      "Your group discusses a bigger question. Share and compare views, ask each " +
      "other follow-up questions and react to each other's answers. Questions marked " +
      "S6 are perfect for showing Intercultural Competence — compare Cambodia, Japan " +
      "and Australia naturally in your answers.",
    prepSeconds: 30,
    speakSeconds: 240,
    tasks: [
      {
        question: "Is it appropriate to give a hug to a friend when you say goodbye?",
        short: "Hugging to say goodbye",
        s6: true,
        ideas: [
          "In what situations do people give each other a hug in your culture? Why?",
          "Do people give each other a hug to say goodbye in other cultures? In what situations?",
          "How would you feel if your friend hugged you in a way that is different from use in your culture?",
        ],
        tips: [
          "Compare cultures: “In Cambodia we usually…, whereas in Australia…”",
          "Use hedging: “It depends on the situation / how close you are.”",
          "Ask your partner: “What about in your culture?”, “Would you feel comfortable if…?”",
        ],
      },
      {
        question: "Is it impolite to interrupt someone during a discussion?",
        short: "Interrupting people",
        s6: true,
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
        question: "Is it better to study in your home country or overseas?",
        short: "Study at home or overseas?",
        ideas: [
          "What can you gain from studying overseas — language, independence, new perspectives?",
          "What do you give up — family, cost, comfort, your own culture's way of learning?",
          "Does it depend on the subject, the person, or the stage of life?",
        ],
        tips: [
          "You are living the answer! Use your own experience in Melbourne as evidence.",
          "Balance both sides before concluding: “On the one hand… on the other hand… Overall…”",
        ],
        simple:
          "I think studying overseas is more valuable, although it's harder. You learn independence and confidence, not just the subject. What do you think?",
        model:
          "From my own experience, studying overseas is more valuable, although it's definitely harder. I've now studied in Japan and Australia, and each country taught me something beyond the classroom — in Japan, discipline and attention to detail; here, independence and confidence in speaking up. Studying at home is cheaper and more comfortable, and family support matters, so I understand why some students stay. But overseas study forces you to grow. What do you think — did moving abroad change you as well?",
      },
      {
        question: "Should university education be free for everyone?",
        short: "Free university?",
        ideas: [
          "Who benefits when education is free — individuals, or the whole society?",
          "Who should pay — taxpayers, students later through loans, or a mix?",
          "Would free education change how seriously students study?",
        ],
        tips: [
          "Compare countries you know: fees in Australia and Japan vs other systems.",
          "Useful language: “taxpayers”, “tuition fees”, “student loans”, “equal opportunity”.",
        ],
        simple:
          "I believe university should be low-cost but not completely free, because someone has to pay for quality teaching. High fees create inequality though. How does it work in your country?",
        model:
          "I believe university should be low-cost, but perhaps not completely free. If education is free, governments may struggle to fund quality teaching, and some students might not take it seriously. However, high fees create inequality — in Cambodia, many talented students simply can't afford university, which is a huge waste of potential. A middle path like Australia's HECS system, where you repay only after earning a good salary, seems fair to me. How does it work in your countries?",
      },
      {
        question: "How does social media affect young people?",
        short: "Social media & young people",
        ideas: [
          "Positive effects: staying connected, learning, creativity, finding communities.",
          "Negative effects: comparison, sleep, concentration, fake news, cyberbullying.",
          "Should there be age limits or time limits? Whose responsibility is it?",
        ],
        tips: [
          "Give a personal example: how you use social media to stay in touch with home.",
          "Useful language: “screen time”, “to scroll”, “influencer”, “to compare yourself to others”.",
        ],
        simple:
          "Social media is a double-edged sword. It keeps me connected with my family overseas, but it also wastes time and makes people compare themselves. It depends how you use it. Do you set limits for yourself?",
        model:
          "In my opinion, social media is a double-edged sword. On the positive side, it keeps me connected with my family in Cambodia and friends in Japan — without it, living abroad would be much lonelier. It's also how many young people learn skills and find opportunities. On the negative side, it encourages comparison and wastes enormous amounts of time; I have to limit my own scrolling. Overall, I'd say the effect depends on how consciously you use it. Do you set limits for yourselves?",
      },
      {
        question: "Is it important to learn about other cultures? Why?",
        short: "Learning about cultures",
        s6: true,
        badge: "S6 ⭐ great for Intercultural Competence",
        ideas: [
          "How does understanding other cultures help you in study, work and friendship?",
          "What misunderstandings can happen when people don't know each other's customs?",
          "What is the best way to learn about a culture — travel, friends, food, language, media?",
        ],
        tips: [
          "Perfect for comparing Cambodia, Japan and Australia — give one real example from each.",
          "Tell a short story of a cultural misunderstanding you experienced and what it taught you.",
          "Useful language: “to broaden your horizons”, “stereotype”, “to see things from another point of view”.",
        ],
        simple:
          "Absolutely. I've lived in Cambodia, Japan and Australia, and each culture corrected ideas I didn't know I had. For example, in Japan silence shows respect, but in Australia it can seem unfriendly. Have you experienced culture shock here?",
        model:
          "Absolutely, and I'd say my whole life proves it. I grew up in Cambodia, spent four years in Japan, and now live in Australia, and each culture corrected assumptions I didn't know I had. For example, in Japan silence shows respect, while in Australia silence can seem unfriendly — knowing that prevents misunderstandings. Cultural knowledge also matters professionally: as a future architect, I need to understand how different communities use space. Without cultural learning, globalisation just creates friction. Have you experienced culture shock here?",
      },
      {
        question: "Should students work part-time while studying?",
        short: "Part-time work",
        ideas: [
          "Benefits: money, independence, real-world skills, English practice, time management.",
          "Risks: tiredness, less study time, stress during exams.",
          "Does it depend on how many hours? Is there a healthy limit?",
        ],
        tips: [
          "Suggest a balanced answer: “Yes, but no more than X hours a week, because…”",
          "Compare attitudes to student jobs in different countries if you can.",
        ],
        simple:
          "Yes, but with limits. I work part-time and it improves my English every shift, but if you work too much your grades suffer. Study should stay the priority. Do you find balancing both difficult?",
        model:
          "Speaking from experience — I work as a delivery rider — I'd say yes, with limits. Work teaches things university can't: time management, dealing with customers, understanding tax and money. It also improves my English every single shift. However, the risk is real: if you work too many hours, your grades suffer, and our visas actually limit us to 48 hours a fortnight for that reason. So my position is: work, but treat study as the priority. Do you find balancing both difficult?",
      },
      {
        question: "Is technology making people more or less connected?",
        short: "Technology & connection",
        ideas: [
          "More connected: video calls with family overseas, group chats, finding people like you.",
          "Less connected: phones at dinner, fewer face-to-face conversations, loneliness online.",
          "Is the quality of connection as important as the quantity?",
        ],
        tips: [
          "Use your life as an international student: technology is how you stay close to home.",
          "Distinguish: “connected” vs “close” — you can have 500 followers and still feel lonely.",
        ],
        simple:
          "Technology connects us across distance but sometimes disconnects us across the table. I video-call my parents every week, but I also see friends in cafés all looking at their phones. What's your experience?",
        model:
          "I think technology connects us across distance but sometimes disconnects us across the table. Thanks to video calls, I speak with my parents in Siem Reap every week — twenty years ago, international students basically disappeared from their families. At the same time, I've noticed friends sitting together in a café, all looking at their phones. In Japan, this is very common on trains too. So technology gives us connection, but we have to choose to use it. What's your experience?",
      },
      {
        question: "What are the benefits and challenges of living in a multicultural city?",
        short: "Multicultural city life",
        s6: true,
        badge: "S6 ⭐ great for Intercultural Competence",
        ideas: [
          "Benefits: food, festivals, languages, tolerance, new friends and ideas.",
          "Challenges: language barriers, misunderstandings, communities staying separate, homesickness.",
          "How can people from different cultures understand each other better?",
        ],
        tips: [
          "Compare life in Melbourne with your hometown in Cambodia or Japan — what surprised you?",
          "Name real Melbourne examples: Lunar New Year, Ramadan night markets, Greek precinct, Khmer New Year events.",
          "Useful language: “a melting pot”, “cultural diversity”, “to feel at home”, “language barrier”.",
        ],
        simple:
          "The biggest benefit is everyday learning — my classmates come from everywhere and even ordering food is a cultural experience. The challenge is that misunderstandings happen and new migrants can feel isolated. What benefits have you noticed?",
        model:
          "Melbourne is my first truly multicultural city, and I love it. The biggest benefit is everyday learning — my classmates come from everywhere, and even ordering food becomes a cultural experience. Coming from Japan, which is quite homogeneous, the contrast is striking. The challenges are real too: misunderstandings happen, some communities stay separate, and new migrants can feel isolated, which I felt in my first month. But overall, diversity makes a city more creative and resilient. What benefits have you noticed?",
      },
      {
        question: "Should public transport be free in big cities?",
        short: "Free public transport?",
        ideas: [
          "Benefits: less traffic and pollution, fairer for people on low incomes, students save money.",
          "Problems: who pays for it? crowded services, quality might drop.",
          "Are there middle options — free for students, free city zones like Melbourne's free tram zone?",
        ],
        tips: [
          "Use Melbourne's free tram zone as a real example — does it work well?",
          "Useful language: “congestion”, “fares”, “to fund”, “accessible to everyone”.",
        ],
        simple:
          "I like the idea, but fully free isn't realistic — someone still pays through taxes. Melbourne's free tram zone is a good compromise: free in the centre, paid beyond. What about your cities?",
        model:
          "I'm sympathetic to the idea, but I don't think fully free is realistic. Free transport would reduce traffic and pollution, and help low-income people, including students like us. However, someone still pays — usually through taxes — and free systems can become overcrowded and underfunded. Melbourne's free tram zone is an interesting compromise: free in the centre, paid beyond. I'd support that model plus cheaper concession fares. In Cambodia, public transport barely exists, so any investment is progress. What about your cities?",
      },
      {
        question: "Is online learning as effective as face-to-face learning?",
        short: "Online vs face-to-face",
        ideas: [
          "Online advantages: flexible, you can rewatch lectures, study from anywhere.",
          "Face-to-face advantages: focus, friendships, asking questions easily, group work, motivation.",
          "Does it depend on the subject — languages and labs vs theory lectures?",
        ],
        tips: [
          "Give a personal example of both kinds of classes and compare honestly.",
          "A strong structure: “For X it's just as effective, but for Y nothing replaces a classroom.”",
        ],
        simple:
          "Online learning is convenient but not equally effective, especially for languages. Speaking practice needs real people and real eye contact. A mix is ideal, but face-to-face should be the core. Do you learn well online?",
        model:
          "From my experience, online learning is convenient but not equally effective, especially for language learning. When I studied online during the pandemic in Japan, I learned content, but I lost motivation and social connection. In our English course, speaking practice needs real people, real eye contact, real interruptions — exactly what we're doing now. That said, online works well for flexible review and recorded lectures. So my view is: a mix is ideal, but face-to-face should be the core. Do you learn well online?",
      },
      {
        question: "How important is it to keep traditions in a modern world?",
        short: "Traditions in a modern world",
        s6: true,
        badge: "S6 ⭐ great for Intercultural Competence",
        ideas: [
          "Which traditions are important in your culture? What do people do?",
          "Are young people less interested in traditions nowadays? Why / why not?",
          "Can traditions change and modernise but stay meaningful? Should some be let go?",
        ],
        tips: [
          "Rich ground for Cambodia–Japan–Australia comparison: Khmer New Year, Japanese tea ceremony or festivals, Australia Day / ANZAC Day.",
          "Talk about identity: traditions connect you to family and history even when you live abroad.",
          "Useful language: “to pass down”, “heritage”, “to die out”, “to adapt traditions”.",
        ],
        simple:
          "Traditions are like a foundation — you can build something modern on top, but you shouldn't demolish it. In Cambodia, Khmer New Year gives people identity and pride. How does your country balance old and new?",
        model:
          "I think traditions are like a foundation — you can build something modern on top, but you shouldn't demolish it. In Cambodia, Angkor Wat and Khmer New Year give people identity and pride after a very difficult history. Japan impressed me because it modernises without abandoning tradition: high-tech cities, but tea ceremony and temples remain. As a future architect, I want to design that way too — contemporary buildings that respect heritage. However, traditions that harm people should evolve. How does your country balance this?",
      },
      {
        question: "Should people be encouraged to live in cities or rural areas?",
        short: "Cities or rural areas?",
        ideas: [
          "Cities: jobs, education, healthcare, entertainment — but expensive, crowded, stressful.",
          "Rural areas: nature, community, cheaper housing — but fewer opportunities and services.",
          "Can remote work change the balance? What should governments encourage?",
        ],
        tips: [
          "Compare your hometown and Melbourne — which lifestyle suits which people?",
          "Useful language: “cost of living”, “job opportunities”, “sense of community”, “commute”.",
        ],
        simple:
          "We shouldn't push everyone to cities. Cities offer jobs and education, but overcrowding creates housing problems while rural areas decline. Governments should invest in regional areas too. Where would you prefer to live?",
        model:
          "I'd argue we shouldn't push everyone to cities, even though I chose one myself. Cities offer jobs, education, and healthcare — that's why I live in Melbourne. But overcrowding creates housing crises, which Melbourne clearly has, while rural areas decline. Japan handles this interestingly: some towns pay young people to relocate to the countryside. With remote work growing, rural living is becoming more practical. So governments should invest in regional areas rather than letting everyone crowd into capitals. Where would you prefer to live?",
      },
      {
        question: "Is travel the best way to learn about the world?",
        short: "Travel & learning",
        ideas: [
          "What can travel teach that books and the internet cannot?",
          "Can you learn about the world without travelling — through food, friends, films, languages?",
          "Does short tourist travel really teach culture, or just show the surface?",
        ],
        tips: [
          "Distinguish tourism from living somewhere: “Visiting a country is one thing, living there is another.”",
          "Use your experience: what did you only understand about Australia after moving here?",
        ],
        simple:
          "Travel is powerful, but living somewhere teaches more than visiting. A tourist sees Angkor Wat in one day; living in Siem Reap teaches you the community around it. What has taught you most about the world?",
        model:
          "Travel is powerful, but I'd say living somewhere teaches more than visiting. A tourist sees Angkor Wat in one day; living in Siem Reap teaches you the community around it. Similarly, my four years in Japan taught me things no two-week trip could — the unwritten social rules, the work culture, the language. That said, travel is still far better than only reading about places, because it challenges stereotypes directly. So: travel if you can, live abroad if you get the chance. What has taught you most?",
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
      category: "Comparing cultures (S6 ⭐)",
      icon: "🌏",
      phrases: [
        { en: "In Cambodia we tend to…, whereas in Australia…", note: "direct comparison" },
        { en: "One thing that surprised me when I arrived was …", note: "personal experience" },
        { en: "In Japanese culture, it's considered polite to …", note: "explaining a custom" },
        { en: "It's quite similar in my culture, except that …", note: "similarity + difference" },
        { en: "At first it felt strange, but now I understand why …", note: "shows open-mindedness" },
        { en: "Both cultures value…, they just show it differently.", note: "deep comparison" },
        { en: "We shouldn't judge — it's just a different way of doing things.", note: "intercultural attitude" },
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
      icon: "🎎",
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
        { en: "heritage", note: "traditions passed down through generations" },
        { en: "to pass down traditions", note: "give them to the next generation" },
        { en: "a stereotype", note: "a fixed (often wrong) idea about a group" },
        { en: "language barrier", note: "when language makes communication hard" },
      ],
    },
    {
      category: "Student life & education",
      icon: "🎓",
      words: [
        { en: "tuition fees", note: "money you pay to study" },
        { en: "scholarship / student loan", note: "ways to pay for study" },
        { en: "curriculum", note: "the subjects a school teaches" },
        { en: "assignment / deadline", note: "study tasks and their due dates" },
        { en: "face-to-face vs online learning", note: "in person vs on the internet" },
        { en: "to balance work and study", note: "manage both at once" },
        { en: "part-time job / casual work", note: "work alongside study" },
        { en: "time management", note: "organising your hours well" },
        { en: "to gain work experience", note: "learn skills from a job" },
        { en: "homesickness / to feel homesick", note: "missing home" },
        { en: "to settle in", note: "get comfortable in a new place" },
        { en: "orientation week", note: "first week for new students" },
      ],
    },
    {
      category: "Technology & social media",
      icon: "📱",
      words: [
        { en: "screen time", note: "hours spent on devices" },
        { en: "to scroll (through a feed)", note: "move through posts" },
        { en: "to stay in touch / to stay connected", note: "keep contact with people" },
        { en: "face-to-face interaction", note: "real-life communication" },
        { en: "cyberbullying", note: "bullying online" },
        { en: "fake news / misinformation", note: "false information online" },
        { en: "to compare yourself to others", note: "a danger of social media" },
        { en: "addictive / addiction", note: "hard to stop using" },
        { en: "digital detox", note: "a break from devices" },
        { en: "invention / innovation", note: "new things people create" },
      ],
    },
    {
      category: "City life & transport",
      icon: "🏙️",
      words: [
        { en: "public transport", note: "trams, trains, buses" },
        { en: "commute / to commute", note: "regular trip to work or study" },
        { en: "rush hour / peak time", note: "busiest travel times" },
        { en: "congestion / traffic jam", note: "too many cars" },
        { en: "fares", note: "the price of a ticket" },
        { en: "cost of living", note: "how expensive daily life is" },
        { en: "job opportunities", note: "chances to find work" },
        { en: "sense of community", note: "feeling of belonging" },
        { en: "facilities", note: "buildings/services like gyms, libraries" },
        { en: "convenient / accessible", note: "easy to use or reach" },
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
