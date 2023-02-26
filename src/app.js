/* eslint-disable */
import "bootstrap";
import "./style.css";

const suites = [".heart", ".spade", ".club", ".diamond"];
const cardValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const genIndex = arr => {
  let index = Math.floor(Math.random() * arr.length);
  return index;
};
const eraseSuite = () => {
  let heart = document.querySelector(".heart");
  let spade = document.querySelector(".spade");
  let club = document.querySelector(".club");
  let diamond = document.querySelector(".diamond");
  heart.style.display = "none";
  spade.style.display = "none";
  club.style.display = "none";
  diamond.style.display = "none";
};

const selectSuite = () => {
  let random = suites[genIndex(suites)];
  let selector = document.querySelector(random);
  selector.style.display = "contents";
};

const onScreenChar = () => {
  let selector = document.querySelector("h1");
  let random = cardValue[genIndex(cardValue)];
  selector.innerHTML = random;
};

const cardSelectFront = document.querySelector(".front");
const cardSelectBack = document.querySelector(".back");

const card = document.getElementById("card");
// const char = document.querySelector(".char");

gsap.from(".card", { opacity: 0, duration: 1.6, x: -2000, ease: "power4.out" });

window.onload = function() {
  cardSelectFront.addEventListener("click", () => {
    eraseSuite();
    selectSuite();
    onScreenChar();
  });

  cardSelectBack.addEventListener("click", () => {
    eraseSuite();
    selectSuite();
    onScreenChar();
  });

  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
};
