const state = {
    carouselBack: document.querySelector("[data-carousel-back]"),
    carouselForw: document.querySelector("[data-carousel-forward]"),
    carouselCurrent: document.querySelector("[data-carousel-current]"),
    carouselTotal: document.querySelector("[data-carousel-total]"),
    carouselTrackContainer: document.querySelector("[data-carousel-track-container]"),
    carouselTrack: document.querySelector("[data-carousel-track]"),
    carouselItems: document.querySelectorAll("[data-carousel-track] > *"),
    total: 0,
    current: 0,
};

if (state.carouselTrack) {
    state.total = state.carouselTrack.getAttribute("data-in-view");
}

const {
    carouselBack,
    carouselForw,
    total,
    carouselTrack,
    carouselTrackContainer,
    carouselTotal,
    carouselCurrent,
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
    if (!state.carouselItems[0]) return;
    const { clientWidth } = carouselTrack;
    const { current } = state;
    carouselTrack.style.transform = `translateX(${-(clientWidth * current)}px)`;
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
    if (state.current + 1 == state.total) {
        carouselForw.style.opacity = 0.5;
        carouselForw.style.pointerEvents = "none";
    }
    if (state.current + 1 < state.total) {
        carouselForw.style.opacity = 1;
        carouselForw.style.pointerEvents = "";
    }
};

const renderNumbers = () => {
    carouselCurrent.innerHTML = state.current + 1;
    carouselTotal.innerHTML = state.total;
};

carouselTrackContainer &&
    carouselTrackContainer.addEventListener("swiped-left", () => {
        if (state.current + state.totalInView !== state.total) carouselForw.click();
    });

carouselTrackContainer &&
    carouselTrackContainer.addEventListener("swiped-right", () => {
        if (state.current !== 0) carouselBack.click();
    });

renderTrack();
