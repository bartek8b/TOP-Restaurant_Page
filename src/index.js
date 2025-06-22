import "./style.css";
import { creator } from "./creator.js";
import { imgSrc as homeImgSrc, imgAlt as homeImgAlt, text as homeText } from "./home.js";

console.log('creator:', creator);

const homeBtn = document.querySelector('.homeBtn');

homeBtn.addEventListener('click', () => creator(homeImgSrc, homeImgAlt, homeText));