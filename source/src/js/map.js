const state = {
    filterMapMsk: document.querySelector("[data-filter-city-msk]"),
    filterMapSbp: document.querySelector("[data-filter-city-spb]"),
    filterMapAll: document.querySelector("[data-filter-all]"),
    filterMapExpress: document.querySelector("[data-filter-express]"),
    filterMap: document.querySelector("[data-filter-map]"),
    filterList: document.querySelector("[data-filter-list]"),
    adressesMap: document.querySelector("[data-adresses-map]"),
    adressesMapObject: document.querySelector("[data-adresses-map-object]"),
    adressesList: document.querySelector("[data-adresses-list]"),
};

const {
    filterMap,
    filterList,
    adressesMap,
    adressesMapObject,
    adressesList,
    filterMapMsk,
    filterMapSbp,
    filterMapAll,
    filterMapExpress
} = state;

filterMap &&
    (filterMap.onclick = () => {
        filterMap.classList.add("active");
        filterList.classList.remove("active");
        adressesMap.classList.add("active");
        adressesList.classList.remove("active");
    });

filterList &&
    (filterList.onclick = () => {
        filterMap.classList.remove("active");
        filterList.classList.add("active");
        adressesMap.classList.remove("active");
        adressesList.classList.add("active");
    });

filterMapMsk &&
    (filterMapMsk.onclick = () => {
        filterMapMsk.classList.add("active");
        filterMapSbp.classList.remove("active");
    });

filterMapSbp &&
    (filterMapSbp.onclick = () => {
        filterMapSbp.classList.add("active");
        filterMapMsk.classList.remove("active");
    });

filterMapAll &&
    (filterMapAll.onclick = () => {
        filterMapAll.classList.add("active");
        filterMapExpress.classList.remove("active");
    });

filterMapExpress &&
    (filterMapExpress.onclick = () => {
        filterMapExpress.classList.add("active");
        filterMapAll.classList.remove("active");
    });

// filterList.click();
