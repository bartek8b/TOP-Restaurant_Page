import "./style.css";
import { creator } from "./creator.js";
import { restaurantImg, imgAlt as homeImgAlt, text as homeText } from "./home.js";
import { teamImg, imgAlt as teamImgAlt, text as teamText } from "./team.js";

console.log('creator:', creator);

const homeBtn = document.querySelector('.homeBtn');
const teamBtn = document.querySelector('.teamBtn');

homeBtn.addEventListener('click', () => creator(restaurantImg, homeImgAlt, homeText));
teamBtn.addEventListener('click', () => creator(teamImg, teamImgAlt, teamText));

window.onload = () => creator(restaurantImg, homeImgAlt, homeText);