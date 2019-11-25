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
    document.querySelector("#button--Cancun").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Cancun")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--Bora-Bora").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Bora-Bora")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--Antarctica").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Antarctica")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--Margaritaville").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Margaritaville")
            theDialog.showModal()
        }
    )
    
    
    document.querySelector("#button--Island-from-Castaway").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Island-from-Castaway")
            theDialog.showModal()
        }
    )  

    document.querySelector("#button--Bikini-Bottom").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Bikini-Bottom")
            theDialog.showModal()
        }
    )  
}

export default initializeDetailButtonEvents