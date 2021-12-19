import AlgoliaSearch from "./search";
import {renderRestaurantCards} from "../components/render-restaurant-cards";
import {foodFacetTemplate} from "../components/templates";

const renderFacets = (content) => {
    // We use the disjunctive facets attribute.
    const facetValues = content.results.getFacetValues('food_type');

    console.log(facetValues)

    const facets = document.querySelector('#facets');
    const allElements = (elements) => {
        elements.map(facet => {
            console.log(facet)
            if(facet.count > 4) {
                const restaurantClone = foodFacetTemplate.content.cloneNode(true);
                const name = restaurantClone.querySelector('#food-facet-name');
                const count = restaurantClone.querySelector('#food-facet-count');
                name.textContent = facet.name
                count.textContent = facet.count
                facets.appendChild(restaurantClone)
            }

        })
    }

    allElements(facetValues)

}


export class RestaurantContainer {
    constructor() {
        this.algoliaSearch = new AlgoliaSearch();

        this.helper = this.algoliaSearch.getHelper()
        this.search = this.algoliaSearch.executeSearch();
    }

    render() {
        this.search;

        const foodFilter = document.getElementById('food-type')
        const facets = document.getElementById('facets')
        foodFilter.addEventListener('click', () => {
            facets.classList.add('open')
        })

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
            renderFacets(content)
        });
    }

}

export default RestaurantContainer
