import {resultMetaTemplate} from "./templates";

export const renderResultMeta = (content) => {
    const resultMetaSection = document.querySelector('#result-meta');
    const allElements = (results) => {
        const resultMeta = resultMetaTemplate.content.cloneNode(true);
        const time = resultMeta.querySelector('.result-time');
        const count = resultMeta.querySelector('.result-count');
        time.textContent = `in ${((results.processingTimeMS)/1000).toString()} seconds`
        count.textContent = `${results.nbHits} results found`
        resultMetaSection.innerHTML = '';
        resultMetaSection.appendChild(resultMeta)
    }
    allElements(content.results)
}
