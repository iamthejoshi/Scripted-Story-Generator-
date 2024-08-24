const themes = {
    adventure: {
        intro: ["In a land of untamed wilderness,", "Once upon a time, in a wild region,"],
        middle: ["a brave explorer sets off on a quest.", "an intrepid adventurer seeks hidden treasures."],
        outro: ["Their journey is filled with dangers, but they emerge victorious.", "They face challenges and obstacles, but they prevail."]
    },
    mystery: {
        intro: ["On a foggy night in a quiet town,", "In a dimly lit room with a locked door,"],
        middle: ["a mysterious event unfolds, drawing the attention of a detective.", "an enigmatic clue is discovered, leading to a suspenseful investigation."],
        outro: ["In the end, the mystery is solved and all is revealed.", "The truth comes to light, and justice is served."]
    },
    fantasy: {
        intro: ["In a world where magic reigns supreme,", "In a realm of mythical creatures and ancient spells,"],
        middle: ["a powerful wizard embarks on a magical journey.", "a courageous knight faces a dragon in a fabled land."],
        outro: ["The adventure culminates in a grand battle between good and evil.", "The hero's quest concludes with a magical transformation and new beginnings."]
    }
};

const settings = {
    forest: "a lush, green forest filled with ancient trees and hidden paths",
    castle: "a grand castle with towering spires and secret chambers",
    space: "a vast expanse of outer space with distant planets and sparkling stars"
};

const characters = {
    hero: "a valiant hero with unmatched courage",
    villain: "a cunning villain with a dark plan",
    sidekick: "a loyal sidekick with clever tricks"
};

function generateStory() {
    const theme = document.getElementById('theme').value;
    const setting = settings[document.getElementById('setting').value];
    const character = characters[document.getElementById('character').value];

    const intro = themes[theme].intro[Math.floor(Math.random() * themes[theme].intro.length)];
    const middle = themes[theme].middle[Math.floor(Math.random() * themes[theme].middle.length)];
    const outro = themes[theme].outro[Math.floor(Math.random() * themes[theme].outro.length)];

    const story = `${intro} in ${setting}, ${middle} ${character}. ${outro}`;

    document.getElementById('storyOutput').innerText = story;
}
