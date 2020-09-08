const parseData = () => {
    const prices = document.querySelector("[data-react-prices]").children;
    let sectionsNames = [];

    const items = Array.from(prices).map((element, id) => {
        const sectionName = element.getAttribute("data-service");

        if (!sectionsNames.includes(sectionName)) sectionsNames.push(sectionName);

        return {
            id,
            name: element.children[0].getAttribute("data-service-name"),
            price: element.children[1].getAttribute("data-service-price"),
            unit: element.children[2].getAttribute("data-service-unit"),
            parentSection: sectionName,
        };
    });

    const sections = sectionsNames.map((section, id) => ({ id, name: section, isActive: true }));

    const icons = {};
    const iconsContainer = document.querySelector("[data-icons]");

    icons.checked = iconsContainer.querySelector("[data-icon-checked]");
    icons.circle = iconsContainer.querySelector("[data-icon-circle]");
    icons.cross = iconsContainer.querySelector("[data-icon-cross]");
    icons.close = iconsContainer.querySelector("[data-icon-close]");

    return {
        sections,
        items,
        icons
    };
};
export default parseData;
