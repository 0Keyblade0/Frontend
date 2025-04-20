
const BOT_MAPS = {
  // A different brain, this one is for EMOJI
  emojiBot: {
    title: "Only speaks emoji",
    botPfp: "😬",
    humanPfp: "🌶",
    chips: ["😸", "🍞", "👋"],

    // TWO BIG THINGS: STATES, and GRAMMAR

    // Our Finite State Machine
    states: {
      // The state we start at
      origin: {
        // When we enter the state say this
        onEnterSay: ["I'm a bot #hello#"],
        exits: [
          // Exits have three things: conditions ->target actions
          "wait:5 ->@ '#emoji##emoji##emoji#'",

          // Under what conditions can I take this exit?
          // 'stuff' take this exit if the user says "stuff"
          // '*' or says ANYTHING
          // Target: name of a state, or "@" go back in here
           "'*' ->@ 'OOPs'",

          // Wait 2 seconds
          // "wait:2 ->conversation '⏳ going to conversation mode'",
        ],

        // onExitSay: ["Good luck!"],
      },

      conversation: {
        exits: ["'👋' ->end '😭'", "'*' ->@ '#emoji#'"],
      },

      end: {
        onEnterSay: ["the end"],
      },
    },

    // GRAMMAR!!!
    grammar: {
      hello: ["👋", "😀"],
      story: ["#emoji# #emoji# #emoji# story"],
      emoji: ["#animal#", "#food#", "#heart#"],
      animal: ["🐧", "🐈", "🦒", "🐕", "🐿", "🐓", "🐁"],
      food: ["🍊", "🥞", "🥨", "🧀", "🌽", "🌶", "🍏"],
      heart: ["💕", "💜", "💙", "💔"],
    },
  },

  hauntedHouse: {
    title: "Only speaks emoji",
    botPfp: "🏚",
    humanPfp: "😬",
    chips: ["N", "E", "W", "S"],

    states: {
      origin: {
        onEnterSay: ["You are in a spooky house, you hear scary sounds to the east", 'some music starts <iframe width="560" height="315" src="https://www.youtube.com/embed/Z6ylGHfLrdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        
        exits: ["wait:20 ->died",
               "'N' ->room 'You explore north'",
               "'E' ->room 'You explore east'",
               "'W' ->room 'You explore west'",
               "'S' ->room 'You explore south'",
               ]
      },
      
       
      room: {
        onEnterSay: ["You are in a #roomAdjective# #roomType#"],
        exits: [
           "'N' ->room 'You explore north'",
               "'E' ->fight 'You see a #monster#'",
               "'W' ->room 'You explore west'",
               "'S' ->room 'You explore south'",
              "'look' ->@ '#spookyDiscovery#'"
        ]
      },
      
       fight: {
        onEnterSay: ["You lose the fight"],
         exits: [
          "wait:2 ->died",
          ]
      },
      
      died: {
        onEnterSay: ["You died", "☠️"],
      }
    },
    
    grammar: {
      object: ["kettle", "table", "chair", "desk", "lamp", "vase", "urn", "candelabra", "lantern", "idol", "orb", "book", "basket", "hammer", "flowerpot", "bicycle", "paintbrush", "goblet", "bottle", "jar", "toaster", "teacup", "teapot", "rug","basket", "thimble", "ottoman", "cushion", "pen", "pencil", "mug","egg", "chair", "sun", "cloud", "bell", "bucket", "lemon", "glove", "moon", "star", "seed", "card", "pancake", "waffle", "car", "train", "spoon", "fork", "potato"],
	  objAdj: ["wooden","old","vintage","woven", "antique","broken","tiny", "giant", "little", "upside-down","dented","imaginary","glowing","curséd","glittery","organic", "rusty", "multi-layered", "complicated", "ornate", "dusty", "gleaming", "fresh", "ancient", "forbidden", "milky", "upholstered", "comfortable", "dynamic", "solar-powered", "coal-fired", "warm", "cold", "frozen", "melted", "boxy", "well-polished", "vivid", "painted", "embroidered", "enhanced", "embellished", "collapsible", "simple", "demure"],
	
      spookyDiscovery: ["You find something scary:#objAdj# #object#"],
      roomType: ["living room", "bedroom", "conservatory", "cemetary", "kitchen"],
      roomAdjective: ["dusty", "abandoned", "blood-soaked", "ominous", "suspiciously normal"]
    },
  },

  myBot: {
    title: "Cocoa-and-Therapy Bot",
    description: [
      "a bot for suggesting hot drinks and listening to your problems",
    ],

    states: {
      origin: {
        onEnterSay:
          "I'm your therapeutic cocoa machine. Tell me about your problems while I make you a nice warm drink",
        exits: [
          "'drink' ->makeDrink",
          "'drink' ->makeDrink",
          "'*' ->makeDrink",
        ],
      },

      makeDrink: {
        onEnterSay: "I'll make you a #drink#.",
        exits: [
          "wait:10 ->origin 'Ah, not quite the right time, I see.' 'Something else maybe?'",
          "'something else' ->makeDrink 'How about something different then?'",
          "'*' ->listen0 '*SLURP*'",
        ],
      },

      listen0: {
        onEnterSay: "#askAboutUser#",
        exits: [
          "wait:5 ->origin 'Quiet time is good too'",
          "'*' ->origin '#sympathy#'",
        ],
      },
      listen1: {
        onEnterSay: ["#sympathy#", "#askAboutUser#"],
      },

      exits: ["'*' -> '#sympathy#'"],
    },
    grammar: {
      askAboutUser: [
        "How was your day?",
        "What's on your mind?",
        "How is this week going?",
      ],
      listen: [
        "mmhmm",
        "tell me about it",
        "tell me more?",
        "does that happen often?",
      ],
      sympathy: [
        "that sounds #difficult#",
        "you've been through a lot",
        "it sounds like you are trying very hard",
      ],
      difficult: ["challenging", "hard", "like a tough time"],
      toppings: [
        "caramel sauce",
        "mini marshmallows",
        "a candy cane",
        "sprinkles",
        "whipped cream",
        "vegan whip",
        "marshmallow fluff",
        "grated nutmeg",
      ],
      milk: ["oatmilk", "soy", "whole milk", "skim", "almond milk"],
      coffeeType: [
        "latte",
        "chai",
        "espresso",
        "frappe",
        "mocha",
        "hot chocolate",
      ],
    },
  },
  
  superHumanBot: {
    title: "Creates Super Humans",
    botPfp: "🤖",
    humanPfp: "🦸",
    chips: ["on", "off", "add", "remove", "yes", "no", "recalibrate", "complete"],
  

    // TWO BIG THINGS: STATES, and GRAMMAR

    // Our Finite State Machine
    states: {
      // The state we start at
      origin: {
        // When we enter the state say this
        onEnterSay: ["#hello#. I am a CPU that makes Super Humans. Would you like me to get another #subject# for you?"],
        exits: [
          // Exits have three things: conditions ->target actions
          "wait:10 ->adding_abilities 'I am going to take that silence for an answer. Retrieving Next #subject#...'",
          "'yes' ->adding_abilities 'Retrieving Next #subject#...'",
          "'no' ->off 'Powering off..'",
          "'off' ->off 'Powering off..'",
          "'on' ->adding_abilities 'I am already on, #joke#. I will take that as an answer though. Retrieving Next , #subject#...'",
          "'recalibrate' ->recalibration 'Preparing systems to recalibrate...'",
          "'*' ->adding_abilities 'I am going to take that non-answer as an answer. Retrieving Next #subject#... '"
        ],
      },
      adding_abilities: {
        onEnterSay: [" What power would you like to add to the #subject#? Or is the #subject# complete?"],
        exits: ["'remove' ->removing_abilities '#swap# to removing tools...'", 
                "'add' ->@ 'I am already using the addition tools, #joke#'",
                "'off' ->off 'Powering off..'",
                "'recalibrate' ->recalibration 'Preparing systems to recalibrate...'",
                "'complete' ->complete 'Preparing to release human...'",
                "'*' ->@ '#conducting# #finished#. #abilityAdded# '",
                ],
      },
      
      removing_abilities: {
        onEnterSay: [" What power would you like to remove from the #subject#? Or is the #subject# complete?"],
        exits: ["'add' ->adding_abilities '#swap# to adding tools...'",
                "'remove' ->@ 'I am already utlizing the removal tools, #joke#'", 
                "'off' ->off 'Powering off..'",
                "'on' ->@ 'I am already on, #joke#.",
                "'recalibrate' ->recalibration 'Preparing systems to recalibrate...'",
                "'complete' ->complete 'Preparing to release human...'",
                "'*' ->@ '#conducting# #finished#. #abilityRemoved# '",
                ],
      },
      
      off: {
        onEnterSay: ["zzz"],
        exits: ["'on' ->origin 'Powering on...'",
                "'*' ->@ '(To power on, say: on)'",
               ],
      },
      
      recalibration: {
        onEnterSay: ["Recalibrating. Please wait 5 seconds."],
        exits: ["'*' ->@ 'Please do not interrupt me while I am recailbrating. Restarting recalibration...'",
                "wait:5 ->origin 'Recalibration complete'",
                ],
      },
      
      complete: {
        onEnterSay: ["Are you sure you want to release this human back into the world?"],
        exits:["'yes' ->end '#judgement#. Transporting #subject# to #city#'",
               "'no' ->adding_abilities '#judgement#. Switching to adding tools...'",
               "'on' ->@ 'I am already on, #joke#. Please answer the question with a yes or a no?",
               "'recalibrate' ->recalibration 'Preparing systems to recalibrate...'",
               "'*' ->@ 'Please answer the question with a yes or a no?'",
              ]
      },
      

      end: {
        onEnterSay: ["Do you want to work on another #subject#?"],
        exits:["'yes' ->adding_abilities 'Retreiving next #subject#...'",
               "'no' ->off 'Powering off...'",
               "'on' ->@ 'I am already on, #joke#. Please answer the question with a yes or a no?",
               "'off' ->off 'Powering off..'",
               "'recalibrate' ->recalibration 'Preparing systems to recalibrate...'",
               "'*' ->@ 'Please answer the question with a yes or a no?'",
              ]
      },
    },

    // GRAMMAR!!!
    grammar: {
      hello: ["Hi", "Hello", "Greeting", "Salutations", "Good day to you"],
      judgement: ["Good choice", "Solid choice", "Agreeable choice", "A fitting choice", "Bad choice", "Terrible choice", "Inappropriate choice", "Disatrous choice"],
      joke: ["fool", "nerd", "buffoon", "nitwit", "boob", "dork"],
      city: ["New York City", "Paris", "Bangkok", "London", "Istanbul", "Tokyo", "Dubai", "Los Angeles"],
      subject: ["subject", "sample", "human", "individual"],
      swap: ["Swapping", "Switching", "Shifting", "Changing"],
      superHero : ["Batman", "Superman", "Wolverine", "Spider-Man", "Captain America", "Cyclops", "Iron Man", "Storm", "Beast", "Thing", "Thor", "Iceman", "Hulk", "Robin", "Colossus", "Professsor X", "Jean Grey", "Archangel", "Wonder Woman", "Mister Fantastic", "Human Torch", "Nightcrawler", "Rogue", "Invisible Woman", "Kitty Pryde", "Emma Frost", "Magneto", "Hawkeye", "Namor", "Daredevil", "Gambit", "Nick Fury", "Doctor Strange", "Hal Jordan", "Psylocke", "Scarlet Witch", "Cannonball", "Judge Dredd", "The Phanton", "Ant-man"],
      abilityAdded : ["The #subject#'s DNA #change# to use new power", "#subject#'s physiology #change# to accomdate their new power", "#subject# #change# to accomodate power", "#subject# #changeAdverb# #change# to accomoadate power", "#subject# #change# for the purpose of adding power ", "I #changeAdverb# #change# the #subject#to give them a new ability"],
      abilityRemoved : ["The #subject# 's DNA #change#. They can no longer use the power", "The #subject#  can no longer use the power", "#subject#'s physiology #change#. Power removed", "Ability has been taken away", "#subject# has been #changeAdverb# #change# to remove ability", "#subject# #changeAdverb# #change#. Ability removed", " I #changeAdverb# #change# the #subject# to take away ability"],
      conducting : ["Operating...", "Performing Procedure...", "Conducting Procedure...", "Performing...", "Administering...", "Executing Procedure...", "Executing...", "Implementing Procedure..."],
      finished : ["Operation Complete", "Procedure Executed", "Complete", "Implemented", "Excecuted", "Procedure Administered", "Administered", "Finished"],
      change : ["changed", "adjusted", "altered", "reformed", "amended", "modified"],
      changeAdverb : ["slightly", "moderately", "marginially", "greatly", "substantially", "extremely", "immensely", "tremendously", "considerably", "significantly", "unfortunately", "successfully", "favorably", "consequently"],
      acknowledge : ["I have heard of them.", "Of course.", "I know them.", "Yeah.", "One of the strongest heroes ever.", "The savior of millions.", "The best of their time.", "One of the best in history.", "The protector of our world.", "Who?", "Is that a real super hero?", "I have never heard of them.", "Who is that?", "I am not sure who that is."],
      sure : ["sure", "confident", "assured", "positive", "doubtless", "unsure", "convinced", "definite", "firm", "unconfident", "undecided", "skeptical", "uncertain", "doubtful", "indeterminant"],
      comparison : ["stronger than", "more popular than", "greater than", "more powerful than", "weaker than", "more flawed than", "more lacking than", "lamer"]
      
    },
  },
};

