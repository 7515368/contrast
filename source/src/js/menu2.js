const state = {
    menuLinks: document.querySelectorAll(".full-menu__content-link"),
    menuOpenTriggers: document.querySelectorAll("[data-menu-open]"),
    menuCloseTriggers: document.querySelectorAll("[data-menu-close]"),
    menuBackButton: document.querySelector("[data-menu-back-button]"),
    menuItemsContainer: document.querySelector("[data-menu-items-container]"),
    dataFullMenu: document.querySelector("[data-full-menu]"),
    menuItems: document.querySelectorAll("[data-menu-item]"),
    menuSections: document.querySelectorAll("[data-menu-content]"),
    servicesSection: document.querySelector('[data-menu-content="services"]'),
    servicesSubItems: document.querySelectorAll("[data-section-item]"),
    servicesSubSections: document.querySelectorAll("[data-section-content]"),
    servicesSubSectionNum: 0,
};

//menu open-close
const openMenu = () => {
    const { dataFullMenu } = state;
    dataFullMenu.classList.add("opened");

    document.querySelector('.header__wrapper').classList.add('active');
};

const closeMenu = () => {
    const { dataFullMenu } = state;
    dataFullMenu.classList.remove("opened");
    resetActiveSections();

    document.querySelector('.header__wrapper').classList.remove('active');
};

state.menuOpenTriggers.forEach((trigger) => (trigger.onclick = openMenu));
state.menuCloseTriggers.forEach((trigger) => (trigger.onclick = closeMenu));
//menu open-close

//menu item click and effects
const onMenuItemMouseOver = (e) => {
    const contentName = e.target.dataset.menuItem;
    let section;

    resetActiveSections();
    state.menuSections.forEach((menuSection) => {
        if (menuSection.dataset.menuContent === contentName) section = menuSection;
    });

    section.classList.add("active");
    e.target.classList.add("active");
};

const onMenuItemClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const contentName = e.target.dataset.menuItem;
    var href = e.target.href;
    if (!$(e.target).is('a')) {
        href = $(e.target).parents('a').attr('href');
    }
    if (contentName !== "services" && contentName !== "about") {
        closeMenu();
        setTimeout(() => {
            location = href;
        }, 750);
    }
};

const resetActiveSubSections = () => {
    state.servicesSubItems.forEach((item) => {
        item.classList.remove("active");
    });
    state.servicesSubSections.forEach((section) => {
        section.classList.remove("active");
    });
};

const resetActiveSections = () => {
    state.menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
    });
    state.menuSections.forEach((menuSection) => {
        menuSection.classList.remove("active");
    });
};

const openSubSection = () => {
    const { servicesSubSectionNum, servicesSubSections } = state;
    const subSection = servicesSubSections[servicesSubSectionNum];
    subSection.classList.add("active");
};

const onSubItemMouseOver = (e) => {
    resetActiveSubSections();
    e.target.classList.add("active");
    state.servicesSubSectionNum = e.target.dataset.sectionItem;
    openSubSection();
};

const onSubItemClick = (e) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
        location = e.target.href;
    }, 500);
};

const onMenuItemWithSubItemsClick = (e) => {
    state.menuBackButton.style.display = "block";
    state.menuItemsContainer.style.display = "none";

    const contentName = e.target.dataset.menuItem;
    let section;

    resetActiveSections();
    state.menuSections.forEach((menuSection) => {
        if (menuSection.dataset.menuContent === contentName) section = menuSection;
    });

    section.classList.add("active");
    e.target.classList.add("active");
};

const onMenuBackClick = () => {
    resetActiveSections();
    setTimeout(() => {
        state.menuBackButton.style.display = "none";
        state.menuItemsContainer.style.display = "block";
    }, 250);
};

if (innerWidth > 1024) {
    state.menuLinks.forEach((item) => (item.onclick = onMenuItemClick));
    state.menuItems.forEach((item) => (item.onclick = onMenuItemClick));
    state.menuItems.forEach((item) => (item.onmouseover = onMenuItemMouseOver));
} else {
    state.menuItems.forEach((item) => {
        const attr = item.getAttribute("data-menu-item");
        if (attr === "services" || attr === "about") {
            item.onclick = onMenuItemWithSubItemsClick;
        }
    });

    state.menuBackButton.onclick = onMenuBackClick;
}

state.servicesSubItems.forEach((item) => (item.onmouseover = onSubItemMouseOver));
state.servicesSubItems.forEach((item) => (item.onclick = onSubItemClick));
//menu item click and effects

//on load
const onWindowLoad = () => {
    if (!state.dataFullMenu) return;
    state.dataFullMenu.style.transition = "transform .5s ease 0.25s";
    state.servicesSubItems.forEach((item, i) => item.setAttribute("data-section-item", i));
};
 
window.addEventListener("load", onWindowLoad);
//on load
