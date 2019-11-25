/*
    *  To get you started, here's some properties of Bart.
    *  You need to add more properties to complete his
    *  representation as an object. Then add all the other
    *  fish to the collection.
    */
   const locationCollection = [
    {
        image: "./styles/locations/island.jpg",
        name: "Cancun",
        lat_long: "Latitude: 15.656893, Longitude: -170.319836",
        climate: "Climate: Tropical",
        airport: "Nearest airport: Cancun International Airport"
    },
    {
        image: "./styles/locations/island.jpg",
        name: "Bora-Bora",
        lat_long: "Latitutde: 1123.456, Longitude: 789.101112",
        climate: "Climate: Tundra",
        airport: "Nearest airport: Bora Bora International Airport"
    },
    {
        image: "./styles/locations/island.jpg",
        name: "Antarctica",
        lat_long: "Latitutde: 1123.456, Longitude: 789.101112",
        climate: "Climate: Rainforest",
        airport: "Nearest airport: South Pole International Airport"
    },
    {
        image: "./styles/locations/island.jpg",
        name: "Margaritaville",
        lat_long: "Latitutde: 1123.456, Longitude: 789.101112",
        climate: "Climate: Party",
        airport: "Nearest airport: Key West International Airport"
    },
    {
        image: "./styles/locations/island.jpg",
        name: "Island-from-Castaway",
        lat_long: "Latitutde: 1123.456, Longitude: 789.101112",
        climate: "Climate: Wilson!!!",
        airport: "Nearest airport: ???"
    },
    {
        image: "./styles/locations/island.jpg",
        name: "Bikini-Bottom",
        lat_long: "Latitutde: 1123.456, Longitude: 789.101112",
        climate: "Climate: Underwater",
        airport: "Nearest airport: Rock Bottom"
    },
]   

// This is new code. Add this.
export const useLocation = () => {
    return locationCollection
}

//immutability: our core. raw data should be private and hidden and should not be changed by other modules
//this is why we are exporting this FUNCTION (useFish) instead of just the array