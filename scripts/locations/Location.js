/**
 *  TipComponent which renders individual tip objects as HTML
 */
const LocationComponent = (location) => {
    return `
        <section class="locations_card">
            <img src=${location.image} alt="">
            <p>${location.name}</p>

            <div>
                <button id = "button--${location.name}">Details</button>
            </div>

            <dialog class="dialog--fish" id="details--${location.name}">
                <div>${location.lat_long}</div>
                <div>${location.climate}</div>
                <div>${location.airport}</div>
            
                <button class="button--close" id="close-${location.name}">Close Dialog</button>
            </dialog>
        </section>
            `
}

export default LocationComponent