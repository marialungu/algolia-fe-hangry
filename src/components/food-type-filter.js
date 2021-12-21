import {foodFilter} from "./templates";

export class FoodTypeFilter extends HTMLElement{
    constructor() {
        super();

        this.facets = document.querySelector('#food-filter')
        this.addEventListener('click', () => {
            this.facets.classList.contains('open') ?
                this.facets.classList.remove('open') :
                this.facets.classList.add('open')

        })
    }

    connectedCallback(){
        this.render()
    }

    render() {
        this.appendChild(foodFilter.content.cloneNode(true));
    }
}

export const registerFoodTypeFilter = () => customElements.define('food-type-filter', FoodTypeFilter);
