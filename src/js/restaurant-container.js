import SearchService from "./search";
import {renderRestaurantCards} from "../components/render-restaurant-cards";

export class RestaurantContainer {
    constructor(helper) {
        // this.algoliaSearch = new SearchService();

        console.log('in constructor', helper)
        this.helper = helper
        // this.search = this.algoliaSearch.executeSearch();
    }

    render() {
        // this.search;
        //
        // const nextButton = document.getElementById('next')
        // nextButton.addEventListener('click', () => {
        //     this.helper.nextPage().search()
        // })
        //
        // const prevButton = document.getElementById('previous')
        // prevButton.addEventListener('click', () => {
        //     this.helper.previousPage().search()
        // })
        console.log('in render', this.helper)
        // this.helper.search()


        this.helper.on('result', function (content) {
            console.log('here', content)
            renderRestaurantCards(content)
        });
    }

}

export default RestaurantContainer
