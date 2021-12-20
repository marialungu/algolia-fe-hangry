import {renderRestaurantCards} from "../components/render-restaurant-cards";
import {renderRatingFacets} from "../components/render-rating-facets";
import {renderResultMeta} from "../components/render-results-meta";
import {renderFoodFacets} from "../components/render-food-facets";
import {renderPaymentFacets} from "../components/render-payment-facets";

export class RestaurantContainer {
    constructor(helper) {
        console.log('in constructor', helper)
        this.helper = helper
    }

    render() {
        const nextButton = document.getElementById('next')
        nextButton.addEventListener('click', () => {
            this.helper.nextPage().search()
        })

        const prevButton = document.getElementById('previous')
        prevButton.addEventListener('click', () => {
            this.helper.previousPage().search()
        })
        console.log('in render', this.helper)

        const ratingFacets = document.querySelector('#rating-filter')
        ratingFacets.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target;
            const attribute = target.dataset.attribute;
            const value = target.dataset.value;
            this.helper.toggleRefine(attribute,value).search();
            ratingFacets.classList.remove('open')
        });

        const foodFacets = document.querySelector('#food-filter')
        foodFacets.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target;
            const attribute = target.dataset.attribute;
            const value = target.dataset.value;
            this.helper.toggleRefine(attribute,value).search();
            foodFacets.classList.remove('open')
        });

        const paymentFacets = document.querySelector('#payment-filter')
        paymentFacets.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target;
            const attribute = target.dataset.attribute;
            const value = target.dataset.value;
            this.helper.toggleRefine(attribute,value).search();
            paymentFacets.classList.remove('open')
        });

        this.helper.on('result', function (content) {
            console.log(content)
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
            const paymentRefinedFacets = foodTypeFilterFacetValues.find(facet => facet.isRefined)
            paymentRefinedFacets ? paymentFilter.classList.add('selected') : paymentFilter.classList.remove('selected')

            renderResultMeta(content)
            renderRestaurantCards(content)
            renderRatingFacets(ratingFacetValues)
            renderFoodFacets(foodTypeFilterFacetValues)
            renderPaymentFacets(paymentFilterFacetValues)
        });
    }
}

export default RestaurantContainer
