import {paymentFacetTemplate} from "./templates";

export const renderPaymentFacets = (facetValues) => {
    const facets = document.querySelector('#payment-filter');
    facets.innerHTML = ''

    const paymentFilterValuesToRender = facetValues.filter((facet) => ['AMEX', 'Visa', 'MasterCard', 'Discover'].includes(facet.name))

    const allElements = (elements) => {
        elements.map(facet => {
            const paymentClone = paymentFacetTemplate.content.cloneNode(true);
            const name = paymentClone.querySelector('#payment-facet-name');
            const container = paymentClone.querySelector('#payment-item-facet');
            container.dataset.attribute = 'payment_options'
            container.dataset.value = facet.name
            name.dataset.attribute = 'payment_options'
            name.dataset.value = facet.name
            name.textContent = facet.name
            const facetClasses = facet.isRefined ? 'payment-filter-item selected' : 'payment-filter-item'
            container.setAttribute('class', facetClasses)
            facets.appendChild(paymentClone)
        })
    }
    allElements(paymentFilterValuesToRender)
}
