import SearchService from "./search";
import {renderRestaurantCards} from "../components/render-restaurant-cards";
import {renderRatingFacets} from "../components/render-rating-facets";
import {renderResultMeta} from "../components/render-results-meta";

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
            console.log(target, value)
            this.helper.toggleRefine(attribute,value).search();
            ratingFacets.classList.remove('open')
        });

        this.helper.on('result', function (content) {
            console.log('here', content)
            const ratingFilter = document.querySelector('#rating-facet')
            const ratingFacetValues = content.results.getFacetValues('rounded_stars_count');

            const findRatingRefinedFacets = ratingFacetValues.find(facet => facet.isRefined)

            findRatingRefinedFacets ? ratingFilter.classList.add('selected') : ratingFilter.classList.remove('selected')
            renderResultMeta(content)
            renderRestaurantCards(content)
            renderRatingFacets(ratingFacetValues)
        });
    }

}

export default RestaurantContainer
