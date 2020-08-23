const state = {
    slides: document.querySelectorAll("[data-section-slide]"),
    totalSlides: document.querySelectorAll("[data-section-slide]").length,
    currentSlideNum: 1,
};

const switchSlideHandler = () => {
    if (!state.slides.length || state.slides.length === 1) return;
    setInterval(() => {
        switchSlideNum();
        changeSlide();
    }, 4000);
};

const switchSlideNum = () => {
    state.currentSlideNum++;
    const { currentSlideNum, totalSlides } = state;
    if (currentSlideNum > totalSlides) {
        state.currentSlideNum = 1;
    }
};

const removeActiveCLassName = () => {
    const { slides } = state;
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
};

const changeSlide = () => {
    const { currentSlideNum, totalSlides, slides } = state;
    removeActiveCLassName();
    slides[currentSlideNum - 1].classList.add("active");
};

window.addEventListener("load", switchSlideHandler);
