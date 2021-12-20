import {paginationTemplate} from "./templates";

export const renderPagination = () => {
    const paginationSection = document.querySelector('#pagination');
    const pagination = paginationTemplate.content.cloneNode(true);
    paginationSection.appendChild(pagination)
}
