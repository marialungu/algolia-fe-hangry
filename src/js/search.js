const applicationID = '7PKCLB5WKZ';
const apiKey = '253e1b38b67534943884ddee5c7bc2d7';
const index = 'fe_restaurants';

const getOptions = (coordinates) => {
    const options = {
        page: 0,
        disjunctiveFacets: ['food_type', 'rounded_stars_count', 'payment_options']
    }
    coordinates ? options.aroundLatLng = coordinates : options.aroundLatLngViaIP = true

    return options;

}

export class SearchService {
    constructor(props) {
        const options = getOptions(props.coordinates)
        console.log(options)
        const client = algoliasearch(applicationID, apiKey);
        this.helper = algoliasearchHelper(client, index, options);
    }

    executeSearch = () => {
        this.helper.search();
    }

    getHelper = () => {
        return this.helper
    }

}

export default SearchService

