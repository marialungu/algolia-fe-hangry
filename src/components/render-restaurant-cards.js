import {cardTemplate, starOutline, starSolid} from "./templates";
import {generateStarRating} from "../js/utils";

export const renderRestaurantCards = (content) => {
    const hits = window._.get(content, ['results', 'hits'])
    const elementsList = document.createElement('div')
    elementsList.setAttribute('class', 'search-result')
    const allElements = (elements) => {
        elements.map(hit => {
            const restaurantClone = cardTemplate.content.cloneNode(true);
            const name = restaurantClone.querySelector('#restaurant-name');
            const price = restaurantClone.querySelector('#price');
            const foodType = restaurantClone.querySelector('#food-type');
            const location = restaurantClone.querySelector('#location');
            const rating = restaurantClone.querySelector('#rating');
            const ratingStars = restaurantClone.querySelector('#rating-stars');

            generateStarRating(starSolid, ratingStars, hit.rounded_stars_count)
            generateStarRating(starOutline, ratingStars, 5 - hit.rounded_stars_count)
            name.textContent = hit.name
            price.textContent = hit.price_range
            foodType.textContent = hit.food_type
            location.textContent = hit.neighborhood
            rating.textContent = hit.stars_count

            elementsList.appendChild(restaurantClone)
        })
        const elementsContainer = document.querySelector('#container');
        elementsContainer.innerHTML = '';
        elementsContainer.appendChild(elementsList)
    }
    allElements(hits)
}
