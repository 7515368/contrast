import initCarousel from "./carousel2";

//elements
const infoBlocks = document.querySelectorAll("[data-info-block]");
const popup = document.querySelector("[data-popup-container]");
const popupTriggers = document.querySelectorAll("[data-popup-show-more]");
const popupClose = document.querySelector("[data-popup-close]");
const popupDate = document.querySelector("[data-popup-date]");
const popupHeader = document.querySelector("[data-popup-header]");
const popupText = document.querySelector("[data-popup-text]");
const popupFullImg = document.querySelector("[data-popup-full-img]");
const popupImg = document.querySelector("[data-popup-img]");
const popupSwitch = document.querySelector("[data-popup-switch]");

// functions
const init = () => {
    makeListeners();
    enumerateBlocks();
};
const makeListeners = () => {
    popupTriggers.forEach((tr) => (tr.onclick = onPopupTriggerClick));
    popupClose && (popupClose.onclick = popupCloseHandle);
};
const onPopupTriggerClick = ({ target }) => {
    popupOpen();
    renderDataToPopup(target);
};
const popupOpen = () => {
    document.removeEventListener("click", onDocumentClick);
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.transform = "translateX(0)";
    });

    setTimeout(() => {
        document.addEventListener("click", onDocumentClick);
    }, 100);

    // $.fn.fullpage.setMouseWheelScrolling(false);
    // $.fn.fullpage.setAllowScrolling(false);
};

const onDocumentClick = (e) => {
    if (!popup.contains(e.target)) popupCloseHandle();
};

const popupCloseHandle = () => {
    popup.style.transform = "";
    document.removeEventListener("click", onDocumentClick);

};
const renderDataToPopup = (target) => {
    const block = target.closest("[data-info-block]");

    const img = block.querySelector("[data-info-block-img]");
    const date = block.querySelector("[data-info-block-date]");
    const header = block.querySelector("[data-info-block-header]");
    const text = block.querySelector("[data-info-block-text-full]");

    popup.setAttribute("data-popup-container", block.getAttribute("data-info-block"));
    popupImg && img && (popupImg.src = img.src);
    popupDate && (popupDate.innerHTML = date.innerHTML);
    popupHeader && (popupHeader.innerHTML = header.innerHTML);
    popupText && (popupText.innerHTML = text.innerHTML);

    initCarousel(block.getAttribute("data-info-block"), infoBlocks);
};

const enumerateBlocks = () =>
    infoBlocks.forEach((block, i) => block.setAttribute("data-info-block", i));

// launch
init();
