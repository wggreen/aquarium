/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverBorder from './border.js'
import FishListComponent from './fish/FishList.js'
import TipListComponent from  './tips/TipList.js'

FishListComponent()
TipListComponent()
initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverBorder()