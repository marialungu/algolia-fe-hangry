import {ratingFacetTemplate} from "./templates";

export const renderRatingFacets = (facetValues) => {
    const facets = document.querySelector('#rating-filter');
    facets.innerHTML = ''

    const allElements = (elements) => {
        elements.map(facet => {
            const ratingClone = ratingFacetTemplate.content.cloneNode(true);
            const name = ratingClone.querySelector('#rating-facet-name');
            const container = ratingClone.querySelector('#rating-item-facet');
            container.dataset.attribute = 'rounded_stars_count'
            container.dataset.value = facet.name
            name.dataset.attribute = 'rounded_stars_count'
            name.dataset.value = facet.name
            name.textContent = facet.name

            const facetClasses = facet.isRefined ? 'rating-filter-score selected' : 'rating-filter-score'

            container.setAttribute('class', facetClasses)

            facets.appendChild(ratingClone)

        })
    }
    allElements(facetValues)
}
