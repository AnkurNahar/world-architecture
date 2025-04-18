let places = []
let activeFilters = []
const favorites = []
let currentPage = 'home'
let placeID = 0
const filterStatus = new Map([
    [ 'museum', 0 ],
    [ 'park', 0 ],
    [ 'library', 0 ],
    [ 'monument', 0 ],
    [ 'landmark', 0 ]
])

// ---Cloning cards from templete start---

const showCards = ( placesToDisplay ) => {
    //console.log( placesToDisplay )
    
    const cardContainer = document.getElementById( 'card-container' )
    cardContainer.innerHTML = ''
    const templateCard = document.querySelector( '.card' )

    placesToDisplay.forEach( place => {
        const nextCard = templateCard.cloneNode( true ) // Copies template card
        editCardContent( nextCard, place ) // Edits card info
        nextCard.addEventListener( 'click', () => { // Event listener to display details modal
            showPlaceModal( place )
        } )
        cardContainer.appendChild( nextCard ) // Adds new card to the container
    } )
}


const editCardContent = ( card, place ) => {
    //console.log( place )
    
    card.style.display = 'block'
    card.dataset.placeId = place.id
    let visitorCount = place.details.visitors == 0 ? 'N/A' : place.details.visitors

    const heart = card.querySelector( '.heart' )
    const isFave = favorites.includes( place.id )
    heart.style.display = isFave ? 'block' : 'none'
    
    const cardTitle = card.querySelector( '.card-title' )
    cardTitle.textContent = place.name

    const cardDetail1 = card.querySelector( '.country-info' )
    cardDetail1.textContent = `Country: ${place.country}`

    const cardDetail3 = card.querySelector( '.visitors-info' )
    cardDetail3.textContent = `Estimated visitors per year : ${visitorCount}`

    const cardImage = card.querySelector( 'img' )
    cardImage.src = place.details.imageDetails.url
    cardImage.alt = place.details.imageDetails.alt
}

// ---Cloning cards from templete end---


// ---DOM content loading start---

const updatePlaces = () => {
    try {
        monuments.countries.forEach( country => {
            country.places.forEach( place => { 
                place.details.visitors = isNaN( place.details.visitors ) ? 0 : place.details.visitors
                place.id = placeID++
                place.country = country.countryName
                places.push( place )
            } )
        } )
    } catch ( error ) {
        console.log( 'updatePlaces error: ' + error )       
    }
}

document.addEventListener( 'DOMContentLoaded', () => { 
    updatePlaces()
    //console.log( places )
    
    showCards( places ) 

    const home = document.getElementById( 'home' )
    const faves = document.getElementById( 'faves' )
    const sortSearchFilter = document.getElementById( 'sortSearchFilterWrapper' )
    const noFaves = document.getElementById( 'noFavorites' )

    home.addEventListener( 'click', ( event ) => {
        event.preventDefault()
        currentPage = 'home'
        noFaves.style.display = 'none'
        sortSearchFilter.style.display = 'flex'
        showCards( places )
    })

    faves.addEventListener( 'click', ( event ) => {
        event.preventDefault()
        currentPage = 'favorites'
        sortSearchFilter.style.display = 'none'
        let favoritePlaces = places.filter( place => favorites.includes( place.id ) )

        if ( favoritePlaces.length > 0 ) {
            noFaves.style.display = 'none'
        } else {
            noFaves.style.display = 'block'
        }
        showCards( favoritePlaces )

    })

} )

// ---DOM content loading end---


// ---Place details modal start---

const showPlaceModal = ( place ) => {
    let visitorCount = place.details.visitors == 0 ? 'N/A' : place.details.visitors

    document.getElementById( 'modalTitle' ).textContent = place.name
    document.getElementById( 'modalCountry' ).textContent = `Country: ${place.country}`
    document.getElementById( 'modalVisitors' ).textContent = `Estimated visitors per year: ${visitorCount}`
    document.getElementById( 'modalImage' ).src = place.details.imageDetails.url
    document.getElementById( 'modalImage' ).alt =  place.details.imageDetails.alt
    document.getElementById( 'modalDetails' ).textContent = place.details.description
    document.getElementById( 'photoCredit' ).textContent = `Image: ${place.details.imageDetails.src}`


    // deciding what to show when modal opened
    let isFave = favorites.includes( place.id )
    const favoriteButton = document.getElementById( 'favoriteButton' )
    if ( isFave ) {
        favoriteButton.textContent = 'Remove from Favorites'
    } else {
        favoriteButton.textContent = 'Add to Favorites'
    }

    favoriteButton.onclick = () => { 
        isFave = favorites.includes( place.id )
        if ( isFave ) {
            deleteFromFavorites( place.id ) 
            favoriteButton.textContent = 'Add to Favorites'
        } else {
            addToFavorites( place ) 
            favoriteButton.textContent = 'Remove from Favorites'
        } 
        applyFilters( places )       
    }

    document.getElementById( 'placeModal' ).style.display = 'block'
}
  
document.getElementById( 'closeModal' ).addEventListener( 'click', () => {
    document.getElementById( 'placeModal' ).style.display = 'none'
})
  
window.addEventListener( 'click', ( event ) => {
    const modal = document.getElementById( 'placeModal' )
    if ( event.target === modal ) {
      modal.style.display = 'none'
    }
})

// ---Place details modal end---


// ---Favorites implementation start--

const addToFavorites = ( place ) => {
    try {        
        favorites.push( place.id )
        alert( `${place.name} added to favorites!` )        
    } catch (error) {
        console.log( 'addToFavorites error: ' + error )       
    }
}

const deleteFromFavorites = ( faveID ) => {
    try {        
        const index = favorites.indexOf( faveID )
        favorites.splice( index, 1 )
        alert( 'Removed from favorites' )
    } catch ( error ) {
        console.log( 'deleteFromFavorites error: ' + error )
    }
}

// ---Favorites implementation end---


// ---Filtering starts---

const applyFilters = ( placesToFilter ) => {
    try {
        const matches = placesToFilter.filter( ( place ) => {
            return ( activeFilters.includes( place.details.type ) )
        })
          
        if ( activeFilters.length > 0 ) 
            showCards( matches )
        else 
            showCards( placesToFilter )

    } catch ( error ) {
        console.log( 'Filtering error: ' + error );        
    }
}

document.querySelectorAll( '.filter-btn' ).forEach( button => {
    button.addEventListener( 'click', () => {
      const id = button.id
      let activeStatus = filterStatus.get( id )
      let updatedStatus = activeStatus == 1 ? 0 : 1
      filterStatus.set( id, updatedStatus )

      activeFilters = []
      filterStatus.forEach(( status, id ) => {
        if ( status == 1 ) {
          activeFilters.push( id )
        }
      })
      applyFilters( places )

      // changing button style
      button.classList.toggle( 'selected', updatedStatus == 1 )  
    })
})

// ---Filtering end---


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
                place.details.type.includes( queryString )
            )
        })

        showCards( matches )
        event.target.query.value = ''
        
    } catch ( error ) {
        console.log( 'searchPlaces error: ' + error )        
    }
}

const sortPlacesAlphabetically = () => {
    try {        
        let sortedPlaces = currentPage == 'home' ? [...places] : places.filter( place => favorites.includes( place.id ) )
        sortedPlaces.sort( ( place1, place2 ) => {return place1.name.localeCompare( place2.name )} )
        applyFilters( sortedPlaces )
        //console.log( sortedPlaces )
    } catch ( error ) {
        console.log( 'sortPlacesAlphabetically error: ' + error ) 
    }
}

const sortPlacesOnVisitorCount = () => {
    try {        
        let sortedPlaces = currentPage == 'home' ? [...places] : places.filter( place => favorites.includes( place.id ) )
        sortedPlaces.sort( ( a, b ) => b.details.visitors - a.details.visitors )
        
        applyFilters( sortedPlaces )
        //console.log( sortedPlaces )
    } catch ( error ) {
        console.log( 'sortPlacesOnVisitorCount error: ' + error ) 
    }
}

// sortBy event listener
document.getElementById( 'sortBy' ).addEventListener( 'change', ( event ) => {
    try {
        const value = event.target.value
        //console.log( value )
        

        switch ( value ) {
            case 'name':
                sortPlacesAlphabetically()
                break
            
            case 'visitors':
                sortPlacesOnVisitorCount()
                break

            default:
                braek
        }

    } catch ( error ) {
        console.log( 'sortBy event listener error: ' + error )
        
    }
})

// ---Sort and Search functions end---