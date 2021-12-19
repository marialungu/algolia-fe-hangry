const applicationID = '7PKCLB5WKZ';
const apiKey = '253e1b38b67534943884ddee5c7bc2d7';
const index = 'fe_restaurants';

export class AlgoliaSearch {
    constructor() {
        const client = algoliasearch(applicationID, apiKey);
        this.helper = algoliasearchHelper(client, index);
    }

    executeSearch = () => {
        this.helper.search();
    }

    getHelper = () => {
        return this.helper
    }

}

export default AlgoliaSearch

