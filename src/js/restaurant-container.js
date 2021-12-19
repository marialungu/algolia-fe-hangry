import AlgoliaSearch from "./search";
import {renderRestaurantCards} from "../components/render-restaurant-cards";

export class RestaurantContainer {
    constructor() {
        this.algoliaSearch = new AlgoliaSearch();

        this.helper = this.algoliaSearch.getHelper()
        this.search = this.algoliaSearch.executeSearch();

    }

    render() {
        this.search

        this.helper.on('result', function (content) {
            renderRestaurantCards(content)
        });
        console.log('working', this.helper)
    }

}

export default RestaurantContainer
