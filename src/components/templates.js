export const searchBar = document.createElement('template');
searchBar.innerHTML = `
<input class="search-box-container" autocomplete="off" id="search-box-input" placeholder="What do you feel like eating today?..."/>
`;

export const nextButton = document.createElement('template')
nextButton.innerHTML = `
<button class="primary-btn">
    Next
</button>
`

export const prevButton = document.createElement('template')
prevButton.innerHTML = `
<button class="primary-btn">
    Previous
</button>
`

export const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
<div class="restaurant-card">
    <img class="restaurant-image" src="https://source.unsplash.com/random/310x160/?restaurant">
    <div id="restaurant-name" class="restaurant-name"></div>
    <div class="restaurant-subheader">
        <div id="price"></div>
        <div id="food-type"></div>
        <div id="location"></div>
    </div>
    <div class="rating">
        <div id="rating" class="rating-score"></div>
        <div id="rating-stars"></div>
    </div>
</div>
`;

export const starSolid = document.createElement('template')
starSolid.innerHTML = `<i class="fas fa-star star"></i>`

export const starOutline = document.createElement('template')
starOutline.innerHTML = `<i class="far fa-star star"></i>`

export const foodFacetTemplate = document.createElement('template')
foodFacetTemplate.innerHTML = `
    <div id="food-facet">
        <div class="food-facet-text food-facet-name" id="food-facet-name"></div>
        <div class="food-facet-text" id="food-facet-count"></div>
    </div>
`;

export const resultMetaTemplate = document.createElement('template')
resultMetaTemplate.innerHTML = `
    <div class="result-count"></div>
    <div class="result-time"></div>
`

export const clearButtonTemplate = document.createElement('template')
clearButtonTemplate.innerHTML = `
    <div class="clear-button">Clear filter</div>
`

export const foodFilter = document.createElement('template')
foodFilter.innerHTML = `
    <div class="filter-container" id="food-type">
        <div class="filter-name">
            <i class="fas fa-utensils filter-icon"></i>
            <div class="filter-text">Cuisine/Food Type</div>
        </div>
        <i class="fas fa-caret-down filter-arrow"></i>
    </div>
`
