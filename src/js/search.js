const applicationID = '7PKCLB5WKZ';
const apiKey = '253e1b38b67534943884ddee5c7bc2d7';
const index = 'fe_restaurants';

export class SearchService {
    constructor() {
        const client = algoliasearch(applicationID, apiKey);
        this.helper = algoliasearchHelper(client, index, {
            page: 0,
            disjunctiveFacets: ['food_type', 'rounded_stars_count', 'payment_options']
        });
    }

    executeSearch = () => {
        this.helper.search();
    }

    getHelper = () => {
        return this.helper
    }

}

export default SearchService

