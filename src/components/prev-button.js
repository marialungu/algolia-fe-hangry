import SearchService from "../js/search";
import {prevButton} from "./templates";
import {renderRestaurantCards} from "./render-restaurant-cards";
import {renderNoResults} from "./render-no-results";

export class PrevButton extends HTMLElement{
    constructor() {
        super();

        this.algoliaSearch = new SearchService();

        this.helper = null
        this.search = null;

        this.addEventListener('click', () => {
            console.log(this)
            console.log('prev', this.helper.getPage())
            this.helper.previousPage().search()
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
        this.appendChild(prevButton.content.cloneNode(true));
    }

}

export const registerPrevButton = () => customElements.define('prev-button', PrevButton);
