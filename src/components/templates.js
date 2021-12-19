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
