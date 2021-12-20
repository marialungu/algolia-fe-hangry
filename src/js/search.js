const applicationID = '7PKCLB5WKZ';
const apiKey = '253e1b38b67534943884ddee5c7bc2d7';
const index = 'fe_restaurants';

export class AlgoliaSearch {
    constructor(coordinates) {
        console.log(coordinates)
        const client = algoliasearch(applicationID, apiKey);
        this.helper = algoliasearchHelper(client, index, {
            // aroundLatLng: coordinates,
            page: 0,
            disjunctiveFacets: ['food_type', 'rounded_stars_count', 'payment_options']
        });
    }

    addOptions = (coordinates) => {
        console.log(coordinates)
        this.helper.setQueryParameter('aroundLatLng', coordinates);
        console.log(this.helper)
        this.helper.search()
    }

    executeSearch = () => {
        this.helper.search();
    }

    getHelper = () => {
        return this.helper
    }

}

export default AlgoliaSearch

