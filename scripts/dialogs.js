const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--bluey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bluey")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--yeller").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--yeller")
            theDialog.showModal()
        }
    )    

    document.querySelector("#button--bighead").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bighead")
            theDialog.showModal()
        }
    )    

    document.querySelector("#button--scaly").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--scaly")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--twins").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--twins")
            theDialog.showModal()
        }
    )  
}

export default initializeDetailButtonEvents