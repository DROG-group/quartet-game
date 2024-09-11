export function getRandomCard(cardsArray) {
    const randomIndex = Math.floor(Math.random() * cardsArray.length);
    return cardsArray[randomIndex];
}
