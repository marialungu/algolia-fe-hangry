import {registerRestaurantContainer} from './src/components/restaurant-card.js'
import './main.scss'
import AlgoliaSearch from "./src/js/search";

// new AlgoliaSearch().executeSearch();
registerRestaurantContainer().render()

alert('connected')
