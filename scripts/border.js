const addMouseOverBorder = () => {

    const travelTips = document.querySelectorAll(".tip")
    
    for(const tips of travelTips) {
        tips.addEventListener("mouseover", theMouseOverEvent => {
                tips.classList.add("travel_tips")
            }
        )
    
        tips.addEventListener("mouseout", theMouseOutEvent => {
            tips.classList.remove("travel_tips")
        })
    }
}

export default addMouseOverBorder