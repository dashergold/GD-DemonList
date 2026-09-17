//checks if LEVELS_DATA is undefined, otherwise returns it
async function fetchLevels() {
    if(typeof LEVELS_DATA === "undefined") {
        throw new Error("LEVELS_DATA is missing and the program cant load levels. check levels.js.");
    }
    return LEVELS_DATA;
}