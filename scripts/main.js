/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverBorder from './border.js'
import { useFish } from './FishDataProvider.js'

initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverBorder()

const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log("individual fish object:", fish)
}