(function() {
    angular
        .module("doctorFacts")
        .factory("DataService", DataService);

    function DataService() {
        var dataObj = {
            doctorWhoData: doctorWhoData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };
        return dataObj;
    }

    var doctorWhoData = [
        {
            type: "First Doctor",
            image_url1: "http://i.imgur.com/UjDBb1p.jpg",
            image_url2: "http://i.imgur.com/P4RV2N8.gif",
            from: "1963",
            to: "2013",
            first_serial: "An Unearthly Child",
            last_serial: "The Day of The Doctor",
            actor: "William Hartnell",
            appearances: "29 stories (134 episodes)",
            sonic: "no",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1963-tardis/",
            costume: "Edwardian grandfather",
            description: "Originally a very difficult and curmudgeonly person, the First Doctor matured from an apparent selfishness and became more inviting. His happier, kinder characteristics fostered when he began to acquire an entourage of companions to accompany him throughout the wonders of the fourth dimension and learned to be a caregiver with a sense of justice in a universe afflicted by evils.",
            first_words: "What are you doing here?",
            last_words: "Ah yes, thank you. Keep warm."
        },
        {
            type: "Second Doctor",
            image_url1: "http://i.imgur.com/vtPq9e3.jpg",
            image_url2: "http://i.imgur.com/zhvIvMe.gif",
            from: "1966",
            to: "2013",
            first_serial: "The Tenth Planet",
            last_serial: "The Day of The Doctor",
            actor: "Patrick Troughton",
            appearances: "21 stories (119 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1966-tardis/",
            costume: "Cosmic Hobo",
            description: "Though outwardly warm, bumbling, and somewhat clownish, the Second Doctor had a darker, more cunning aspect to his personality — one which he usually kept hidden in order to carry out his plans.",
            first_words: "Slower... SLOWER!!! Concentrate on one thing... ONE THING!!!...",
            last_words: "No! Stop, you're making me giddy! No, you can't do this to me! No, no, no, no, no, no, no, no, no, no, no, no, no!"
        },
        {
            type: "Third Doctor",
            image_url1: "http://i.imgur.com/Xcl64bW.jpg",
            image_url2: "http://i.imgur.com/L6gWZBN.gif",
            from: "1966",
            to: "2013",
            first_serial: "Spearhead from Space",
            last_serial: "The Day of The Doctor",
            actor: "Jon Pertwee",
            appearances: "24 stories (128 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1966-tardis/",
            costume: "Dandy James Bond",
            description: "Authoritative and rebellious at the same time, he was quick to demand action just as much as he felt compelled to take action himself. At times, he could become argumentative and needed to be defused in order to establish fluid communication with his associates, but when cheerful, could be quite humble and sociable, with a few humorous anecdotes thrown in for good measure.",
            first_words: "Shoes... I must find my shoes...",
            last_words: "A tear, Sarah Jane?.. No, don't cry... While there's life, there's..."
        },
        {
            type: "Fourth Doctor",
            image_url1: "http://i.imgur.com/mIVpQji.jpg",
            image_url2: "http://i.imgur.com/9NxGtzm.gif",
            from: "1974",
            to: "2013",
            first_serial: "Planet of the Spiders",
            last_serial: "The Day of The Doctor",
            actor: "Tom Baker",
            appearances: "41 stories (172 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1976-tardis/",
            costume: "Bohemian vagabond",
            description: "Long scarf, floppy hat, jelly babies, excitable.",
            first_words: "Human history.",
            last_words: "It's the end, but the moment has been prepared for..."
        },
        {
            type: "Fifth Doctor",
            image_url1: "http://i.imgur.com/CADo6kq.jpg",
            image_url2: "http://i.imgur.com/fxWbcTe.gif",
            from: "1981",
            to: "2013",
            first_serial: "Logopolis",
            last_serial: "The Day of The Doctor",
            actor: "Peter Davison",
            appearances: "20 stories (69 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1980-tardis/",
            costume: "Cricket whites and celery.",
            description: "An interest in things associated with Victorian and Edwardian England: cricket, tea, fair play, good manners, and a keen interest in science and exploration.",
            first_words: "Ah. You've come to help me find the Zero Room. Welcome aboard.  I'm the Doctor. Or will be if this regeneration works out.",
            last_words: "Adric?"
        },
        {
            type: "Sixth Doctor",
            image_url1: "http://i.imgur.com/fzO6wLv.jpg",
            image_url2: "http://i.imgur.com/zboUWX3.gif",
            from: "1984",
            to: "2013",
            first_serial: "The Caves of Androzani",
            last_serial: "The Day of The Doctor",
            actor: "Colin Baker",
            appearances: "8 stories (31 episodes)",
            sonic: "no",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1980-tardis/",
            costume: "Multi coloured costume. Cat pin.",
            description: "Arrogant, careless, dramatic, self-absorbed, driven and stubborn. Loud clothes.",
            first_words: "You were expecting someone else?",
            last_words: "Carrot juice, carrot juice, carrot juice!"
        },
        {
            type: "Seventh Doctor",
            image_url1: "http://i.imgur.com/zBG6gPy.jpg",
            image_url2: "http://i.imgur.com/VW8d10j.gif",
            from: "1984",
            to: "2013",
            first_serial: "Time and the Rani",
            last_serial: "The Day of The Doctor",
            actor: "Sylvester McCoy",
            appearances: "12 stories (42 episodes)",
            sonic: "no",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1980-tardis/",
            costume: "Multi coloured costume. Cat pin.",
            description: "Arrogant, careless, dramatic, self-absorbed, driven and stubborn. Loud clothes.",
            first_words: "Oh no. Mel.",
            last_words: "Timing malfunction! The Master, he's out there! He's out there... I've got to stop... him..."
        },
        {
            type: "Eight Doctor",
            image_url1: "http://i.imgur.com/Ne6xA9Z.jpg",
            image_url2: "http://i.imgur.com/ODNxQCT.gif",
            from: "1996",
            to: "2013",
            first_serial: "Doctor Who (film)",
            last_serial: "The Day of The Doctor",
            actor: "Paul McGann",
            appearances: "2 stories (2 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/1996-tardis/",
            costume: "Victorian dandy.",
            description: "A happy adventurer, having many points in common with the Tenth Doctor.",
            first_words: "Who am I?  Who am I?  WHO. AM. I!?",
            last_words: "Good. Charley, C'rizz, Lucie, Tamsin, Molly, friends, companions I've known, I salute you. And Cass, I apologise.  Physician, heal thyself."
        },
        {
            type: "War Doctor",
            image_url1: "http://i.imgur.com/qgpC5Ib.jpg",
            image_url2: "http://i.imgur.com/cOEODS6.gif",
            from: "2013",
            to: "2013",
            first_serial: "The Name of the Doctor",
            last_serial: "The Day of The Doctor",
            actor: "John Hurt",
            appearances: "3 stories (3 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/2005-tardis/",
            costume: "Edwardian grandfather",
            description: "The War Doctor appears old and bedraggled, wearing the Ninth Doctor's distressed leather overcoat over the Eighth Doctor's Victorian-style waistcoat.",
            first_words: "Doctor no more.",
            last_words: "Oh yes. Of course. Suppose it makes sense. Wearing a bit thin. I hope the ears are a bit less conspicuous this time."
        },
        {
            type: "Ninth Doctor",
            image_url1: "http://i.imgur.com/4qP8qhL.jpg",
            image_url2: "http://i.imgur.com/dNUxKxf.gif",
            from: "2005",
            to: "2005",
            first_serial: "Rose",
            last_serial: "The Day of The Doctor",
            actor: "Christopher Eccleston",
            appearances: "10 stories (13 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/2005-tardis/",
            costume: "Leather jacket, ears.",
            description: "He considered himself to have been \"born in battle\" and was left to think he had brought forth the death of billions of innocent Time Lords. He thus commenced the new life devastated from the apparent genocide, full of anger.",
            first_words: "Run.",
            last_words: "Rose, before I go, I just want to tell you, you were fantastic.  Absolutely fantastic. And do you know what? So was I."
        },
        {
            type: "Tenth Doctor",
            image_url1: "http://i.imgur.com/b56LdRB.jpg",
            image_url2: "http://i.imgur.com/5s79tf5.gif",
            from: "2005",
            to: "2010",
            first_serial: "The Parting of the Ways",
            last_serial: "The Day of The Doctor",
            actor: "David Tennant",
            appearances: "36 stories (47 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/2005-tardis/",
            costume: "Geek chic.",
            description: "He projected a convivial and even frivolous front. However, when he had to engage in conflict, the Tenth Doctor's energies would shift toward heroism to reveal a fiercely protective man who resolutely guarded what he held dear, and who could be viciously unforgiving to the forces that dared menace them.",
            first_words: "Hello. Okay. Ooo, new teeth. That's weird. So, where was I?  Oh, that's right. Barcelona.",
            last_words: "I don't want to go."
        },
        {
            type: "Eleventh Doctor",
            image_url1: "http://i.imgur.com/yCfF1h1.jpg",
            image_url2: "http://i.imgur.com/tE1MoYh.gif",
            first_serial: "The End of Time",
            last_serial: "The Day of The Doctor",
            actor: "Matt Smith",
            appearances: "39 stories (44 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/2010-tardis/",
            costume: "Nerdy professor.",
            description: "A capricious and adventurous incarnation; \"the man who forgets\". He later became a man fond of remembering his precious life and became a secretive and guileful individual for the sake of himself and those he held close.",
            first_words: "Legs. I've still got legs. Good. Arms. Hands. Ooo, fingers. Lots of fingers. Ears, yes. Eyes, two. Nose, I've had worse. Chin, blimey.  Hair. I'm a girl! No. No. I'm not a girl. And still not ginger. And something else. Something important. I'm, I'm, I'm…  Ha! Crashing! Ha, ha! Whoo hoo hoo! Ah! Geronimo!",
            last_words: "I will not forget one line of this. Not one day. I swear. I will always remember when the Doctor was me."
        },
        {
            type: "Twelfth Doctor",
            image_url1: "http://i.imgur.com/qDg1dGs.jpg",
            image_url2: "http://i.imgur.com/GbU4pT6.gif",
            from: "2013",
            to: "",
            first_serial: "The Day of the Doctor",
            last_serial: "",
            actor: "Peter Capaldi",
            appearances: "22 stories (26 episodes)",
            sonic: "yes",
            tardis_interior: "http://www.thedoctorwhosite.co.uk/tardis/interior/",
            tardis_exterior: "http://www.thedoctorwhosite.co.uk/tardis/exterior/2010-tardis/",
            costume: "",
            description: "A cynical man armed with a dry, acerbic wit, a brutal honesty and enough internalised anger to overpower Empath, the Twelfth Doctor The Twelfth Doctor is, according to Capaldi, more alien than he's been in a while. Whilst still defining himself as someone who saves people the Twelfth Doctor cares little about being seen as a hero or even being liked by the people who he is trying to save.[37] Unlike his previous two incarnations who cared about humans and tried to understand them, Capaldi has confirmed that, this incarnation doesn't quite understand human beings or really care very much about their approval.",
            first_words: "Kidneys! I've got new kidneys!",
            last_words: "N/A"
        }
    ];

    var quizQuestions = [
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the typical lifespan of a Green Sea Turtle?",
            possibilities: [
                {
                    answer: "150 years"
                },
                {
                    answer: "10 years"
                },
                {
                    answer: "80 years"
                },
                {
                    answer: "40 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Alligator Snapping Turtle?",
            possibilities: [
                {
                    answer: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
                },
                {
                    answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                },
                {
                    answer: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Green Turtle?",
            possibilities: [
                {
                    answer: "https://ae01.alicdn.com/kf/HTB1JtaeNXXXXXaSXVXXq6xXFXXXY/-font-b-Sea-b-font-font-b-Turtle-b-font-Seabed-Looking-Marine-Animal-Poster.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
                },
                {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does the Kemp's Ridley Sea Turtle live?'",
            possibilities: [
                {
                    answer: "Tropical waters all around the world"
                },
                {
                    answer: "Eastern Australia"
                },
                {
                    answer: "Coastal North Atlantic"
                },
                {
                    answer: "South pacific islands"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the most common turtle in US waters?",
            possibilities: [
                {
                    answer: "Loggerhead turtle"
                },
                {
                    answer: "Leatherback turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Alligator Snapping Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the largest sea turtle on earth?",
            possibilities: [
                {
                    answer: "Eastern Snake Necked Turtle"
                },
                {
                    answer: "Olive Ridley Sea Turtle"
                },
                {
                    answer: "Kemp's Ridley Sea Turtle'"
                },
                {
                    answer: "Leatherback"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the Olive Ridley Turtle?",
            possibilities: [
                {
                    answer: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg"
                },
                {
                    answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
                },
                {
                    answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How Heavy can a leatherback turtle be?",
            possibilities: [
                {
                    answer: "900kg"
                },
                {
                    answer: "40kg"
                },
                {
                    answer: "110kg"
                },
                {
                    answer: "300kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of these turtles are herbivores?",
            possibilities: [
                {
                    answer: "Loggerhead Turtle"
                },
                {
                    answer: "Hawksbill Turtle"
                },
                {
                    answer: "Leatherback Turtle"
                },
                {
                    answer: "Green Turtle"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How much can a loggerhead weigh?",
            possibilities: [
                {
                    answer: "Up to 20kg"
                },
                {
                    answer: "Up to 115kg"
                },
                {
                    answer: "Up to 220kg"
                },
                {
                    answer: "Up to 500kg"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
})();