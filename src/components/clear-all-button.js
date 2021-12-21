import {clearButtonTemplate} from "./templates";

export class ClearAllButton extends HTMLElement{
    constructor() {
        super();

        this.helper = window.helper

        this.addEventListener('click', () => {
            this.helper.clearRefinements().search();
            this.classList.add('is-disabled')
        });
    }

    connectedCallback(){
        this.classList.add('is-disabled')
        this.render()
    }

    render() {
        console.log()
        this.appendChild(clearButtonTemplate.content.cloneNode(true));
    }

}

export const registerClearAll = () => customElements.define('clear-all', ClearAllButton);
