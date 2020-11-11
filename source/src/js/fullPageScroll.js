import fullpage from "fullpage.js";

const state = {
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
    breadcrumbs: document.querySelector("[data-breadcrumbs]"),
    switch: document.querySelector("[data-carousel-switch]"),
    links: document.querySelectorAll("[data-fullpage-scroll-to]"),
};

const fullpageChange = (currentSection, index) => {
    const {
        smallMenu,
        footerPhone,
        logoWhite,
        logoBlue,
        menuWhite,
        menuBlue,
        breadcrumbs,
        paginationInner,
        paginationUp,
        paginationDown,
    } = state;

    const {
        phoneColor,
        menuColor,
        logoColor,
        burgerColor,
        breadcrumbsColor,
        paginationColor,
    } = currentSection.dataset;
    footerPhone && (footerPhone.style.color = phoneColor || "white");
    smallMenu && (smallMenu.style.color = menuColor || "white");
    breadcrumbs && (breadcrumbs.style.color = breadcrumbsColor || "white");
    paginationInner && (paginationInner.style.color = paginationColor || "white");

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

    if (index || index === 0) makePaginationItemActive(index);
};

const appendLinksListeners = () => {
    const { links } = state;

    links.forEach((link) => {
        link.onclick = (e) => {
            e.preventDefault();
            const num = link.getAttribute("data-fullpage-scroll-to");
            state.fullPageInstance.moveTo(num);
        };
    });
};

const makePagination = () => {
    const { paginationInner } = state;
    if (!paginationInner) return;
    const length = state.main.querySelectorAll(".section").length;
    let n = 0;

    do {
        paginationInner.insertAdjacentHTML(
            "beforeend",
            `<div class="pagination__item${n === 0 ? " _active" : ""}">0${n + 1}</div>`
        );
        n++;
    } while (n < length);

    appendPaginationListeners();
};

const appendPaginationListeners = () => {
    const { paginationInner, paginationUp, paginationDown } = state;
    if (!paginationInner) return;
    Array.from(paginationInner.children).forEach((child) => {
        child.onclick = function () {
            const num = parseInt(this.innerHTML);
            state.fullPageInstance.moveTo(num);
            makePaginationItemActive(num - 1);
            checkArrows(num - 1);
        };
    });

    paginationUp.onclick = () => {
        const current = parseInt(
            Array.from(paginationInner.children).find((child) => {
                return child.classList.contains("_active");
            }).innerHTML
        );

        state.fullPageInstance.moveTo(current - 1);
    };
    paginationDown.onclick = () => {
        const current = parseInt(
            Array.from(paginationInner.children).find((child) => {
                return child.classList.contains("_active");
            }).innerHTML
        );

        state.fullPageInstance.moveTo(current + 1);
    };
};

const makePaginationItemActive = (num) => {
    const { paginationInner } = state;
    if (!paginationInner) return;
    Array.from(paginationInner.children).forEach((child, index) => {
        child.classList.remove("_active");
        if (index === num) child.classList.add("_active");
    });
};

const checkArrows = (num) => {
    const { paginationUp, paginationDown, paginationInner } = state;
    if (num == 0) {
        paginationUp && (paginationUp.style.display = "none");
        paginationDown && (paginationDown.style.display = "block");
    } else if (num == paginationInner.children.length - 1) {
        paginationUp && (paginationUp.style.display = "block");
        paginationDown && (paginationDown.style.display = "none");
    } else {
        paginationUp && (paginationUp.style.display = "block");
        paginationDown && (paginationDown.style.display = "block");
    }
};

const fullpageHandler = () => {
    const mainEl = document.getElementById("main");
    if (!mainEl) return;
    if (!mainEl.dataset.fullpage) return;
    if (innerWidth <= 1024) return;
    state.fullPageInstance = new fullpage("#main", {
        onLeave: function (origin, destination, direction) {
            fullpageChange(destination.item, destination.index);
            checkArrows(destination.index);
        },
        afterRender: function () {
            fullpageChange(fullpage_api.getActiveSection().item);
            makePagination();
            checkArrows(0);
            appendLinksListeners();
        },
        normalScrollElements: '.popup-block__popup-text, .section__company-2-overlay-scroll, .section__section-4-overlay-scroll, .section__charity-overlay-scroll'
    });
 
    // fullpageChange(state.fullPageInstance.getActiveSection().item);
    // makePagination();
    // checkArrows(0);
    // appendLinksListeners();
};

fullpageHandler();
