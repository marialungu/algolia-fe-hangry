import { restaurantCardsContainer } from '../components/restaurant-card'

const applicationID = '7PKCLB5WKZ';
const apiKey = '253e1b38b67534943884ddee5c7bc2d7';
const index = 'fe_restaurants';
//
// class Hello {
//     constructor(config) {
//         this.target = config.target;
//         console.log('here')
//     }
//
//     run() {
//         console.log('here')
//         this.target.innerHTML = `
//       <p>
//         Hello from ES2015
//       </p>
//     `;
//     }
// }
//
// export default Hello

export class SearchContainer {
    constructor() {
        // super();
        console.log('here')
        this.searchBar = '';
        this.container = '';
        const client = algoliasearch(applicationID, apiKey);
        this.helper = algoliasearchHelper(client, index);

        // this.container = new restaurantCardsContainer()
    }

    connectedCallback() {
        this.searchBar = this.querySelector("#search-box-input");
        this.container = this.querySelector("#main");

        this.renderResults()
    }

    onSearch(){
        this.searchBar.addEventListener('keyup', () => {
            this.helper.setQuery(this.searchBar.value).search();
        });
    }

    renderResults() {
        this.helper.search();
        console.log('here')

        this.helper.on('result', function(content) {
            console.log(content);
        });
    }
}

export default SearchContainer

// export const Search = () => customElements.define('algolia-search', SearchContainer);
