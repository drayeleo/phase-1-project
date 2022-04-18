const starEmpty = "☆";
const starFull = "★";

function init() {
    fetch('https://api.openbrewerydb.org/breweries')
    .then(response => response.json())
    .then(breweries => {
        console.log(breweries);
        breweries.forEach(brewery => renderCard(brewery)); 
    });
}

function renderCard(brewery) {
    const cardsSection = document.querySelector('#brewery-cards')

    const divCard = document.createElement('div');

    const breweryName = document.createElement('h2');
    breweryName.classList.add('name');
    breweryName.textContent = brewery.name;
    divCard.append(breweryName);

    const rating = document.createElement('button');
    rating.classList.add('rating');
    rating.textContent = "☆☆☆☆☆";
    divCard.append(rating);

    const breweryStreet = document.createElement('p');
    breweryStreet.classList.add('street');
    breweryStreet.textContent = brewery.street;
    divCard.append(breweryStreet);

    const breweryPhone = document.createElement('p');
    breweryPhone.classList.add('address-2');
    breweryPhone.textContent = brewery.phone;
    divCard.append(breweryPhone);

    cardsSection.append(divCard);
}

init();