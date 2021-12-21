export const renderNoResults = () => {
    const noResults = document.createElement('div')
    noResults.setAttribute('class', 'no-results')
    noResults.innerHTML = `
        <img class="no-results-img" src="./images/icn-no-results.png">
        <div class="no-results-text">Ooops... looks like there were no restaurants found</div>
    `
    const elementsContainer = document.querySelector('#container');
    elementsContainer.innerHTML = '';
    elementsContainer.appendChild(noResults)
}
