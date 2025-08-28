async function getRandomLine() {
    const lines = ["the person who hides the clock during a test; another who stares like it’s more important than the test itself",
        "a couch loved enough to cover it with plastic",
        "making tiktoks at work; dancing about taxes",
        "flirting at choir practice",
        "i imagine dolly parton flattered losing a dolly parton lookalike contest",
        "love might be knowing how someone catches themselves when they trip over a lego on the floor",
        "a comic book superhero that solves our problems isn't enough. she needs a tragic backstory so that she understands them too.",
        "if a caterpillar knew what would happen on the other side, he might not do it. flying is scary.",
        "etymology of person: persone/persona, actor’s mask; pretending",
        "the syntax of a sentence is the structure of your consciousness",
        "building a chair into the cliff of death",
        "etymology of amateur: amare/amator, “lover”",
        "searching for shadows with flashlights",
        "an ode to lost socks using only left speakers",
        "when you die, you can't see sunsets",
        "rings burned into the stove from meals cooked with love not precision",
        "all that blood was never once beautiful. it was just red.",
        "practice losing farther, losing faster: places, and names, and where it was you meant to travel",
        "walk home with a bag of skittles",
        "your fortune told in a language you can't understand",
        "that ghost haunting you is just a kid in a sheet",
        "look up & be small",
        "bodies, and the glory and inconvenience of bodies",
        "do not save your good things. being alive is as special an occasion as it gets.",
        "i am still looking for the music"];

    const randomIndex = Math.floor(Math.random() * lines.length);
    document.getElementById('randomLine').textContent = lines[randomIndex];
}

document.addEventListener('DOMContentLoaded', getRandomLine);
