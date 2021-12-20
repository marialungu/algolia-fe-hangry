import './main.scss'
import {registerSearchBar} from "./src/components/search-bar";
import RestaurantContainer from "./src/js/restaurant-container";
import AlgoliaSearch from "./src/js/search";
import {registerFoodTypeFilter} from "./src/components/food-type-filter";
import {registerRatingFilter} from "./src/components/rating-filter";
import {registerPaymentFilter} from "./src/components/payment-filter";
//
// const success = (pos) =>  {
//     const coordinates = `${pos.coords.latitude}, ${pos.coords.longitude}`
//     new AlgoliaSearch(coordinates)
//     new RestaurantContainer().render()
//     console.log('i rendered')
// }
//
// function error() {
//
// }
//
// navigator.geolocation
//     .getCurrentPosition(success, error);

// new AlgoliaSearch()
new RestaurantContainer().render()
registerSearchBar()
registerFoodTypeFilter()
registerRatingFilter()
registerPaymentFilter()
