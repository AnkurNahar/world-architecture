const showCards = ( placesToDisplay ) => {
    //console.log(placesToDisplay)
    
    const cardContainer = document.getElementById( "card-container" )
    cardContainer.innerHTML = ""
    const templateCard = document.querySelector( ".card" )

    placesToDisplay.forEach( place => {
        const nextCard = templateCard.cloneNode( true ) // Copies template card
        editCardContent( nextCard, place ) // Edits card info
        nextCard.addEventListener("click", () => { // Event listener to display details modal
            showPlaceModal( place )
        })
        cardContainer.appendChild( nextCard ) // Adds new card to the container
    } )
}


const editCardContent = ( card, place ) => {
    card.style.display = "block"
    card.dataset.placeId = place.id

    const heart = card.querySelector( ".heart" )
    const isFave = favorites.includes( place.id )
    heart.style.display = isFave ? "block" : "none"
    
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


document.addEventListener( "DOMContentLoaded", () => { 
    showCards( places ) 

    const home = document.getElementById( "home" )
    const faves = document.getElementById( "faves" )
    const searchBar = document.getElementById( "searchWrapper" )
    const noFaves = document.getElementById( "noFavorites" )

    home.addEventListener( "click", ( event ) => {
        event.preventDefault()
        currentPage = 'home'
        noFaves.style.display = "none"
        searchBar.style.display = "block"
        showCards( places )
    })

    faves.addEventListener( "click", ( event ) => {
        event.preventDefault()
        currentPage = 'favorites'
        searchBar.style.display = "none"
        let favoritePlaces = places.filter( place => favorites.includes( place.id ) )

        if ( favoritePlaces.length > 0 ) {
            noFaves.style.display = "none"
        } else {
            noFaves.style.display = "block"
        }
        showCards( favoritePlaces )

    })

} )


// ---Place details modal start---
const showPlaceModal = ( place ) => {
    document.getElementById( "modalTitle" ).textContent = place.name
    document.getElementById( "modalCountry" ).textContent = `Country: ${place.country}`
    document.getElementById( "modalType" ).textContent = `${place.type}`
    document.getElementById( "modalVisitors" ).textContent = `${place.visitors} visitors`
    document.getElementById( "modalImage" ).src = place.image
    document.getElementById( "modalImage" ).alt = `${place.name} image`  
    document.getElementById( "modalDetails" ).textContent = place.details


    // deciding what to show when modal opened
    let isFave = favorites.includes( place.id )
    const favoriteButton = document.getElementById("favoriteButton")
    if ( isFave ) {
        favoriteButton.textContent = "Remove from Favorites"
    } else {
        favoriteButton.textContent = "Add to Favorites"
    }

    favoriteButton.onclick = () => { 
        isFave = favorites.includes( place.id )
        if ( isFave ) {
            deleteFromFavorites( place.id ) 
            favoriteButton.textContent = "Add to Favorites"
        } else {
            addToFavorites( place ) 
            favoriteButton.textContent = "Remove from Favorites"
        } 
        showCards( places )       
    }

    document.getElementById( "placeModal" ).style.display = "block"
}
  
document.getElementById( "closeModal" ).addEventListener( "click", () => {
    document.getElementById( "placeModal" ).style.display = "none"
})
  
window.addEventListener( "click", ( event ) => {
    const modal = document.getElementById( "placeModal" )
    if ( event.target === modal ) {
      modal.style.display = "none"
    }
})

// ---Place details modal end---

// ---Favorites implementation start--


const addToFavorites = ( place ) => {
    try {        
        favorites.push( place.id )
        alert( `${place.name} added to favorites!` )        
    } catch (error) {
        console.log( error )       
    }
}

const deleteFromFavorites = ( faveID ) => {
    try {        
        const index = favorites.indexOf( faveID )
        favorites.splice( index, 1 )
        alert( "Removed from favorites" )
    } catch ( error ) {
        console.log( error )
    }
}

// ---Favorites implementation end---


// ---Sort and Search functions start---

const searchPlaces = ( event ) => {
    try {

        // to prevent page reload onsubmit
        event.preventDefault()

        const queryString = event.target.query.value.trim().toLowerCase()
        //console.log( queryString )

        const matches = places.filter( ( place ) => {
            return (
                place.name.toLowerCase().includes( queryString ) ||
                place.country.toLowerCase().includes( queryString ) ||
                place.type.toLowerCase().includes( queryString )
            )
        })

        showCards( matches )
        
    } catch ( error ) {
        console.log( error )        
    }
}

const sortPlacesAlphabetically = () => {
    try {        
        let sortedPlaces = currentPage == "home" ? [...places] : places.filter( place => favorites.includes( place.id ) )
        sortedPlaces.sort( ( place1, place2 ) => {return place1.name.localeCompare(place2.name)} )
        showCards( sortedPlaces )
        //console.log( sortedPlaces )
    } catch ( error ) {
        console.log( error )
    }
}

const sortPlacesOnVisitorCount = () => {
    try {        
        let sortedPlaces = currentPage == "home" ? [...places] : places.filter( place => favorites.includes( place.id ) )
        sortedPlaces.sort((a, b) => b.visitors - a.visitors)
        showCards( sortedPlaces )
        //console.log( sortedPlaces )
    } catch ( error ) {
        console.log( error )
    }
}

// sortBy event listener
document.getElementById( "sortBy" ).addEventListener( "change", ( event ) => {
    try {
        const value = event.target.value
        //console.log( value )
        

        switch ( value ) {
            case "name":
                sortPlacesAlphabetically()
                break
            
            case "visitors":
                sortPlacesOnVisitorCount()
                break

            default:
                braek
        }

    } catch ( error ) {
        console.log( error )
        
    }
})

// ---Sort and Search functions end---


