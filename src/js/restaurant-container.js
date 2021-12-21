import {renderRestaurantCards} from "../components/render-restaurant-cards";
import {renderRatingFacets} from "../components/render-rating-facets";
import {renderResultMeta} from "../components/render-results-meta";
import {renderFoodFacets} from "../components/render-food-facets";
import {renderPaymentFacets} from "../components/render-payment-facets";
import {renderNoResults} from "../components/render-no-results";

export class RestaurantContainer {
    constructor(helper) {
        this.helper = helper
    }

    render() {
        const clearAll = document.querySelector('.clear-all-button')
        const nextButton = document.getElementById('next')
        nextButton.addEventListener('click', () => {
            this.helper.nextPage().search()
        })

        const prevButton = document.getElementById('previous')
        prevButton.addEventListener('click', () => {
            this.helper.previousPage().search()
        })

        const ratingFacets = document.querySelector('#rating-filter')
        ratingFacets.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target;
            const attribute = target.dataset.attribute;
            const value = target.dataset.value;
            this.helper.toggleRefine(attribute,value).search();
            ratingFacets.classList.remove('open');
            this.helper.hasRefinements('rounded_stars_count') ?
                clearAll.classList.remove('is-disabled') :
                clearAll.classList.add('is-disabled')
        });

        const foodFacets = document.querySelector('#food-filter')
        foodFacets.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target;
            const attribute = target.dataset.attribute;
            const value = target.dataset.value;
            this.helper.toggleRefine(attribute,value).search();
            foodFacets.classList.remove('open')
            this.helper.hasRefinements('food_type') ?
                clearAll.classList.remove('is-disabled') :
                clearAll.classList.add('is-disabled')
        });

        const paymentFacets = document.querySelector('#payment-filter')
        paymentFacets.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target;
            const attribute = target.dataset.attribute;
            const value = target.dataset.value;
            this.helper.toggleRefine(attribute,value).search();
            paymentFacets.classList.remove('open');
            this.helper.hasRefinements('payment_options') ?
                clearAll.classList.remove('is-disabled') :
                clearAll.classList.add('is-disabled')
        });

        this.helper.on('result', function (content) {
            const paginationContainer = document.querySelector('#pagination')
            const resultsMeta = document.querySelector('#result-meta')

            const ratingFilter = document.querySelector('#rating-facet')
            const ratingFacetValues = content.results.getFacetValues('rounded_stars_count');
            const findRatingRefinedFacets = ratingFacetValues.find(facet => facet.isRefined)
            findRatingRefinedFacets ? ratingFilter.classList.add('selected') : ratingFilter.classList.remove('selected')

            const foodTypeFilter = document.querySelector('#food-type')
            const foodTypeFilterFacetValues = content.results.getFacetValues('food_type');
            const findFoodTypeRefinedFacets = foodTypeFilterFacetValues.find(facet => facet.isRefined)
            findFoodTypeRefinedFacets ? foodTypeFilter.classList.add('selected') : foodTypeFilter.classList.remove('selected')

            const paymentFilter = document.querySelector('#payment-facet')
            const paymentFilterFacetValues = content.results.getFacetValues('payment_options');
            const paymentRefinedFacets = paymentFilterFacetValues.find(facet => facet.isRefined)
            paymentRefinedFacets ? paymentFilter.classList.add('selected') : paymentFilter.classList.remove('selected')

            if  (content.results.hits.length > 0) {
                renderResultMeta(content)
                renderRestaurantCards(content)
                renderRatingFacets(ratingFacetValues)
                renderFoodFacets(foodTypeFilterFacetValues)
                renderPaymentFacets(paymentFilterFacetValues)
                paginationContainer.classList.remove('no-display')
            } else {
                resultsMeta.innerHTML = ''
                paginationContainer.classList.add('no-display')
                renderNoResults()
            }
        });
    }
}

export default RestaurantContainer
