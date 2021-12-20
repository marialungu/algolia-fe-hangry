import './main.scss'
import {registerSearchBar} from "./src/components/search-bar";
import RestaurantContainer from "./src/js/restaurant-container";
import SearchService from "./src/js/search";
import {registerFoodTypeFilter} from "./src/components/food-type-filter";
import {registerRatingFilter} from "./src/components/rating-filter";
import {registerPaymentFilter} from "./src/components/payment-filter";
//

let searchService = null;

const success = (pos) =>  {
    const coordinates = `${pos.coords.latitude}, ${pos.coords.longitude}`
    searchService = new SearchService({coordinates: coordinates})
    const helper = searchService.getHelper();
    helper.search();
    new RestaurantContainer(helper).render()
}

function error() {
    searchService = new SearchService({coordinates: null})
    const helper = searchService.getHelper();
    helper.search();

    new RestaurantContainer(helper).render()
    registerSearchBar()
}

navigator.geolocation.getCurrentPosition(success, error);


// const searchService = new SearchService();

// restaurant.render()
// registerSearchBar()
// registerFoodTypeFilter()
// registerRatingFilter()
// registerPaymentFilter()
