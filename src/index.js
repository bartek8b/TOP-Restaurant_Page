import "./style.css";
import { creator } from "./creator.js";
import { restaurantImg, imgAlt as homeImgAlt, text as homeText } from "./home.js";

console.log('creator:', creator);

const homeBtn = document.querySelector('.homeBtn');

homeBtn.addEventListener('click', () => creator(restaurantImg, homeImgAlt, homeText));

window.onload = () => creator(restaurantImg, homeImgAlt, homeText);