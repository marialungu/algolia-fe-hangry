// import { test, Search } from "./src/js/search.js"
import { restaurantCardsContainer } from "./src/components/restaurant-card.js"

/**
 * Main application element, simply registers the web components
//  */
import SearchContainer from './src/js/search.js'
import './main.scss'

(new SearchContainer({
})).renderResults()

alert('connected')
