import './main.scss'
import {registerSearchBar} from "./src/components/search-bar";
import RestaurantContainer from "./src/js/restaurant-container";
import SearchService from "./src/js/search";
import {registerFoodTypeFilter} from "./src/components/food-type-filter";
import {registerRatingFilter} from "./src/components/rating-filter";
import {registerPaymentFilter} from "./src/components/payment-filter";
//

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
}

const handleSuccess = (pos) =>  {
    console.log(pos)
    const coordinates = `${pos.coords.latitude}, ${pos.coords.longitude}`
    handleGeolocation(coordinates)
}

function handleError() {
    const coord = null
    handleGeolocation(coord)
}

navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
