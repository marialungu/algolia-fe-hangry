import AlgoliaSearch from "../js/search";
import {nextButton} from "./templates";
import {renderRestaurantCards} from "./render-restaurant-cards";
import {renderNoResults} from "./render-no-results";

export class NextButton extends HTMLElement{
    constructor() {
        super();

        this.algoliaSearch = new AlgoliaSearch();

        this.helper = null
        this.search = null;

        this.addEventListener('click', () => {
            console.log('next', this.helper.getPage())

            this.helper.nextPage().search()
        });

    }

    connectedCallback(){
        this.helper = this.algoliaSearch.getHelper()
        this.search = this.algoliaSearch.executeSearch()

        this.render()
    }

    render() {
        this.helper.on('result', function (content) {
            content.results.hits.length > 0 ?
                renderRestaurantCards(content) :
                renderNoResults()
        });
        this.appendChild(nextButton.content.cloneNode(true));
    }

}

export const registerNextButton = () => customElements.define('next-button', NextButton);
