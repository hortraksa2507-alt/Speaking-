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
        topic: "You & Your Hometown",
        questions: [
          "Describe your hometown and what makes it special.",
          "Describe a person who has influenced your life.",
          "Talk about a festival or celebration in your country.",
        ],
        tips: [
          "Hometown: location, size, famous food or places, and one thing you personally love about it.",
          "Person: who they are, what they did, and how they changed you — “Thanks to her, I…”.",
          "Festival: when it happens, what people eat, wear and do — describe it so the examiner can picture it.",
        ],
      },
      {
        topic: "Student Life in Melbourne",
        questions: [
          "What do you enjoy most about studying in Melbourne?",
          "Talk about your daily routine as a student.",
          "What do you find difficult about learning English?",
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
          "Talk about a hobby you do in your free time.",
          "Describe your favourite way to relax after a busy day.",
          "What kind of food do you like and why?",
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
          "Describe a place you would like to visit in the future.",
          "What job would you like to do in the future and why?",
          "Talk about a skill you would like to learn.",
        ],
        tips: [
          "Use future forms: “I'm planning to…”, “I hope to…”, “One day I'd love to…”.",
          "Give two reasons: one practical (career, money) and one personal (passion, family).",
          "Skill: say how you would learn it — a course, online videos, practising with friends.",
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
