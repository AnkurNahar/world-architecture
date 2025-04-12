const showCards = () => {
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = ""
    const templateCard = document.querySelector(".card")

    places.forEach(place => {
        const nextCard = templateCard.cloneNode(true) // Copies template card
        editCardContent(nextCard, place) // Edits card info
        cardContainer.appendChild(nextCard) // Adds new card to the container
    })
}


const editCardContent = (card, place) => {
    card.style.display = "block"

    const cardTitle = card.querySelector(".card-title")
    cardTitle.textContent = place.name

    const cardDetail1 = card.querySelector(".country-info")
    cardDetail1.textContent = `Country: ${place.country}`

    const cardDetail2 = card.querySelector(".type-info")
    cardDetail2.textContent = place.type

    const cardDetail3 = card.querySelector(".visitors-info")
    cardDetail3.textContent = `${place.visitors} visitors`

    const cardImage = card.querySelector("img")
    cardImage.src = place.image
    cardImage.alt = `${place.name} image`
}

// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards)