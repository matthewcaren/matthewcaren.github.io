async function getRandomLine() {
    const lines = ["the kind of person who hides the clock during a test; the kind of person who stares like it’s more important than the test itself",
        "a couch loved enough to cover it with plastic",
        "making tiktoks at work; dancing about taxes",
        "flirting at choir practice",
        "i imagine dolly parton flattered to lose a dolly parton lookalike contest",
        "love is knowing how someone catches themselves when they trip over a LEGO on the floor",
        "a comic book hero that solves our problems isn't enough. we must give her a tragic backstory so that she understands them too.",
        "if a caterpillar knew what would happen on the other side of the chrysalis, he might not do it. flying is scary.",
        "etymology of person: persone/persona, actor’s mask, pretending",
        "the syntax of a sentence is the structure of your consciousness",
        "practice forgetting your memories, so that you might remember someone else’s",
        "building a chair into the cliff of death",
        "etymology of amateur: amare/amator, “lover”",
        "searching for shadows with flashlights",
        "an ode to lost socks using only left speakers",
        "when you die, you can't see sunsets",
        "rings burned into the stove from meals cooked with love not precision",
        "all that blood was never once beautiful. it was just red.",
        "practice losing farther, losing faster: places, and names, and where it was you meant to travel"];

    const randomIndex = Math.floor(Math.random() * lines.length);
    document.getElementById('randomLine').textContent = lines[randomIndex];
}

document.addEventListener('DOMContentLoaded', getRandomLine);
