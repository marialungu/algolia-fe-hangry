import SearchService from "../js/search";
import {searchBar} from "./templates";
import {renderRestaurantCards} from "./render-restaurant-cards";
import {renderNoResults} from "./render-no-results";
import {renderResultMeta} from "./render-results-meta";

export class SearchBar extends HTMLElement{
    constructor(props) {
        super();

        console.log(props)

        // this.algoliaSearch = new SearchService();
        //
        // this.helper = null
        // this.search = null;
        //
        // this.addEventListener('keyup', () => {
        //     this.helper.setQuery(this.getElementsByTagName('input')[0].value).search();
        // });

    }

    connectedCallback(){
        // this.helper = this.algoliaSearch.getHelper()
        // this.search = this.algoliaSearch.executeSearch()

        this.render()
    }

    render() {
        //
        // this.helper.on('result', function (content) {
        //     console.log(content)
        //     content.results.hits.length > 0 ?
        //     renderRestaurantCards(content) :
        //         renderNoResults()
        //     renderResultMeta(content)
        // });
        this.appendChild(searchBar.content.cloneNode(true));
    }

}

export const registerSearchBar = () => customElements.define('search-bar', SearchBar);
