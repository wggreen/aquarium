/*
    *  To get you started, here's some properties of Bart.
    *  You need to add more properties to complete his
    *  representation as an object. Then add all the other
    *  fish to the collection.
    */
const fishCollection = [
    {
        name: "Bart",
        species: "Orange Clownfish",
        location: "Caribbean",
        length: 3,
        food: ["algae", "crustaceans"],
        image: "styles\main\fish-1.jpg"
    },
    {
        name: "Bluey",
        species: "Blue Clownfish",
        location: "Fiji",
        length: 4,
        food: ["shrimp", "coral"],
        image: "styles\main\fish-2.jpg"

    },
    {
        name: "Old Yeller",
        species: "Yellow Clownfish",
        location: "Indian Ocean",
        length: 2,
        food: ["kelp", "plankton"],
        image: "styles\main\fish-3.jpg"

    },
    {
        name: "Bighead",
        species: "Orange Goldfish",
        location: "Gulf of Mexico",
        length: 1,
        food: ["flakes"],
        image: "styles\main\fish-4.jpg"

    },
    {
        name: "Scaly",
        species: "Scaly Clownfish",
        location: "Bora Bora",
        length: 5,
        food: ["whales", "sharks"],
        image: "styles\main\fish-5.jpg"

    },
    {
        name: "Twins",
        species: "Conjoined Clownfish",
        location: "Chernobyl",
        length: 7,
        food: ["toxic waste"],
        image: "styles\main\fish-6.jpg"

    }
]   

// This is new code. Add this.
export const useFish = () => {
    return fishCollection
}

//immutability: our core. raw data should be private and hidden and should not be changed by other modules
//this is why we are exporting this FUNCTION (useFish) instead of just the array