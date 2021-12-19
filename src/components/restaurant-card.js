const cardTemplate = document.createElement('template');

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

export class RestaurantContainer extends HTMLElement {
    constructor(){
        super();
        // this.appendChild(cardTemplate.content.cloneNode(true));
    }

    renderItems(content){
        console.log(content)
    }

    renderCard(hit, ){
        const restaurantClone = cardTemplate.content.cloneNode(true);
        const name = restaurantClone.querySelector('#restaurant-name');
        const price = restaurantClone.querySelector('#price');
        const foodType = restaurantClone.querySelector('#food-type');
        const location = restaurantClone.querySelector('#location');
        const rating = restaurantClone.querySelector('#rating');
        // const ratingStars = restaurantClone.querySelector('#rating-stars');

        // generateStarRating(starSolid, ratingStars, hit.rounded_stars_count)
        // generateStarRating(starOutline, ratingStars, 5 - hit.rounded_stars_count)
        name.textContent = hit.name
        price.textContent = hit.price_range
        foodType.textContent = hit.food_type
        location.textContent = hit.neighborhood
        rating.textContent = hit.stars_count

        // elementsList.appendChild(restaurantClone)
    }
}

export const restaurantCardsContainer = () => customElements.define('restaurant-card', RestaurantContainer);
