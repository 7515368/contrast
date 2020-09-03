import "normalize.css/normalize.css";
import "../styles/styles.scss";
import "./swipeEvent.js";
import "./heightAdjust.js";
import "./linksColors.js";
import "./fullPageScroll.js";
import "./form.js";
import "./slider.js";
import "./sliderMob.js";
import "./menu2.js";
import "./map.js";
import "./carousel.js";
import "./carousel2.js";
import "./slider3.js";
import "./sliderPopup.js";
import "./sliderPopup2.js";
import "./request.js";
import "./main.js";

const state = { placeholders: document.querySelectorAll("input") };

if (state.placeholders.length) {
    state.placeholders.forEach((ph) => {
        const phText = ph.placeholder;
        ph.onfocus = () => (ph.placeholder = "");
        ph.onblur = () => (ph.placeholder = phText);
    });
}

import React from "react";
import ReactDOM from "react-dom";
import Prices from "./prices/Prices";
import PricesMobile from "./prices/PricesMobile";

const targetEl = document.getElementById("react-prices");
if (targetEl && innerWidth > 1024) ReactDOM.render(<Prices />, targetEl)
else if(targetEl && innerWidth <= 1024) ReactDOM.render(<PricesMobile />, targetEl)