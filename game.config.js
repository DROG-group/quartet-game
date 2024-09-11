export const GAME_TITLE = "Fact vs Fiction"

export const CARD_CATEGORY_LIST = [
    "Disinformation",
    "Conspiracy",
    "Hoax",
    "Misinformation",
    "Propaganda"
];

export const CARD_ATTRIBUTE_LIST = [
    "Factuality",
    "Evidence Strength",
    "Debunk Complexity",
    "Emotional Appeal",
    "Spread Potential",
    "Repetition Frequency",
];

export const CARD_LIST = [
    {
        id: 1,
        title: "Vaccines Cause Autism",
        categoryIndex: 0, // Disinformation
        attributes: [
            { index: 0, score: 3 },  // Factuality
            { index: 1, score: 10 }, // Evidence Strength
            { index: 2, score: 5 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 10 }, // Spread Potential
            { index: 5, score: 3 },  // Repetition Frequency
        ],
        example: "Debunked by multiple scientific studies, but still widely believed by some anti-vaccine groups."
    },
    {
        id: 2,
        title: "Earth is Flat",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 2 },  // Factuality
            { index: 1, score: 8 },  // Evidence Strength
            { index: 2, score: 2 },  // Debunk Complexity
            { index: 3, score: 3 },  // Emotional Appeal
            { index: 4, score: 6 },  // Spread Potential
            { index: 5, score: 3 },  // Repetition Frequency
        ],
        example: "Despite overwhelming scientific evidence, the flat Earth theory has persisted for centuries."
    },
    {
        id: 3,
        title: "5G Causes COVID-19",
        categoryIndex: 0, // Disinformation
        attributes: [
            { index: 0, score: 2 },  // Factuality
            { index: 1, score: 9 },  // Evidence Strength
            { index: 2, score: 6 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 7 },  // Spread Potential
            { index: 5, score: 5 },  // Repetition Frequency
        ],
        example: "False claims that 5G technology is responsible for COVID-19 spread went viral during the pandemic."
    },
    {
        id: 4,
        title: "Climate Change is a Hoax",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 4 },  // Factuality
            { index: 1, score: 9 },  // Evidence Strength
            { index: 2, score: 7 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 8 },  // Spread Potential
            { index: 5, score: 6 },  // Repetition Frequency
        ],
        example: "Although there is overwhelming scientific consensus, climate change denial persists due to disinformation."
    },
    {
        id: 5,
        title: "Moon Landing Was Faked",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 3 },  // Factuality
            { index: 1, score: 8 },  // Evidence Strength
            { index: 2, score: 6 },  // Debunk Complexity
            { index: 3, score: 7 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 5 },  // Repetition Frequency
        ],
        example: "A persistent conspiracy theory suggests that the U.S. faked the moon landing in 1969 to win the space race."
    },
    {
        id: 6,
        title: "Bill Gates is Microchipping People via Vaccines",
        categoryIndex: 0, // Disinformation
        attributes: [
            { index: 0, score: 3 },  // Factuality
            { index: 1, score: 9 },  // Evidence Strength
            { index: 2, score: 5 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 4 },  // Repetition Frequency
        ],
        example: "A conspiracy theory claimed that COVID-19 vaccines contain microchips controlled by Bill Gates."
    },
    {
        id: 7,
        title: "COVID-19 is a Biological Weapon",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 4 },  // Factuality
            { index: 1, score: 8 },  // Evidence Strength
            { index: 2, score: 7 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 6 },  // Repetition Frequency
        ],
        example: "Some conspiracy theorists falsely claim that COVID-19 was deliberately created as a biological weapon."
    },
    {
        id: 8,
        title: "Chemtrails are Poisoning People",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 3 },  // Factuality
            { index: 1, score: 7 },  // Evidence Strength
            { index: 2, score: 4 },  // Debunk Complexity
            { index: 3, score: 7 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 5 },  // Repetition Frequency
        ],
        example: "A conspiracy theory claims that airplane contrails are filled with chemicals deliberately spread to harm the public."
    },
    {
        id: 9,
        title: "COVID-19 Doesn't Exist",
        categoryIndex: 0, // Disinformation
        attributes: [
            { index: 0, score: 2 },  // Factuality
            { index: 1, score: 10 }, // Evidence Strength
            { index: 2, score: 5 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 4 },  // Repetition Frequency
        ],
        example: "Despite millions of confirmed cases and deaths, some conspiracy theorists claim that COVID-19 is a fabrication."
    },
    {
        id: 10,
        title: "Holocaust Denial",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 3 },  // Factuality
            { index: 1, score: 9 },  // Evidence Strength
            { index: 2, score: 8 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 7 },  // Spread Potential
            { index: 5, score: 6 },  // Repetition Frequency
        ],
        example: "Holocaust denial is a form of historical revisionism that falsely claims the Holocaust didn't occur or was exaggerated."
    },
    {
        id: 11,
        title: "Sandy Hook Shooting Was a Hoax",
        categoryIndex: 0, // Disinformation
        attributes: [
            { index: 0, score: 4 },  // Factuality
            { index: 1, score: 9 },  // Evidence Strength
            { index: 2, score: 7 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 8 },  // Spread Potential
            { index: 5, score: 5 },  // Repetition Frequency
        ],
        example: "Conspiracy theorists falsely claimed that the Sandy Hook school shooting was staged as a government hoax."
    },
    {
        id: 12,
        title: "Bigfoot Exists",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 5 },  // Factuality
            { index: 1, score: 6 },  // Evidence Strength
            { index: 2, score: 4 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 7 },  // Spread Potential
            { index: 5, score: 4 },  // Repetition Frequency
        ],
        example: "Claims of sightings of Bigfoot have persisted for decades, with no conclusive scientific evidence ever being found."
    },
    {
        id: 13,
        title: "The Illuminati Controls the World",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 3 },  // Factuality
            { index: 1, score: 7 },  // Evidence Strength
            { index: 2, score: 5 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 4 },  // Repetition Frequency
        ],
        example: "A popular conspiracy theory suggests that a secret society, the Illuminati, controls world events from behind the scenes."
    },
    {
        id: 14,
        title: "Reptilian Aliens Rule the Earth",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 2 },  // Factuality
            { index: 1, score: 6 },  // Evidence Strength
            { index: 2, score: 5 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 8 },  // Spread Potential
            { index: 5, score: 3 },  // Repetition Frequency
        ],
        example: "A bizarre conspiracy theory claims that reptilian aliens have infiltrated the highest ranks of society to control humans."
    },
    {
        id: 15,
        title: "JFK Assassination was a Government Conspiracy",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 5 },  // Factuality
            { index: 1, score: 8 },  // Evidence Strength
            { index: 2, score: 7 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 8 },  // Spread Potential
            { index: 5, score: 4 },  // Repetition Frequency
        ],
        example: "Many conspiracy theorists believe that President John F. Kennedy's assassination in 1963 was orchestrated by the government."
    },
    {
        id: 16,
        title: "The Loch Ness Monster is Real",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 5 },  // Factuality
            { index: 1, score: 6 },  // Evidence Strength
            { index: 2, score: 4 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 7 },  // Spread Potential
            { index: 5, score: 5 },  // Repetition Frequency
        ],
        example: "Sightings of a large aquatic creature in Scotland's Loch Ness have fueled belief in the Loch Ness Monster for decades."
    },
    {
        id: 17,
        title: "9/11 was an Inside Job",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 2 },  // Factuality
            { index: 1, score: 9 },  // Evidence Strength
            { index: 2, score: 8 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 6 },  // Repetition Frequency
        ],
        example: "A conspiracy theory claims that the 9/11 attacks were orchestrated by the U.S. government as a pretext for war."
    },
    {
        id: 18,
        title: "The Bermuda Triangle is a Portal to Another Dimension",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 4 },  // Factuality
            { index: 1, score: 7 },  // Evidence Strength
            { index: 2, score: 6 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 7 },  // Spread Potential
            { index: 5, score: 5 },  // Repetition Frequency
        ],
        example: "Many mysterious disappearances in the Bermuda Triangle have sparked claims that it is a portal to another dimension."
    },
    {
        id: 19,
        title: "The COVID-19 Pandemic was Planned",
        categoryIndex: 0, // Disinformation
        attributes: [
            { index: 0, score: 3 },  // Factuality
            { index: 1, score: 9 },  // Evidence Strength
            { index: 2, score: 7 },  // Debunk Complexity
            { index: 3, score: 9 },  // Emotional Appeal
            { index: 4, score: 9 },  // Spread Potential
            { index: 5, score: 6 },  // Repetition Frequency
        ],
        example: "A popular conspiracy theory claims that the COVID-19 pandemic was planned by powerful elites for personal gain."
    },
    {
        id: 20,
        title: "Aliens Built the Pyramids",
        categoryIndex: 1, // Conspiracy
        attributes: [
            { index: 0, score: 4 },  // Factuality
            { index: 1, score: 7 },  // Evidence Strength
            { index: 2, score: 5 },  // Debunk Complexity
            { index: 3, score: 8 },  // Emotional Appeal
            { index: 4, score: 8 },  // Spread Potential
            { index: 5, score: 4 },  // Repetition Frequency
        ],
        example: "Some conspiracy theorists believe that ancient aliens were responsible for building the Egyptian pyramids."
    }
];