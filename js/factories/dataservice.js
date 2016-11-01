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
            last_words: "Ah yes, thank you. Keep warm.",
            wiki_link: "http://tardis.wikia.com/wiki/First_Doctor"
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
            last_words: "No! Stop, you're making me giddy! No, you can't do this to me! No, no, no, no, no, no, no, no, no, no, no, no, no!",
            wiki_link: "http://tardis.wikia.com/wiki/Second_Doctor"
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
            last_words: "A tear, Sarah Jane?.. No, don't cry... While there's life, there's...",
            wiki_link: "http://tardis.wikia.com/wiki/Third_Doctor"
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
            last_words: "It's the end, but the moment has been prepared for...",
            wiki_link: "http://tardis.wikia.com/wiki/Fourth_Doctor"
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
            last_words: "Adric?",
            wiki_link: "http://tardis.wikia.com/wiki/Fifth_Doctor"
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
            last_words: "Carrot juice, carrot juice, carrot juice!",
            wiki_link: "http://tardis.wikia.com/wiki/Sixth_Doctor"
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
            last_words: "Timing malfunction! The Master, he's out there! He's out there... I've got to stop... him...",
            wiki_link: "http://tardis.wikia.com/wiki/Seventh_Doctor"
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
            last_words: "Good. Charley, C'rizz, Lucie, Tamsin, Molly, friends, companions I've known, I salute you. And Cass, I apologise.  Physician, heal thyself.",
            wiki_link: "http://tardis.wikia.com/wiki/Eigth_Doctor"
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
            last_words: "Oh yes. Of course. Suppose it makes sense. Wearing a bit thin. I hope the ears are a bit less conspicuous this time.",
            wiki_link: "http://tardis.wikia.com/wiki/War_Doctor"
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
            last_words: "Rose, before I go, I just want to tell you, you were fantastic.  Absolutely fantastic. And do you know what? So was I.",
            wiki_link: "http://tardis.wikia.com/wiki/Ninth_Doctor"
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
            last_words: "I don't want to go.",
            wiki_link: "http://tardis.wikia.com/wiki/Tenth_Doctor"
        },
        {
            type: "Eleventh Doctor",
            image_url1: "http://i.imgur.com/yCfF1h1.jpg",
            image_url2: "http://i.imgur.com/tE1MoYh.gif",
            to: 2010,
            from: 2013,
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
            last_words: "I will not forget one line of this. Not one day. I swear. I will always remember when the Doctor was me.",
            wiki_link: "http://tardis.wikia.com/wiki/Eleventh_Doctor"
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
            last_words: "N/A",
            wiki_link: "http://tardis.wikia.com/wiki/Twelfth_Doctor"
        }
    ];

    var quizQuestions = [
        {
            type: "text",
            text: "What year did the 6th Doctor first appear on TV?",
            possibilities: [
                {
                    answer: "1984"
                },
                {
                    answer: "1976"
                },
                {
                    answer: "1980"
                },
                {
                    answer: "1971"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor was known for his trademark question marks?",
            possibilities: [
                {
                    answer: "4th"
                },
                {
                    answer: "7th"
                },
                {
                    answer: "6th"
                },
                {
                    answer: "5th"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the name of the first episode the War Doctor appeared in?",
            possibilities: [
                {
                    answer: "The Day of the Doctor"
                },
                {
                    answer: "The Name of the Doctor"
                },
                {
                    answer: "The Parting of Ways"
                },
                {
                    answer: "The War Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which Doctor appeared in the least amount of episodes?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/qgpC5Ib.jpg"
                },
                {
                    answer: "http://i.imgur.com/CADo6kq.jpg"
                },
                {
                    answer: "http://i.imgur.com/Ne6xA9Z.jpg"
                },
                {
                    answer: "http://i.imgur.com/fzO6wLv.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which actor portrayed the 2nd Doctor?'",
            possibilities: [
                {
                    answer: "William Hartnell"
                },
                {
                    answer: "Jon Pertwee"
                },
                {
                    answer: "Patrick Troughton"
                },
                {
                    answer: "Tom Baker"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor is known most for his colorful scarf?",
            possibilities: [
                {
                    answer: "4th Doctor"
                },
                {
                    answer: "5th Doctor"
                },
                {
                    answer: "6th Doctor"
                },
                {
                    answer: "7th Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor's last words were, \"I don't want to go.\"?",
            possibilities: [
                {
                    answer: "War Doctor"
                },
                {
                    answer: "9th Doctor"
                },
                {
                    answer: "10th Doctor"
                },
                {
                    answer: "11th Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of these is the War Doctor?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/8GiLok9.jpg"
                },
                {
                    answer: "http://i.imgur.com/kRyRYoD.jpg"
                },
                {
                    answer: "http://i.imgur.com/6pIVbT0.jpg"
                },
                {
                    answer: "http://i.imgur.com/ccRnLWQ.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor does Matt Smith portray?",
            possibilities: [
                {
                    answer: "9th Doctor"
                },
                {
                    answer: "11th Doctor"
                },
                {
                    answer: "12th Doctor"
                },
                {
                    answer: "10th Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which jacket did the 11th Doctor wear?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/BsINSqo.jpg"
                },
                {
                    answer: "http://i.imgur.com/vZnzmrY.jpg"
                },
                {
                    answer: "http://i.imgur.com/2e1FdZI.png"
                },
                {
                    answer: "http://i.imgur.com/aym5uRt.png"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How many years did David Tenant portray the Doctor?",
            possibilities: [
                {
                    answer: "4 years"
                },
                {
                    answer: "5 years"
                },
                {
                    answer: "6 years"
                },
                {
                    answer: "7 years"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "What kind of hat did the 7th Doctor wear?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/737D1Vy.jpg"
                },
                {
                    answer: "http://i.imgur.com/vnNSrQb.jpg"
                },
                {
                    answer: "http://i.imgur.com/n1XGVos.jpg"
                },
                {
                    answer: "http://i.imgur.com/BnRdW8S.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What was the name of the first episode the First Doctor appeared in?",
            possibilities: [
                {
                    answer: "The Tenth Planet"
                },
                {
                    answer: "An Unearthly Child"
                },
                {
                    answer: "Spearhead from Space"
                },
                {
                    answer: "Planet of the Spiders"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor was portrayed by Sylvester McCoy?",
            possibilities: [
                {
                    answer: "4th Doctor"
                },
                {
                    answer: "5th Doctor"
                },
                {
                    answer: "6th Doctor"
                },
                {
                    answer: "7th Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which Doctor's adventures were the first to be broadcasted in color?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/nT8dqx6.jpg"
                },
                {
                    answer: "http://i.imgur.com/Uy8OyDE.jpg"
                },
                {
                    answer: "http://i.imgur.com/OeUP2L2.jpg"
                },
                {
                    answer: "http://i.imgur.com/72sPQvU.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How many episodes was the 9th Doctor in?",
            possibilities: [
                {
                    answer: "13"
                },
                {
                    answer: "20"
                },
                {
                    answer: "10"
                },
                {
                    answer: "15"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which Doctor appeared in the most amount of episodes?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/yCfF1h1.jpg"
                },
                {
                    answer: "http://i.imgur.com/mIVpQji.jpg"
                },
                {
                    answer: "http://i.imgur.com/zBG6gPy.jpg"
                },
                {
                    answer: "http://i.imgur.com/UjDBb1p.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor is known for having a cat pin?",
            possibilities: [
                {
                    answer: "First Doctor"
                },
                {
                    answer: "Sixth Doctor"
                },
                {
                    answer: "Fourth Doctor"
                },
                {
                    answer: "Fifth Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Where does the Ninth Doctor take his companion on their first Adventure?",
            possibilities: [
                {
                    answer: "Slaving Ship"
                },
                {
                    answer: "End of the Universe"
                },
                {
                    answer: "To see her birth"
                },
                {
                    answer: "End of the World"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the 11th Doctor's favorite food??",
            possibilities: [
                {
                    answer: "Fish Fingers and Custard"
                },
                {
                    answer: "Banana Splits"
                },
                {
                    answer: "Jelly Babies"
                },
                {
                    answer: "Shepard's Pie"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Who was the 9th Doctor's companion?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/CeENk5x.jpg"
                },
                {
                    answer: "http://i.imgur.com/MLSoFao.jpg"
                },
                {
                    answer: "http://i.imgur.com/3vI4dfz.jpg"
                },
                {
                    answer: "http://i.imgur.com/2Pjkcdp.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor was the only one to not own a sonic screwdriver?",
            possibilities: [
                {
                    answer: "Second Doctor"
                },
                {
                    answer: "Third Doctor"
                },
                {
                    answer: "Fourth Doctor"
                },
                {
                    answer: "First Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor's first words were, 'Who am I?  Who am I?  WHO. AM. I!?'",
            possibilities: [
                {
                    answer: "8th Doctor"
                },
                {
                    answer: "9th Doctor"
                },
                {
                    answer: "10th Doctor"
                },
                {
                    answer: "11th Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor carried a stalk of celery in his lapel?",
            possibilities: [
                {
                    answer: "4th Doctor"
                },
                {
                    answer: "5th Doctor"
                },
                {
                    answer: "6th Doctor"
                },
                {
                    answer: "7th Doctor"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which sonic screwdriver belonged to the 3rd Doctor?",
            possibilities: [
                {
                    answer: "http://i.imgur.com/NHmgA4T.jpg"
                },
                {
                    answer: "http://i.imgur.com/NqKEuby.jpg"
                },
                {
                    answer: "http://i.imgur.com/Zq9QDeH.jpg"
                },
                {
                    answer: "http://i.imgur.com/knY9fiD.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Doctor is 12?",
            possibilities: [
                {
                    answer: "12th Doctor?"
                },
                {
                    answer: "12th Doctor?"
                },
                {
                    answer: "11th Doctor"
                },
                {
                    answer: "12th Doctor?"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var correctAnswers = [0, 1, 1, 2, 1, 0, 2, 1, 1, 0, 1, 1, 1, 3, 1, 0, 1, 1, 3, 0, 3, 3, 0, 1, 2, 1];
})();