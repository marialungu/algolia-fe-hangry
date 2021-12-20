import {foodFacetTemplate} from "./templates";

export const renderFoodFacets = (facetValues) => {
    const facets = document.querySelector('#facets');
    facets.innerHTML = ''

    const allElements = (elements) => {
        elements.map(facet => {
            if(facet.count > 4) {
                const restaurantClone = foodFacetTemplate.content.cloneNode(true);
                const name = restaurantClone.querySelector('#food-facet-name');
                const count = restaurantClone.querySelector('#food-facet-count');
                const container = restaurantClone.querySelector('#food-facet');
                container.dataset.attribute = 'food-type'
                container.dataset.value = facet.name
                name.dataset.attribute = 'food_type'
                name.dataset.value = facet.name
                count.textContent = facet.count
                name.textContent = facet.name

                const facetClasses = facet.isRefined ? 'food-facet selected' : 'food-facet'

                container.setAttribute('class', facetClasses)

                facets.appendChild(restaurantClone)
            }

        })
    }
    allElements(facetValues)
}
