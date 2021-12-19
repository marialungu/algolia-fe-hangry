import AlgoliaSearch from "../js/search";
import {searchBar} from "./templates";
import {renderRestaurantCards} from "./render-restaurant-cards";
import {renderNoResults} from "./render-no-results";

export class SearchBar extends HTMLElement{
    constructor() {
        super();

        this.algoliaSearch = new AlgoliaSearch();

        this.helper = null
        this.search = null;

        this.addEventListener('keyup', () => {
            this.helper.setQuery(this.getElementsByTagName('input')[0].value).search();
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
        this.appendChild(searchBar.content.cloneNode(true));
    }

}

export const registerSearchBar = () => customElements.define('search-bar', SearchBar);
