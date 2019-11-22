/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useTip } from './TipDataProvider.js'
import TipComponent from './Tip.js'



const TipListComponent = () => {

    // Get a reference to the `<article class="fishList">` element
    const contentElement = document.querySelector(".tipList")
    const tips = useTip()

   let allTipHTML = ""
   
    for (const tip of tips) {
       const tipHTML = TipComponent(tip)
       allTipHTML += tipHTML
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="tipList">
            ${allTipHTML}
        </section>
    `
}

export default TipListComponent