import {searchBar} from "./templates";

export class SearchBar extends HTMLElement{
    constructor() {
        super();

        this.helper = window.helper

        this.addEventListener('keyup', () => {
            this.helper.setQuery(this.getElementsByTagName('input')[0].value).search();
        });
    }

    connectedCallback(){
        this.render()
    }

    render() {
        this.appendChild(searchBar.content.cloneNode(true));
    }

}

export const registerSearchBar = () => customElements.define('search-bar', SearchBar);
