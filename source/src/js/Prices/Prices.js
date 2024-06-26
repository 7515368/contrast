import React, { useState } from 'react'
import parseData from './parseData'

const Prices = () => {
    const data = parseData()

    const [sections, updateSections] = useState(data.sections)

    const onSectionClick = (sectionId) => {
        const sectionsCopy = [...sections]
        sectionsCopy.forEach((section) => {
            if (section.id === sectionId) {
                section.isActive = !section.isActive
            }
        })
        updateSections(sectionsCopy)
    }
    const onCancelClick = () => {
        const sectionsCopy = [...sections]
        sectionsCopy.forEach((section) => (section.isActive = false))
        updateSections(sectionsCopy)
    }
    const onAllClick = () => {
        const sectionsCopy = [...sections]
        sectionsCopy.forEach((section) => (section.isActive = true))
        updateSections(sectionsCopy)
    }

    const [searchString, updateSearchString] = useState('')

    const onSearchChange = (e) => {
        const { value } = e.target
        updateSearchString(value)
    }
    const onSearchReset = () => {
        updateSearchString('')
    }

    const filter = (items) => {
        const filteredItems = items.filter((item) => {
            const { parentSection } = item
            if (item.name.toLowerCase().includes(searchString.toLowerCase())) {
                const section = sections.filter(
                    (sectionItem) => sectionItem.name === parentSection
                )[0]

                if (section.isActive) return true
            }
        })
        return filteredItems
    }

    const items = filter(data.items)

    const { circle, close, checked, cross } = data.icons

    const globalSeparator = data.globalSeparator

    let downloadBtn

    if (data.downloadUrl && data.downloadText) {
        downloadBtn = <a href={data.downloadUrl} target="_blank" className="full-menu__form-submit _float">
            {data.downloadText}
        </a>
    }

    return (
        <div className="prices">
            <div className="prices__left">
                <div className="prices__top">
                    <div className="prices__heading">Выбор услуги</div>
                    <div className="prices__button" onClick={onAllClick}>
                        Все цены
                    </div>
                </div>
                <div className="prices__buttons-row">
                    <div className="prices__cancel-selection" onClick={onCancelClick}>
                        <img src={cross.src}/>
                        <span className="prices__text">снять выделение</span>
                    </div>
                    {downloadBtn}
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
                                    'prices__icon' +
                                    (section.isActive ? ' prices__icon_checked' : '')
                                }
                            >
                                <img src={section.isActive ? checked.src : circle.src}/>
                            </div>
                            <div className="prices__service-name">{section.name}</div>
                        </div>
                    ))}
                </div>
                <div className="prices__left-form" style={{ display: 'none' }}>
                    <form action="#" className="services__form _fixed form-with-submit-validation">
                        <div className="services__form-text">
                            Если остались вопросы,
                            оставьте телефон, мы перезвоним
                        </div>
                        <div className="full-menu__form-inputs required-input-wrapper">
                            <input
                                type="text"
                                className="input input_mode1 required-input"
                                placeholder="Ваш телефон"
                                required
                            />
                        </div>
                        <div className="prices__left-form-bottom">
                            <button className="full-menu__form-submit" type="submit">
                                Отправить заявку
                            </button>
                            <div className="services__form-required-message">
                                поле обязательно для заполнения
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="prices__right">
                <div className="prices__search">
                    <div className="prices__input">
                        <input
                            type="text"
                            placeholder="Найти пальто"
                            value={searchString}
                            onChange={onSearchChange}
                        />
                    </div>
                    <div className="prices__close" onClick={onSearchReset}>
                        <img src={close.src}/>
                    </div>
                </div>
                <div className="prices__results">
                    {items.map((item) => (
                        <div className="prices__result" key={item.id}>
                            <div className="prices__result-text">{item.name}</div>
                            <div className="prices__result-price">
                                <span className="prices__text2">{item.price}</span>
                                {item.unit &&
                                <span
                                    className="prices__text3"> {item.separator ? item.separator : globalSeparator} {item.unit}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Prices
