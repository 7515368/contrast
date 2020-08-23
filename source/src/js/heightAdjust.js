const heightAdjust = () => {
    const sections = document.querySelectorAll('[data-height-adjust="true"]');
    sections.forEach((section) => {
        section.style.height = innerHeight + "px";
    });
};

window.addEventListener("resize", heightAdjust);

heightAdjust();