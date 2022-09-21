/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const nro = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const iconos = ["♦", "♥", "♠", "♣"];
  let randcardnum = nro[Math.floor(Math.random() * 13) + 1];
  let randpinta = iconos[Math.floor(Math.random() * 3) + 1];

  console.log(randcardnum);
  console.log(randpinta);
  console.log("Hello Rigo from the console!");
  let numcartacentro = document.querySelector(".numero");
  numcartacentro.textContent = randcardnum;
  let iconotopizq = document.querySelector(".top-left");
  iconotopizq.textContent = randpinta;
  let iconolowder = document.querySelector(".bottom-right");
  iconolowder.textContent = randpinta;
  if (randpinta == "♦" || randpinta == "♥") {
    iconolowder.style.color = "red";
    iconotopizq.style.color = "red";
  }
};
