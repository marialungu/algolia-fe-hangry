import {paymentFilter} from "./templates";

export class PaymentFilter extends HTMLElement{
    constructor() {
        super();

        this.facets = document.getElementById('payment-filter')

        this.addEventListener('click', () => {
            this.facets.classList.add('open')
        })
    }

    connectedCallback(){
        this.render()
    }

    render() {
        this.appendChild(paymentFilter.content.cloneNode(true));
    }

}

export const registerPaymentFilter = () => customElements.define('payment-filter', PaymentFilter);
