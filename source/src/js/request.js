//elements
const popup = document.querySelector("[data-popup-container]");
const requestContainer = document.querySelector("[data-request-block]");
const requestTrigger = document.querySelector("[data-request-trigger]");
const requestSubmit = document.querySelector("[data-request-submit]");
const requestForm = document.querySelector("[data-request-form]");
const requestFormClose = document.querySelector("[data-request-close]");
const requestOverlay = document.querySelector("[data-request-overlay]");
const popupClose = document.querySelector("[data-popup-close]");

// functions
const init = () => {
    if (!requestTrigger) return;
    makeListeners();
};
const makeListeners = () => {
    requestTrigger.onclick = onRequestTriggerClick;
    requestFormClose.onclick = formCloseHandle;
};
const onRequestTriggerClick = () => {
    popup.classList.add("request-mode");

    setTimeout(() => {
        requestForm.style.opacity = 1;
        requestOverlay.style.opacity = 1;
    }, 0);
    // renderDataToPopup(target);
};

const formCloseHandle = () => {
    popup.classList.remove("request-mode");
    requestForm.style.opacity = 0;
    requestOverlay.style.opacity = 0;
};

// launch
init();
