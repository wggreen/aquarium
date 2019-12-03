/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from './FishDataProvider.js'
import FishComponent from './Fish.js'

const FishListComponent = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            ${
                fishes.map(fish => FishComponent(fish)).join("")
            }
        </section>
    `
}

export default FishListComponent