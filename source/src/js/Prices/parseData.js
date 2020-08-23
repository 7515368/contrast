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
            parentSection: sectionName,
        };
    });

    const sections = sectionsNames.map((section, id) => ({id, name: section, isActive : true}));

    return {
        sections,
        items,
    };
};
export default parseData;
