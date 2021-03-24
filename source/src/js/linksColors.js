const state = {
    smallMenuLinks: document.querySelectorAll("[data-small-menu] .header__link"),
    footerPhone: document.querySelector("[data-footer-phone]"),
    footerPhoneInner: document.querySelector("[data-footer-phone-inner]"),
    breadcrumbs: document.querySelector("[data-breadcrumbs]")
};

const setupTransitionsHandler = () => {
    setTimeout(() => setupTransitions(), 500);
};

const setupTransitions = () => {
    const elements = [...state.smallMenuLinks, state.footerPhone, state.footerPhoneInner, state.breadcrumbs];

    elements.forEach(elem => {
        elem && (elem.style.transition = "color 1.5s ease");
    });
};

window.addEventListener("load", setupTransitionsHandler);
