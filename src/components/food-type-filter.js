import SearchService from "../js/search";
import {foodFilter} from "./templates";
import {renderRestaurantCards} from "./render-restaurant-cards";
import {renderResultMeta} from "./render-results-meta";
import {renderFoodFacets} from "./render-food-facets";
import {renderRatingFacets} from "./render-rating-facets";

export class FoodTypeFilter extends HTMLElement{
    constructor() {
        super();

        this.algoliaSearch = new SearchService();

        this.helper = null
        this.search = null;

        this.facets = document.getElementById('food-filter')

        this.addEventListener('click', () => {
            this.facets.classList.add('open')
        })

    }

    connectedCallback(){
        this.helper = this.algoliaSearch.getHelper()
        this.search = this.algoliaSearch.executeSearch()

        this.render()
    }

    render() {

        this.facets.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target;
            const attribute = target.dataset.attribute;
            const value = target.dataset.value;
            this.helper.toggleRefine(attribute,value).search();
            this.facets.classList.remove('open')
        });

        this.helper.on('result', function (content) {
            const filter = document.querySelector('#food-type')
            const facetValues = content.results.getFacetValues('food_type');
            const findFacets = facetValues.find(facet => facet.isRefined)

            findFacets ? filter.classList.add('selected') : filter.classList.remove('selected')

            renderRestaurantCards(content)
            renderResultMeta(content)
            renderFoodFacets(facetValues)
        });

        this.appendChild(foodFilter.content.cloneNode(true));
    }

}

export const registerFoodTypeFilter = () => customElements.define('food-type-filter', FoodTypeFilter);
