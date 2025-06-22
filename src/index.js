import "./style.css";
import { creator } from "./creator.js";
import {
  restaurantImg,
  imgAlt as homeImgAlt,
  text as homeText,
} from "./home.js";
import { teamImg, imgAlt as teamImgAlt, text as teamText } from "./team.js";
import { menuImg, imgAlt as menuImgAlt, text as menuText } from "./menu.js";

console.log("creator:", creator);

const homeBtn = document.querySelector(".homeBtn");
const teamBtn = document.querySelector(".teamBtn");
const menuBtn = document.querySelector(".menuBtn");

function handleMenuClasses(addClass, removeClass1, removeClass2) {
  addClass.classList.add("open");
  removeClass1.classList.remove("open");
  removeClass2.classList.remove("open");
}

homeBtn.addEventListener("click", () => {
  creator(restaurantImg, homeImgAlt, homeText);
  handleMenuClasses(homeBtn, teamBtn, menuBtn);
});

teamBtn.addEventListener("click", () => {
  creator(teamImg, teamImgAlt, teamText);
  handleMenuClasses(teamBtn, homeBtn, menuBtn);
});

menuBtn.addEventListener("click", () => {
  creator(menuImg, menuImgAlt, menuText);
   handleMenuClasses(menuBtn, homeBtn, teamBtn);

});

window.onload = () => creator(restaurantImg, homeImgAlt, homeText);
