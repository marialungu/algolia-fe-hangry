import './main.scss'
import {registerSearchBar} from "./src/components/search-bar";
import RestaurantContainer from "./src/js/restaurant-container";
import SearchService from "./src/js/search";
import {registerFoodTypeFilter} from "./src/components/food-type-filter";
import {registerRatingFilter} from "./src/components/rating-filter";
import {registerPaymentFilter} from "./src/components/payment-filter";
import {registerClearAll} from "./src/components/clear-all-button";

let searchService = null

const handleGeolocation = (coordinates) => {
    searchService = new SearchService({coordinates: coordinates})
    const helper = searchService.getHelper();
    globalThis.helper = helper;

    helper.search()

    new RestaurantContainer(helper).render()
    registerSearchBar()
    registerRatingFilter()
    registerFoodTypeFilter()
    registerPaymentFilter()
    registerClearAll()

    document.addEventListener('click', function(event) {
        const foodFilter = document.querySelector('#food-type')
        const foodFacets = document.querySelector('#food-filter')
        const isClickInside = foodFilter.contains(event.target);

        if (!isClickInside) {
            foodFacets.classList.remove('open')
        }
    });

    document.addEventListener('click', function(event) {
        const ratingFilter = document.querySelector('#rating-facet')
        const ratingFacets = document.querySelector('#rating-filter')
        const isClickInside = ratingFilter.contains(event.target);

        if (!isClickInside) {
            ratingFacets.classList.remove('open')
        }
    });

    document.addEventListener('click', function(event) {
        const paymentFilter = document.querySelector('#payment-facet')
        const paymentFacets = document.querySelector('#payment-filter')
        const isClickInside = paymentFilter.contains(event.target);

        if (!isClickInside) {
            paymentFacets.classList.remove('open')
        }
    });
}

const handleSuccess = (pos) =>  {
    const coordinates = `${pos.coords.latitude}, ${pos.coords.longitude}`
    handleGeolocation(coordinates)
}

function handleError() {
    const coord = null
    handleGeolocation(coord)
}

navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
