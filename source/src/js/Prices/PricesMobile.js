import React, { useState } from "react";
import parseData from "./parseData";

const PricesMobile = () => {
    const data = parseData();

    const [sections, updateSections] = useState(data.sections);

    const onSectionClick = (sectionId) => {
        const sectionsCopy = [...sections];
        sectionsCopy.forEach((section) => {
            if (section.id === sectionId) {
                section.isActive = !section.isActive;
            }
        });
        updateSections(sectionsCopy);
    };
    const onCancelClick = () => {
        const sectionsCopy = [...sections];
        sectionsCopy.forEach((section) => (section.isActive = false));
        updateSections(sectionsCopy);
    };
    const onAllClick = () => {
        const sectionsCopy = [...sections];
        sectionsCopy.forEach((section) => (section.isActive = true));
        updateSections(sectionsCopy);
    };

    const [searchString, updateSearchString] = useState("");

    const onSearchChange = (e) => {
        const { value } = e.target;
        updateSearchString(value);
    };
    const onSearchReset = () => {
        updateSearchString("");
    };

    const [showSections, toggleShowSections] = useState(false);
    const onShowSectionsClick = () => {
        toggleShowSections(!showSections);
    };

    const filter = (items) => {
        const filteredItems = items.filter((item) => {
            const { parentSection } = item;

            if (item.name.toLowerCase().includes(searchString.toLowerCase())) {
                const section = sections.filter(
                    (sectionItem) => sectionItem.name === parentSection
                )[0];

                if (section.isActive) return true;
            }
        });
        return filteredItems;
    };

    const items = filter(data.items);

    const { circle, close, checked, cross } = data.icons;

    return (
        <div className="prices prices_mobile" style={{ height: innerHeight - 100 }}>
            <div className="prices__search-mobile">
                <div className="prices__input-mobile">
                    <input
                        type="text"
                        placeholder="Поиск по ценам"
                        value={searchString}
                        onChange={onSearchChange}
                    />
                </div>
                <div className="prices__close-mobile" onClick={onSearchReset}>
                    <img src={close.src} />
                </div>
            </div>
            <div className="prices__buttons-mobile">
                <div className="prices__button-mobile" onClick={onShowSectionsClick}>
                    Выбор услуги
                </div>
                <div className="prices__button-mobile" onClick={onAllClick}>
                    Все цены
                </div>
            </div>
            <div className="prices__results-mobile">
                {items.map((item) => (
                    <div className="prices__result-mobile" key={item.id}>
                        <div className="prices__result-text-mobile">{item.name}</div>
                        <div className="prices__result-price-mobile">
                            <span className="prices__text2-mobile">{item.price}</span>
                            <span className="prices__text3-mobile"> / {item.unit}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="prices__left"
                style={showSections ? { display: "block" } : { display: "none" }}
            >
                <div className="prices__top">
                    <div
                        className="prices__button-mobile prices__button-mobile_margin-right"
                        onClick={onAllClick}
                    >
                        Выбрать все
                    </div>
                    <div
                        className="prices__button-mobile prices__button-mobile_white"
                        onClick={onShowSectionsClick}
                    >
                        Найти цены
                    </div>
                </div>
                <div className="prices__cancel-selection" onClick={onCancelClick}>
                    <img src={cross.src} />
                    <span className="prices__text">снять выделение</span>
                </div>
                <div className="prices__services-container">
                    {sections.map((section) => (
                        <div
                            className="prices__service"
                            key={section.id}
                            onClick={() => onSectionClick(section.id)}
                        >
                            <div
                                className={
                                    "prices__icon" +
                                    (section.isActive ? " prices__icon_checked" : "")
                                }
                            >
                                <img
                                    src={<img src={section.isActive ? checked.src : circle.src} />}
                                />
                            </div>
                            <div className="prices__service-name">{section.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricesMobile;
