import initCarousel from "./carousel2";

//elements
const popup = document.querySelector("[data-popup-container2]");
const popupTriggers = document.querySelectorAll("[data-popup-show-more2]");
const popupClose = document.querySelector("[data-popup-close2]");
const popupDate = document.querySelector("[data-popup-date2]");
const popupHeader = document.querySelector("[data-popup-header2]");
const popupText = document.querySelector("[data-popup-text2]");
const popupImg = document.querySelector("[data-popup-img2]");

// functions
const init = () => {
    makeListeners();
};
const makeListeners = () => {
    popupTriggers.forEach((tr) => (tr.onclick = onPopupTriggerClick));
    popupClose && (popupClose.onclick = popupCloseHandle);
};
const onPopupTriggerClick = (e) => {
    e.preventDefault();
    const { target } = e;
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
};

const onDocumentClick = (e) => {
    if (!popup.contains(e.target)) popupCloseHandle();
};

const popupCloseHandle = () => {
    popup.style.transform = "";
    document.removeEventListener("click", onDocumentClick);

    setTimeout(() => {
        popup.style.display = "none";
    }, 500);
};
const renderDataToPopup = (target) => {
    const block = target.closest("[data-info-block2]");
    const img = block.querySelector("[data-info-block-img2]");
    const date = block.querySelector("[data-info-block-date2]");
    const header = block.querySelector("[data-info-block-header2]");
    const text = block.querySelector("[data-info-block-text-full2]");

    popupImg && (popupImg.src = img.src);
    popupDate && (popupDate.innerHTML = date.innerHTML);
    popupHeader && (popupHeader.innerHTML = header.innerHTML);
    popupText && (popupText.innerHTML = text.innerHTML);
};

// launch
init();
