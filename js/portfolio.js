const PORTFOLIO_ITEMS = [
  { img: "img/melia-iso.png",           alt: "Melia harmonizer",  title: "melia",               description: "a musical instrument that lets you play AI failure",       link: "https://nime.org/proc/nime2025_93/index.html" },
  { img: "img/mp3-iso.png",             alt: "mp3",               title: "doomsday mp3 player", description: "simulating a million years of digital bit rot" },
  { img: "img/vocal-imitation-iso.png", alt: "vocal imitation", title: "vocal imitation", description: "what makes us so good at imitating sounds?", link: "https://news.mit.edu/2025/teaching-ai-communicate-sounds-humans-do-0109" },
  { img: "img/quantumclock-iso.png", alt: "quantum clock", title: "quantum clock", description: "telling time through random quantum events", link: "https://badsciencestudio.com/works/quantumclock" },
  { img: "img/bloodcomputer-iso.png",   alt: "blood computer",    title: "blood computer",      description: "a chatbot that runs on the substance of life",          link: "https://badsciencestudio.com/works/bloodcomputer" },
  { img: "img/drummify-iso.png",        alt: "drummify",          title: "drummify",            description: "a device that transforms any table into an interactive drum" },
];

function buildCard(item) {
  const card = document.createElement("div");
  card.className = "portfolio-card";

  const imgWrap = document.createElement("div");
  imgWrap.className = "portfolio-card-img";
  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.alt;
  imgWrap.appendChild(img);

  const label = document.createElement("div");
  label.className = "portfolio-card-label";
  const titleEl = document.createElement("p");
  titleEl.className = "portfolio-card-title";
  const descEl = document.createElement("p");
  descEl.className = "portfolio-card-desc";

  if (item.link) {
    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.textContent = item.title + " ↗";
    titleEl.appendChild(a);
  } else {
    titleEl.textContent = item.title;
  }
  descEl.textContent = item.description;
  label.appendChild(titleEl);
  if (item.description) label.appendChild(descEl);

  card.appendChild(imgWrap);
  card.appendChild(label);
  return card;
}

// Pre-build all cards once so images don't reload on each navigation
const allCards = PORTFOLIO_ITEMS.map(buildCard);

const grid = document.getElementById("portfolio-grid");
let start = 0;

// Match CSS minmax(250px, 1fr) with 40px gap
function getVisible() {
  return Math.max(1, Math.floor((grid.offsetWidth + 40) / (250 + 40)));
}

function showCards() {
  const visible = getVisible();
  const slice = [];
  for (let i = 0; i < visible; i++) {
    slice.push(allCards[(start + i) % allCards.length]);
  }
  grid.replaceChildren(...slice);
}

document.getElementById("carousel-next").addEventListener("click", () => {
  start = (start + 1) % allCards.length;
  showCards();
});

document.getElementById("carousel-prev").addEventListener("click", () => {
  start = (start - 1 + allCards.length) % allCards.length;
  showCards();
});

window.addEventListener("resize", showCards);
showCards();
