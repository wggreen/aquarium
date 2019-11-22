/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useLocation } from './LocationDataProvider.js'
import LocationComponent from './Location.js'

const LocationListComponent = () => {

    // Get a reference to the `<article class="fishList">` element
    const contentElement = document.querySelector(".locations")
    const locations = useLocation()

   let allLocationHTML = ""
    
    for (const location of locations) {
       const locationHTML = LocationComponent(location)
       allLocationHTML += locationHTML
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="locations">
            ${allLocationHTML}
        </section>
    `
}

export default LocationListComponent