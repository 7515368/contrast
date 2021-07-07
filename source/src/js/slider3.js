const slider = document.querySelector("[data-slider3]");
const slides = Array.from(document.querySelectorAll("[data-slider3-slide]"));
const sliderControls = document.querySelector("[data-slider3-controls]");
const sliderControlsDots = document.querySelector("[data-slider3-controls-dots]");
const sliderControlsLeft = document.querySelector("[data-slider3-controls-left]");
const sliderControlsRight = document.querySelector("[data-slider3-controls-right]");
let currentSlideNum = 0;
let intervalId = 0;

var state = {
    main: document.getElementById("main"),
    pagination: document.querySelector("[data-pagination]"),
    paginationInner: document.querySelector("[data-pagination-inner]"),
    paginationUp: document.querySelector("[data-pagination-up]"),
    paginationDown: document.querySelector("[data-pagination-down]"),
    smallMenu: document.querySelector("[data-small-menu]"),
    logoWhite: document.querySelector("[data-logo-white]"),
    logoBlue: document.querySelector("[data-logo-blue]"),
    menuWhite: document.querySelector("[data-menu-white]"),
    menuBlue: document.querySelector("[data-menu-blue]"),
    footerPhone: document.querySelector("[data-footer-phone]"),
    footerPhoneInner: document.querySelector("[data-footer-phone-inner]"),
    breadcrumbs: document.querySelector("[data-breadcrumbs]"),
    switch: document.querySelector("[data-carousel-switch]"),
    links: document.querySelectorAll("[data-fullpage-scroll-to]")
};

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

            if (window.fullpageInstance && window.fullpageInstance.getActiveSection().index == '1') {
                var smallMenu = state.smallMenu,
                footerPhone = state.footerPhone,
                footerPhoneInner = state.footerPhoneInner,
                logoWhite = state.logoWhite,
                logoBlue = state.logoBlue,
                menuWhite = state.menuWhite,
                menuBlue = state.menuBlue,
                breadcrumbs = state.breadcrumbs,
                paginationInner = state.paginationInner,
                paginationUp = state.paginationUp,
                paginationDown = state.paginationDown;

                var menuColor = $(sl).attr('data-menu-color'),
                phoneColor = $(sl).attr('data-phone-color'),
                logoColor = $(sl).attr('data-logo-color'),
                burgerColor = $(sl).attr('data-burger-color'),
                breadcrumbsColor = $(sl).attr('data-breadcrumbs-color'),
                paginationColor = $(sl).attr('data-pagination-color'),
                controlColors = burgerColor;

                footerPhone && (footerPhone.style.color = phoneColor || "white");
                footerPhoneInner && (footerPhoneInner.style.color = phoneColor || "white");
                smallMenu && (smallMenu.style.color = menuColor || "white");
                breadcrumbs && (breadcrumbs.style.color = breadcrumbsColor || "white");
                paginationInner && (paginationInner.style.color = paginationColor || "white");

                if (controlColors == undefined) {
                    $(sliderControlsDots).removeClass('blue');
                    $(sliderControlsLeft).removeClass('blue');
                    $(sliderControlsRight).removeClass('blue');
                } else {
                    $(sliderControlsDots).addClass('blue');
                    $(sliderControlsLeft).addClass('blue');
                    $(sliderControlsRight).addClass('blue');
                }

                if (logoColor && logoColor === "blue") {
                    logoWhite && (logoWhite.style.opacity = 0);
                    logoBlue && (logoBlue.style.opacity = 1);
                } else {
                    logoWhite && (logoWhite.style.opacity = 1);
                    logoBlue && (logoBlue.style.opacity = 0);
                }
                if (burgerColor && burgerColor === "blue") {
                    menuWhite && (menuWhite.style.opacity = 0);
                    menuBlue && (menuBlue.style.opacity = 1);
                } else {
                    menuWhite && (menuWhite.style.opacity = 1);
                    menuBlue && (menuBlue.style.opacity = 0);
                }
                if (paginationColor && paginationColor === "#005090") {
                    paginationUp && paginationUp.classList.add("blue");
                    paginationDown && paginationDown.classList.add("blue");
                } else {
                    paginationUp && paginationUp.classList.remove("blue");
                    paginationDown && paginationDown.classList.remove("blue");
                }
            }
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

window.slider3_GoToZeroSlide = () => {
    clearInterval(intervalId);
    autoSlider(10000);
    currentSlideNum = 0;
    render();
    renderControls();
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
    autoSlider(4000);
};

init();
