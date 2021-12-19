import './main.scss'
import {registerSearchBar} from "./src/components/search-bar";
import RestaurantContainer from "./src/js/restaurant-container";
import AlgoliaSearch from "./src/js/search";
//
// const success = (pos) =>  {
//     new AlgoliaSearch(pos.coords)
//     new RestaurantContainer().render()
//     registerSearchBar()
// }
//
// function error() {
//     new AlgoliaSearch()
//     new RestaurantContainer().render()
//     registerSearchBar()
// }
//
// navigator.geolocation
//     .getCurrentPosition(success, error);

new AlgoliaSearch()
new RestaurantContainer().render()
registerSearchBar()
