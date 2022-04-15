"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "correct Number";

document.querySelector(".number").textContent = 13;

document.querySelector(".score").textContent = 30;
\*/

const rand = Math.trunc(Math.random() * 20 + 1);

let score = 20;

document.querySelector(".number").textContent = rand;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "invalid operation";
  } else if (guess === rand) {
    document.querySelector(
      ".message"
    ).textContent = `good job the ${rand} is the correct number and you finishd with ${score}`;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "60rem";
  } else if (guess < rand) {
    document.querySelector(
      ".message"
    ).textContent = `the ${guess} is greater than the secret number and you have still ${score} lives`;
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(
      ".message"
    ).textContent = `the ${guess} is greater than the secret number and you have still ${score} lives`;
    score--;
    document.querySelector(".score").textContent = score;
  }
  if (score === 0) {
    document.querySelector(".message").textContent = "you failed";
  }
});
