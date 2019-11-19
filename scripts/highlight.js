const addMouseOverEventListeners = () => {

    const fishCards = document.querySelectorAll(".fishies__card")
    
    for(const card of fishCards) {
        card.addEventListener(
            "mouseover",
            theMouseOverEvent => {
                console.log('HI')
                card.classList.add("highlightFish")
                console.log('HI2')
            }
        )
    
        card.addEventListener("mouseout", theMouseOutEvent => {
            console.log('mouse-over-before')
            card.classList.remove("highlightFish")
            console.log('mouse-over-after')
        })
    }
}

export default addMouseOverEventListeners