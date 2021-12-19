import { restaurantsContainer } from '../components/restaurant-card'

const applicationID = '7PKCLB5WKZ';
const apiKey = '253e1b38b67534943884ddee5c7bc2d7';
const index = 'fe_restaurants';

// export class Test {
//     constructor() {
//         this.test = 'test'
//     }
//
//     getTest = () => {
//         return this.test
//     }
// }
//
// export default Test

export class AlgoliaSearch {
    constructor() {
        // super();
        console.log('here')
        // this.searchBar = '';
        // this.container = '';
        const client = algoliasearch(applicationID, apiKey);
        this.helper = algoliasearchHelper(client, index);

    }

    executeSearch = () => {

        // console.log(this.helper)
        this.helper.search();

        // this.helper.on('result', function(content) {
        //     console.log('now empty', content);
        // });
        console.log('i executed')
    }

    getHelper = () => {
        return this.helper
    }

    // onSearch(){
    //     this.searchBar.addEventListener('keyup', () => {
    //         this.helper.setQuery(this.searchBar.value).search();
    //     });
    // }

}

export default AlgoliaSearch

