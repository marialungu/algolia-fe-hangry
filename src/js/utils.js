export const generateStarRating = (starType, parentNode, conditionCeil) => {
    for (let star = 0; star < conditionCeil; star++) {
        const starClone = starType.content.cloneNode(true);
        parentNode.appendChild(starClone)
    }
}
