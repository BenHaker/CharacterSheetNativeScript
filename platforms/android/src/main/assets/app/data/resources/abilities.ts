export const Abilities = [
    [
        {
            level: 1,
            title: "Turning Undead",
            text: `When a cleric encounters an undead monster, the cleric may try to turn it. The cleric cannot both attack and turn undead in one round.
            When you want your cleric to try to turn undead, just tell your Dungeon Master. The power to turn undead is inherent in the cleric; he does not need the symbol of his faith or any other device to do it, unless the DM declares otherwise.
            Undead monsters are not automatically turned by the cleric. When the encounter occurs, the player must refer to the cleric's Turning Undead table to find the effect the cleric has.
            When the cleric tries to turn an undead monster, find the cleric's level of experience across the top of the table. Read down the left column until you find the name of the undead monster. If you see a "—" in the column, then you cannot turn the monster. If you see anything else, you have a chance to turn the monster, or perhaps several monsters.
            Apply the results immediately. If the attempt succeeds, one or more of the undead monsters will retreat or be destroyed. But don't forget, if the monster is turned, it hasn't been destroyed; it may decide to return soon....
            If you try to turn a specific undead monster (for instance, one specific vampire) and fail, you cannot try again to turn it in the same fight. At some later encounter, you can try to turn that individual again.
            Explanation of Results
            7, 9, or 11: Whenever a number is listed, the cleric has a chance to turn the undead monsters. The player rolls 2d6. If the total is equal to or greater than the number given, the attempt at turning undead is successful.
            When the attempt at turning undead is successful, the Dungeon Master (not the player) will roll 2d6 to determine the number of Hit Dice of undead monsters that turn away. At least one monster will be turned, regardless of what the DM rolls on his dice.
            T: The attempt at turning the undead automatically succeeds; the cleric's player does not need to roll for success.
            D: The attempt at turning the undead automatically succeeds—in fact, it succeeds so well that the affected monsters are destroyed instead of merely turned.
            D+: This is the same as the "D" result above, except that the DM rolls 3d6 to find out how many Hit Dice of undead will be destroyed.
            D#: This is the same as the "D" result above, except that the DM rolls 4d6 to find out how many Hit Dice of undead will be destroyed.`,
            table: [
                ["Skeleton",    "Zombie",   "Ghoul",    "Wight",    "Wraith",   "Mummy",    "Spectre",  "Vampire",  "Phantom",  "Haunt",    "Spirit",   "Nightshade",   "Lich", "Special"],
                ["7",           "9",        "11",       "-",        "-",        "-",        "-",        "-",        "-",        "-",        "-",        "-",            "-",    "-",],//1
                ["T",           "7",        "9",        "11",       "-",        "-",        "-",        "-",        "-",        "-",        "-",        "-",            "-",    "-",],//2
                ["T",           "T",        "7",        "9",        "11",       "-",        "-",        "-",        "-",        "-",        "-",        "-",            "-",    "-",],//3
                ["D",           "T",        "T",        "7",        "9",        "11",       "-",        "-",        "-",        "-",        "-",        "-",            "-",    "-",],//4
                ["D",           "D",        "T",        "T",        "7",        "9",        "11",       "-",        "-",        "-",        "-",        "-",            "-",    "-",],//5
                ["D",           "D",        "D",        "T",        "T",        "7",        "9",        "11",       "-",        "-",        "-",        "-",            "-",    "-",],//6
                ["D",           "D",        "D",        "D",        "T",        "T",        "7",        "9",        "11",       "-",        "-",        "-",            "-",    "-",],//7
                ["D",           "D",        "D",        "D",        "D",        "T",        "T",        "7",        "9",        "11",       "-",        "-",            "-",    "-",],//8
                ["D",           "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",        "9",        "11",       "-",            "-",    "-",],//9
                ["D",           "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",        "9",        "11",       "-",            "-",    "-",],//10
                ["D+",          "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",        "9",        "11",           "-",    "-",],//11
                ["D+",          "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",        "9",        "11",           "-",    "-",],//12
                ["D+",          "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",        "9",            "11",   "-",],//13
                ["D+",          "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",        "9",            "11",   "-",],//14
                ["D+",          "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",            "9",    "11",],//15
                ["D+",          "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",        "7",            "9",    "11",],//16
                ["D+",          "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",            "7",    "9",],//17
                ["D+",          "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",            "7",    "9",],//18
                ["D+",          "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",            "7",    "9",],//19
                ["D+",          "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",        "T",            "7",    "9",],//20
                ["D+",          "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",            "T",    "7",],//21
                ["D+",          "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",            "T",    "7",],//22
                ["D+",          "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",            "T",    "7",],//23
                ["D+",          "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",        "T",            "T",    "7",],//24
                ["D#",          "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",            "T",    "T",],//25
                ["D#",          "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",            "T",    "T",],//26
                ["D#",          "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",            "T",    "T",],//27
                ["D#",          "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",        "D",            "T",    "T",],//28
                ["D#",          "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",            "T",    "T",],//29
                ["D#",          "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",            "T",    "T",],//30
                ["D#",          "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",            "T",    "T",],//31
                ["D#",          "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",        "D",            "T",    "T",],//32
                ["D#",          "D#",       "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",            "T",    "T",],//33
                ["D#",          "D#",       "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",            "T",    "T",],//34
                ["D#",          "D#",       "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",            "T",    "T",],//35
                ["D#",          "D#",       "D#",       "D+",       "D+",       "D+",       "D+",       "D+",       "D",        "D",        "D",        "D",            "T",    "T",],//36
            ]
        }
    ],
    [
        {
            level: 1,
            title: "Special Attacks",
            text: `Fighters always know the following fighter maneuvers: Set Spear vs. Attack and Lance Attack.`,
            table: [[]]
        },
        {
            level: 9,
            title: "Smash",
            text: `This is a Fighter Combat Option maneuver, first available at 9th level to human fighters.
            With this hand-to-hand maneuver, the character automatically loses initiative and takes a — 5 penalty to the attack roll (he still gets his Strength and magic adjustments to his attack roll).
            If attack hits, the character adds his Strength bonus, magic bonuses, and his entire Strength score to his weapon's normal damage.`,
            table: [[]]
        },
        {
            level: 9,
            title: "Parry",
            text: `This is a Fighter Combat Option maneuver, first available at 9th level to human fighters.
            With this maneuver, the fighter does not make any attack roll. Instead, he blocks incoming attacks for the entire combat round; all enemies attacking him suffer a —4 penalty to hit him with melee and thrown (but not missile) weapons.`,
            table: [[]]
        },
        {
            level: 9,
            title: "Disarm",
            text: `This is a Fighter Combat Option maneuver, first available at 9th level to human fighters.
            This maneuver can only be used when the fighter attacks a weapon-using opponent. The fighter gets his normal Strength and magic adjustments to his attack roll. If he hits, he inflicts no damage. Instead, the victim rolls 1d20, minus his Dexterity bonuses, plus his attacker's Dexterity bonuses. If the final roll is greater than the victim's Dexterity score, the victim drops his weapon.`,
            table: [[]]
        },
        {
            level: 12,
            title: "Multiple Attacks",
            text: `This is a Fighter Combat Option maneuver, first available at 12th level to human fighters.
            In melee combat, if the fighter can hit his opponent with an attack roll of 2 (modified by all bonuses), he can make two attacks per round against that target (three per round at level 24, four per round at level 36).
            Each attack of a multiple attacks maneuver can be a throw, attack, lance attack, or disarm. A character can mix and match his maneuvers; for instance, a character with three attacks per round could perform an attack, disarm, attack combination against his foe, or throw three knives instead of one. This maneuver applies to ideal circumstances, and the character can use movement or some other action instead of another attack.`,
            table: [[]]
        },
    ],
    [],
    [
        {
            level: 1,
            title: "Backstabbing",
            text: `If a thief can sneak up on a victim, completely unnoticed, the thief may backstab—if he is using a one-handed melee weapon, he may strike at particularly vulnerable points of his target's body.
            When backstabbing, the thief gains a bonus of +4 on the attack roll; if the target is hit, the damage done is twice normal.
            If the intended victim sees, hears, or is warned of the thief s approach, the thief s attack is not a backstab; it is an ordinary attack, doing the damage appropriate for the weapon used.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Thief Special Abilities",
            text: `Information is given in percentages.`,
            table: [
                ["Open Locks",  "Find Traps",   "Remove Traps", "Climb Walls",  "Move Silently",    "Hide in Shadows",  "Pick Pockets", "Hear Noise"],
                ["15",          "10",           "10",           "87",           "20",               "10",               "20",           "30"],//1
                ["20",          "15",           "15",           "88",           "25",               "15",               "25",           "35"],//2
                ["25",          "20",           "20",           "89",           "30",               "20",               "30",           "40"],//3
                ["30",          "25",           "25",           "90",           "35",               "24",               "35",           "45"],//4
                ["35",          "30",           "30",           "91",           "40",               "28",               "40",           "50"],//5
                ["40",          "35",           "34",           "92",           "44",               "32",               "45",           "54"],//6
                ["45",          "40",           "38",           "93",           "48",               "35",               "50",           "58"],//7
                ["50",          "45",           "42",           "94",           "52",               "38",               "55",           "62"],//8
                ["54",          "50",           "46",           "95",           "55",               "41",               "60",           "66"],//9
                ["58",          "54",           "50",           "96",           "58",               "44",               "65",           "70"],//10
                ["62",          "58",           "54",           "97",           "61",               "47",               "70",           "74"],//11
                ["66",          "62",           "58",           "98",           "64",               "50",               "75",           "78"],//12
                ["69",          "66",           "61",           "99",           "66",               "53",               "80",           "81"],//13
                ["72",          "70",           "64",           "100",          "68",               "56",               "85",           "84"],//14
                ["75",          "73",           "67",           "101",          "70",               "58",               "90",           "87"],//15
                ["78",          "76",           "70",           "102",          "72",               "60",               "95",           "90"],//16
                ["81",          "80",           "73",           "103",          "74",               "62",               "100",          "92"],//17
                ["84",          "83",           "76",           "104",          "76",               "64",               "105",          "94"],//18
                ["86",          "86",           "79",           "105",          "78",               "66",               "110",          "96"],//19
                ["88",          "89",           "82",           "106",          "80",               "68",               "115",          "98"],//20
                ["90",          "92",           "85",           "107",          "82",               "70",               "120",          "100"],//21
                ["92",          "94",           "88",           "108",          "84",               "72",               "125",          "102"],//22
                ["94",          "96",           "91",           "109",          "86",               "74",               "130",          "104"],//23
                ["96",          "98",           "94",           "110",          "88",               "76",               "135",          "106"],//24
                ["98",          "99",           "97",           "111",          "89",               "78",               "140",          "108"],//25
                ["100",         "100",          "100",          "112",          "90",               "80",               "145",          "110"],//26
                ["102",         "101",          "103",          "113",          "91",               "82",               "150",          "112"],//27
                ["104",         "102",          "106",          "114",          "92",               "84",               "155",          "114"],//28
                ["106",         "103",          "109",          "115",          "93",               "86",               "160",          "116"],//29
                ["108",         "104",          "112",          "116",          "94",               "88",               "165",          "118"],//30
                ["110",         "105",          "115",          "117",          "95",               "90",               "170",          "120"],//31
                ["112",         "106",          "118",          "118",          "96",               "92",               "175",          "122"],//32
                ["114",         "107",          "121",          "118",          "97",               "94",               "180",          "124"],//33
                ["116",         "108",          "124",          "119",          "98",               "96",               "185",          "126"],//34
                ["118",         "109",          "127",          "119",          "99",               "98",               "190",          "128"],//35
                ["120",         "110",          "130",          "120",          "100",              "100",              "195",          "130"],//36
            ]
        },
        {
            level: 4,
            title: "Read Languages",
            text: `When the thief reaches 4th level, he gains an 80% chance to read any normal writing or language (including simple codes, dead languages, treasure maps, and so on, but not magical writings). If he tries but fails to read a piece of writing, he must gain at least one experience level before trying to read it again.`,
            table: [[]]
        },
        {
            level: 10,
            title: "Cast Spells From Magic-User Scrolls",
            text: `At 10th level, a thief gains the ability to cast magic-user spells from spell scrolls. However, there is always a 10% chance that the spell will backfire, creating an unexpected result, because of the thiefs imperfect understanding of magical writings. This ability only allows thieves to cast spells from existing magic scrolls, not to write their own.`,
            table: [[]]
        },
    ],
    [
        {
            level: 1,
            title: "Infravision",
            text: `Infravision is the ability to see heat (and the lack of heat). Dwarves have infravision in addition to normal sight and can see 60' in the dark. Infravision does not work in the presence of normal and magical light. With infravision, warm things appear red, and cold things appear blue. A creature could be seen as a red shape, leaving faint reddish footprints. A cold pool of water would seem a deep blue color.
            Characters with infravision can even see items or creatures the same temperature as the surrounding air (such as a table or a skeleton), since air flow will inevitably show the viewer their borders, outlining them in a faint lighter-blue tone. Until they move, they will be very faint to the eye; once they start moving, they become blurry but very obvious light-blue figures.
            Infravision isn't good enough to read by. A character can use his infravision to recognize an individual only if they are within 10' distance, unless the individual is very, very distinctive (for example, 8' tall or walking with a crutch).`,
            table: [[]]
        },
        {
            level: 1,
            title: "Languages",
            text: `In addition to Common and alignment tongues, a dwarf can speak the languages of the dwarf, gnome, goblin, and kobold races.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Detection",
            text: `Dwarves can sometimes detect traps (specifically, traps built into stone-work or heavy construction, not other types of traps such as rope-traps in the forest or spring-out needles built into a jewelry box); they can also detect sliding walls, sloping corridors, and new constructions.
            If your dwarf character wants to search for such things in an area, tell the DM. You have 1 chance in 3 to find them. The DM will roll 1d6, and a 1 or 2 will indicate success if there is anything to find; a result of 3-6 means your dwarf detects nothing. You may check once for each trap, sliding wall, sloping corridor, or new construction. You must tell the DM if you want to look for anything; the detection is never automatic.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Special Attacks",
            text: `Dwarves are good fighters. Like fighters, they know the Lance Attack and Set Spear vs. Charge maneuvers.`,
            table: [[]]
        },
        {
            level: 12,
            title: "Fighter Combat Options",
            text: `When the dwarf's experience points total reaches 660,000, he gains the Fighter Combat Options (Multiple Attacks, Smash, Parry and Disarm).
            With the Multiple Attacks combat option, the dwarf can make two attacks at 660,000 experience points, and three at 2,200,000 experience points.
            He can use the Smash and Parry combat options, but cannot use the Disarm option against a giantsized opponent.`,
            table: [[]]
        },
        {
            level: 12,
            title: "Special Defenses",
            text: `Experienced dwarves become more resistant to magic. 
            When the dwarf reaches the 1,400,000 experience point mark, the dwarf automatically takes only half damage from any damagecausing spell or spell-like effect (such as from a magical item or strange monster powers such as beholders' eyes but not including dragon's breath). If the effect allows a saving throw, a successful roll indicates that he only takes 1/4 damage.`,
            table: [[]]
        },
    ],
    [
        {
            level: 1,
            title: "Infravision",
            text: `Infravision is the ability to see heat (and the lack of heat). Dwarves have infravision in addition to normal sight and can see 60' in the dark. Infravision does not work in the presence of normal and magical light. With infravision, warm things appear red, and cold things appear blue. A creature could be seen as a red shape, leaving faint reddish footprints. A cold pool of water would seem a deep blue color.
            Characters with infravision can even see items or creatures the same temperature as the surrounding air (such as a table or a skeleton), since air flow will inevitably show the viewer their borders, outlining them in a faint lighter-blue tone. Until they move, they will be very faint to the eye; once they start moving, they become blurry but very obvious light-blue figures.
            Infravision isn't good enough to read by. A character can use his infravision to recognize an individual only if they are within 10' distance, unless the individual is very, very distinctive (for example, 8' tall or walking with a crutch).`,
            table: [[]]
        },
         {
            level: 1,
            title: "Languages",
            text: `In addition to Common and alignment tongues, an elf can speak the languages of the elf, gnoll, hobgoblin, and orc races.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Detection",
            text: `All elves can find secret and hidden doors better than other characters.
            You must tell the DM if you want to look for secret and hidden doors; the detection is never automatic.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Immunity to Ghoul Paralysis",
            text: `All elves are naturally immune to the paralyzing attacks of ghouls. Other types of paralysis, such as attacks from a carrion crawler or gelatinous cube, do affect them normally.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Special Attacks",
            text: `Elves always know the following fighter maneuvers: Set Spear vs. Attack and Lance Attack.`,
            table: [[]]
        },
        {
            level: 10,
            title: "Fighter Combat Options",
            text: `When the character's experience point total reaches 850,000, the character receives the Combat Options for fighters (Multiple Attacks, Smash, Parry and Disarm).
            With Multiple Attacks, two attacks are possible at 850,000 experience points, and three attacks at 2,600,000 experience points; the elf never gains four attacks per round.
            The elf may use the Smash, Parry, and Disarm options as described in the text.`,
            table: [[]]
        },
        {
            level: 10,
            title: "Special Defenses",
            text: `Experienced elves become more resistant to dragon breath.
            When the elf reaches the 1,600,000 experience points mark, he automatically takes only half damage from any breath weapon (most notably dragon breath, but including all sorts of breath weapon attacks). If the breath allows a saving throw, a successful roll indicates that the elf takes only 1/4 damage.`,
            table: [[]]
        },
    ],
    [
        {
            level: 1,
            title: "Combat Bonuses",
            text: `All halflings gain the following bonuses when in combat:
            1) -2 bonus to armor class when attacked by creatures larger than man-sized.
            2) +1 bonus to the attack roll when using any missile weapon.
            3) +1 bonus to individual initiative.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Special Attacks",
            text: `In combat, a halfling may use the Set Spear vs. Charge maneuver. They are too small to utilize the Lance Attack maneuver, however.`,
            table: [[]]
        },
        {
            level: 1,
            title: "Woodland Abilities",
            text: `Outdoors, halflings are difficult to spot, having the ability to hide in woods or underbrush. In such cover, they have a 90% chance to remain unseen.
            Halflings can even hide in building interiors such as dungeons, though not with as much success. In such situations, if a halfling finds some deep shadows or cover to hide in, his chance drops to 33 %; if he cannot find shadows or cover, he has no chance at all.
            This ability is not the same as the thiefs Move Silently or Hide in Shadows abilities. To use his ability, the halfling must stay motionless. If he tries to move to another site, anyone can see him.`,
            table: [[]]
        },
        {
            level: 8,
            title: "Fighter Combat Options",
            text: `When the halfling's experience point total reaches 900,000, he gains the Fighter Combat Options (Multiple Attacks, Smash, Parry and Disarm).
            For the Multiple Attacks option, two attacks are possible at 900,000 experience points, and three attacks at 3,000,000 experience points.
            The halfling can use the Smash and Parry options as described, but cannot use the Disarm option effectively against a giantsized opponent.`,
            table: [[]]
        },
        {
            level: 8,
            title: "Special Defenses",
            text: `Experienced halflings become more resistant to both magic and breath weapons.
            When the halfling reaches the 300,000 experience point mark, he automatically takes only half damage from any damage-causing spell or spell-like effect (such as from a magical item). If the effect allows a saving throw, a successful roll indicates that he takes only 1/4 damage.
            In addition, when the halfling reaches the 2,100,000 experience point mark, he likewise automatically takes only half damage from breath weapons (most notably dragon breath, but including all sorts of breath weapon attacks), and takes only 1/4 damage if he successfully makes a saving throw (if the attack allows one).`,
            table: [[]]
        },
    ]
];