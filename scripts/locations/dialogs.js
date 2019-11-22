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
    document.querySelector("#button--cancun").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--cancun")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--bora").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bora")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--antarctica").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--antarctica")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--margaritaville").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--margaritaville")
            theDialog.showModal()
        }
    )
    
    
    document.querySelector("#button--castaway").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--castaway")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--spongebob").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--spongebob")
            theDialog.showModal()
        }
    )  
}

export default initializeDetailButtonEvents