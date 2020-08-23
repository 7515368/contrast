const initCarousel = (currentIndex, elements) => {
    const state = {
        carouselContainer: document.querySelector("[data-carousel2-container]"),
        carouselBack: document.querySelector("[data-carousel2-back]"),
        carouselForw: document.querySelector("[data-carousel2-forward]"),
        carouselCurrent: document.querySelector("[data-carousel2-current]"),
        carouselTotal: document.querySelector("[data-carousel2-total]"),
        carouselItems: elements,
        total: elements.length,
        current: currentIndex,
    };

    const {
        carouselBack,
        carouselForw,
        total,
        current,
        carouselTotal,
        carouselCurrent,
        carouselContainer,
    } = state;

    carouselBack &&
        (carouselBack.onclick = () => {
            state.current--;
            if (state.current < 0) state.current = 0;
            renderTrack();
        });
    carouselForw &&
        (carouselForw.onclick = () => {
            state.current++;
            if (state.current >= total) state.current = total - 1;
            renderTrack();
        });

    const renderTrack = () => {
        elements[state.current].querySelector("[data-popup-show-more]").click();
        renderButtons();
        renderNumbers();
    };

    const renderButtons = () => {
        if (state.current === 0) {
            carouselBack.style.opacity = 0.5;
            carouselBack.style.pointerEvents = "none";
        }
        if (state.current > 0) {
            carouselBack.style.opacity = 1;
            carouselBack.style.pointerEvents = "";
        }

        if (state.current + 1 === state.total) {
            carouselForw.style.opacity = 0.5;
            carouselForw.style.pointerEvents = "none";
        }
        if (state.current + 1 < state.total) {
            carouselForw.style.opacity = 1;
            carouselForw.style.pointerEvents = "";
        }
    };

    const renderNumbers = () => {
        carouselCurrent.innerHTML = +state.current + 1;
        carouselTotal.innerHTML = state.total;
    };

    carouselContainer &&
        carouselContainer.addEventListener("swiped-left", () => {
            if (state.current + state.totalInView !== state.total) carouselForw.click();
        });

    carouselContainer &&
        carouselContainer.addEventListener("swiped-right", () => {
            if (state.current !== 0) carouselBack.click();
        });

    renderTrack();
};

export default initCarousel;
