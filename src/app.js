/* eslint-disable */
import "bootstrap";
import "./style.css";

const genIndex = arr => {
  let index = Math.floor(Math.random() * arr.length);
  return index;
};

const selectSuite = arr => {
  let random = arr[genIndex(arr)];
  let selector = document.querySelectorAll("p");
  selector.forEach(p => {
    if (random === "♥" || random === "♦") p.style.color = "red";
    else p.style.color = "black";
    p.innerHTML = random;
  });
};

const onScreenChar = arr => {
  let selector = document.querySelectorAll("h1");
  let random = arr[genIndex(arr)];
  selector.forEach(h1 => {
    h1.innerHTML = random;
  });
};

const suites = ["♦", "♥", "♠", "♣"];
const cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const card = document.getElementById("card");
const cardFront = document.querySelector(".front");
const cardBack = document.querySelector(".back");

const generateCard = () => {
  selectSuite(suites);
  onScreenChar(cardValue);
};

gsap.from(".card", {
  rotation: 720,
  opacity: 0,
  scale: 0.5,
  duration: 1.6,
  x: -3000,
  ease: "power4.out"
});

window.onload = function() {
  cardFront.addEventListener("click", () => {
    setTimeout(generateCard, 300);
  });

  cardBack.addEventListener("click", () => {
    setTimeout(generateCard, 300);
  });

  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
};
