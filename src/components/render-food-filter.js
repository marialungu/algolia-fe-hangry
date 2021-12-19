import {foodFacetTemplate} from "./templates";

export const renderFoodFacets = (content) => {
    const facetValues = content.results.getFacetValues('food_type');

    const facets = document.querySelector('#facets');
    const allElements = (elements) => {
        elements.map(facet => {
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
