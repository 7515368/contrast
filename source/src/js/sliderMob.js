const state = {
    slides: document.querySelectorAll("[data-section-slide-mob]"),
    totalSlides: document.querySelectorAll("[data-section-slide-mob]").length,
    currentSlideNum: 1,
};

const switchSlideHandler = () => {
    if (!state.slides.length) return;
    if (state.slides.length === 1) {
        state.slides[0].classList.add("active");
        return;
    }
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
