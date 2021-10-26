const state = {
    menuOpenTriggers: document.querySelectorAll("[data-menu-open]"),
    menuCloseTriggers: document.querySelectorAll("[data-menu-close]"),
    dataFullMenu: document.querySelector("[data-full-menu]"),
    menuItems: document.querySelectorAll("[data-menu-item]"),
    menuSections: document.querySelectorAll("[data-menu-content]"),
    servicesSection: document.querySelector('[data-menu-content="services"]'),
    servicesSubItems: document.querySelectorAll("[data-section-item]"),
    servicesSubSections: document.querySelectorAll("[data-section-content]"),
    servicesSubSectionNum: 0
};

//menu open-close
const openMenu = () => {
    const { dataFullMenu } = state;
    dataFullMenu.classList.add("opened"); 
};

const closeMenu = () => {
    const { dataFullMenu } = state;
    dataFullMenu.classList.remove("opened");
    resetActiveSections();
};

state.menuOpenTriggers.forEach(trigger => (trigger.onclick = openMenu));
state.menuCloseTriggers.forEach(trigger => (trigger.onclick = closeMenu));
//menu open-close

//menu item click and effects
const onMenuItemClick = e => {
    const contentName = e.target.dataset.menuItem;
    let section;

    resetActiveSections();
    state.menuSections.forEach(menuSection => {
        if (menuSection.dataset.menuContent === contentName) section = menuSection;
    });

    section.classList.add("active");
    e.target.classList.add("active");

    if (section.dataset.withSubsections === "") {
    }
};

const resetActiveSubSections = () => {
    state.servicesSubItems.forEach(item => {
        item.classList.remove("active");
    });
    state.servicesSubSections.forEach(section => {
        section.classList.remove("active");
    });
};

const resetActiveSections = () => {
    state.menuItems.forEach(menuItem => {
        menuItem.classList.remove("active");
    });
    state.menuSections.forEach(menuSection => {
        menuSection.classList.remove("active");
    });
};

const openSubSection = () => {
    const { servicesSubSectionNum, servicesSubSections } = state;
    const subSection = servicesSubSections[servicesSubSectionNum];
    subSection.classList.add("active");
};

const onSubItemClick = e => {
    resetActiveSubSections();
    e.target.classList.add("active");
    state.servicesSubSectionNum = e.target.dataset.sectionItem;
    openSubSection();
};

state.menuItems.forEach(item => (item.onclick = onMenuItemClick));
state.servicesSubItems.forEach(item => (item.onclick = onSubItemClick));
//menu item click and effects

//on load
const onWindowLoad = () => {
    if(!state.dataFullMenu) return;
    state.dataFullMenu.style.transition = "transform .5s ease .25s";
    state.servicesSubItems.forEach((item, i) => item.setAttribute("data-section-item", i));
};

window.addEventListener("load", onWindowLoad);
//on load
