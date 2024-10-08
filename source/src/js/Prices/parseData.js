const parseData = () => {
    const prices = document.querySelector("[data-react-prices]").children;
    const globalSeparator = document.querySelector("[data-price-separator]").dataset.priceSeparator;
    let sectionsNames = [];

    const items = Array.from(prices).map((element, id) => {
        const sectionName = element.getAttribute("data-service");

        if (!sectionsNames.includes(sectionName)) sectionsNames.push(sectionName);

        const unit = (element.children[2]) ? element.children[2].getAttribute("data-service-unit") : null;
        const localSeparator = (element.children[3]) ? element.children[3].getAttribute("data-service-separator") : null;

        return {
            id,
            name: element.children[0].getAttribute("data-service-name"),
            price: element.children[1].getAttribute("data-service-price"),
            unit: unit,
            separator: localSeparator,
            parentSection: sectionName
        };
    });

    const sections = sectionsNames.map((section, id) => ({ id, name: section, isActive: true }));

    const icons = {};
    const iconsContainer = document.querySelector("[data-icons]");

    icons.checked = iconsContainer.querySelector("[data-icon-checked]");
    icons.circle = iconsContainer.querySelector("[data-icon-circle]");
    icons.cross = iconsContainer.querySelector("[data-icon-cross]");
    icons.close = iconsContainer.querySelector("[data-icon-close]");

    const downloadUrl = document.querySelector("[data-download-url]").dataset.downloadUrl;
    const downloadText = document.querySelector("[data-download-text]").dataset.downloadText;

    return {
        sections,
        items,
        icons,
        globalSeparator,
        downloadUrl,
        downloadText
    };
};
export default parseData;
