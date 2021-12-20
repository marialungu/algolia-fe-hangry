import { ratingFilter} from "./templates";

export class RatingFilter extends HTMLElement{
    constructor() {
        super();

        this.facets = document.querySelector('#rating-filter')
        this.addEventListener('click', () => {
            this.facets.classList.add('open')
        })
    }

    connectedCallback(){
        this.render()
    }

    render() {
        this.appendChild(ratingFilter.content.cloneNode(true));
    }
}

export const registerRatingFilter = () => customElements.define('rating-filter', RatingFilter);
