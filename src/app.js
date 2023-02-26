/* eslint-disable */
import "bootstrap";
import "./style.css";

const genIndex = arr => {
  let index = Math.floor(Math.random() * arr.length);
  return index;
};
// const eraseSuite = () => {
//   let heart = document.querySelector(".heart");
//   let spade = document.querySelector(".spade");
//   let club = document.querySelector(".club");
//   let diamond = document.querySelector(".diamond");
//   heart.style.display = "none";
//   spade.style.display = "none";
//   club.style.display = "none";
//   diamond.style.display = "none";
// };

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

gsap.from(".card", { opacity: 0, duration: 1.6, x: -2000, ease: "power4.out" });

window.onload = function() {
  cardFront.addEventListener("click", () => {
    selectSuite(suites);
    onScreenChar(cardValue);
  });

  cardBack.addEventListener("click", () => {
    selectSuite(suites);
    onScreenChar(cardValue);
  });

  card.addEventListener("click", () => {
    card.classList.toggle("flip");
  });
};
