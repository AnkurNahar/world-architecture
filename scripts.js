const showCards = ( placesToDisplay = places ) => {
    const cardContainer = document.getElementById( "card-container" )
    cardContainer.innerHTML = ""
    const templateCard = document.querySelector( ".card" )

    placesToDisplay.forEach( place => {
        const nextCard = templateCard.cloneNode( true ) // Copies template card
        editCardContent( nextCard, place ) // Edits card info
        cardContainer.appendChild( nextCard ) // Adds new card to the container
    } )
}


const editCardContent = ( card, place ) => {
    card.style.display = "block"

    const cardTitle = card.querySelector( ".card-title" )
    cardTitle.textContent = place.name

    const cardDetail1 = card.querySelector( ".country-info" )
    cardDetail1.textContent = `Country: ${place.country}`

    const cardDetail2 = card.querySelector( ".type-info" )
    cardDetail2.textContent = place.type

    const cardDetail3 = card.querySelector( ".visitors-info" )
    cardDetail3.textContent = `${place.visitors} visitors`

    const cardImage = card.querySelector( "img" )
    cardImage.src = place.image
    cardImage.alt = `${place.name} image`
}

// This calls the showCards() function when the page is first loaded
document.addEventListener( "DOMContentLoaded", showCards )

const searchPlaces = ( queryString ) => {
    try {

        let search = queryString
        if( queryString.length > 3 )
            search = queryString.toLowerCase()
        else return

        const matches = places.filter( ( place ) => {
            place.name.toLowerCase().includes( search ) ||
            place.country.toLowerCase().includes( search ) ||
            place.type.toLowerCase().includes( search )
        })

        //const matchedPlaceNames = matches.map( place => place.name )
        return matches
        
    } catch ( error ) {
        console.log( error )        
    }
}

const sortPlacesAlphabetically = () => {
    try {        
        let sortedPlaces = [...places]
        sortedPlaces.sort()
        return sortedPlaces
    } catch ( error ) {
        console.log( error )
    }
}

const sortPlacesOnVisitorCount = () => {
    try {        
        let sortedPlaces = [...places]
        sortedPlaces.sort((a, b) => b.visitors - a.visitors)
        return sortedPlaces
    } catch ( error ) {
        console.log( error )
    }
}

