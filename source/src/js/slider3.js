const slider = document.querySelector("[data-slider3]");
const slides = Array.from(document.querySelectorAll("[data-slider3-slide]"));
const sliderControls = document.querySelector("[data-slider3-controls]");
const sliderControlsDots = document.querySelector("[data-slider3-controls-dots]");
const sliderControlsLeft = document.querySelector("[data-slider3-controls-left]");
const sliderControlsRight = document.querySelector("[data-slider3-controls-right]");
let currentSlideNum = 0;
let intervalId = 0;

const controls = () => {
    if (slides.length < 2) return;
    sliderControls.style.display = "flex";

    slides.forEach((sl, i) => {
        sliderControlsDots.insertAdjacentHTML(
            "beforeEnd",
            `<div class="services__slider-dot${
                i === 0 ? " active" : ""
            }" data-slider3-dot="${i}"></div>`
        );
    });
};

const render = () => {
    slides.forEach((sl, i) => {
        sl.style.opacity = "0";
        sl.style.zIndex = "0";
        if (currentSlideNum == i) {
            sl.style.opacity = "1";
            sl.style.zIndex = "1";
        }
    });
};

const renderControls = () => {
    Array.from(sliderControlsDots.children).forEach((dot, i) => {
        dot.classList.remove("active");
        if (currentSlideNum == i) {
            dot.classList.add("active");
        }
    });

    sliderControlsLeft.classList.add("active");
    sliderControlsRight.classList.add("active");
};

const onLeftClick = () => {
    clearInterval(intervalId);
    autoSlider(10000);
    currentSlideNum--;
    if (currentSlideNum < 0) {
        currentSlideNum = slides.length - 1;
    }
    render();
    renderControls();
};

const onRightClick = () => {
    clearInterval(intervalId);
    autoSlider(10000);
    currentSlideNum++;
    if (currentSlideNum > slides.length - 1) {
        currentSlideNum = 0;
    }
    render();
    renderControls();
};

const addListeners = () => {
    sliderControlsLeft.addEventListener("click", onLeftClick);
    sliderControlsRight.addEventListener("click", onRightClick);
};

const handleAutoSliderClick = () => {
    currentSlideNum++;
    if (currentSlideNum > slides.length - 1) {
        currentSlideNum = 0;
    }
    render();
    renderControls();
};

const autoSlider = (time) => {
    intervalId = setInterval(() => {
        handleAutoSliderClick();
    }, time);
};

const init = () => {
    if (!slider) return;
    controls();
    renderControls();
    render();
    addListeners();
    autoSlider(5000);
};

init();
