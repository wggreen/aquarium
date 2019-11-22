/*
    *  To get you started, here's some properties of Bart.
    *  You need to add more properties to complete his
    *  representation as an object. Then add all the other
    *  fish to the collection.
    */
const tipCollection = [
    {
        title: "Tip #1:",
        description: "Bring sunscreen"
    },
    {
        title: "Tip #2:",
        description: "Bring a towel"

    },
    {
        title:"Tip #3:",
        description:"Don't drink the water"

    },
    {
        title:"Tip #4:",
        description:"Party hard"

    }
]   

// This is new code. Add this.
export const useTip = () => {
    return tipCollection
}

//immutability: our core. raw data should be private and hidden and should not be changed by other modules
//this is why we are exporting this FUNCTION (useFish) instead of just the array