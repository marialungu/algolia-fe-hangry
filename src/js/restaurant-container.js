import AlgoliaSearch from "./search";
import {renderRestaurantCards} from "../components/render-restaurant-cards";

export class RestaurantContainer {
    constructor() {
        this.algoliaSearch = new AlgoliaSearch();

        this.helper = this.algoliaSearch.getHelper()
        this.search = this.algoliaSearch.executeSearch();
    }

    render() {
        this.search;

        const nextButton = document.getElementById('next')
        nextButton.addEventListener('click', () => {
            this.helper.nextPage().search()
        })

        const prevButton = document.getElementById('previous')
        prevButton.addEventListener('click', () => {
            this.helper.previousPage().search()
        })


        this.helper.on('result', function (content) {
            renderRestaurantCards(content)
        });
    }

}

export default RestaurantContainer
