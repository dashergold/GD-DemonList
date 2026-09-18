//checks if LEVELS_DATA is undefined, otherwise returns it
async function fetchLevels() {
    if(typeof LEVELS_DATA === "undefined") {
        throw new Error("LEVELS_DATA is missing and the program cant load levels. check levels.js.");
    }
    return LEVELS_DATA;
}

//returns a level by its id in levels
function getLevelById(levels, id) {
    return levels.find(level => {
        return level.id === id;
    });
}

//for every level every unique player who has completed it earns that levels points value. returns an array of a players name, country and points sorted by points descending.
function computeLeaderboard(levels) {
    const totals = {};

    levels.forEach(level => {
        const completions = level.completions;
        

        completions.forEach(completion => {
            const name = completion.name.trim();

            if (!totals[name]) {
                totals[name] = {name: name, country: completion.country || "-", points: 0};
            }
            totals[name].points += level.points;
            if (!totals[name].country && completion.country) {
                totals[name].country = completion.country;
            }
        });
    });
    return Object.values(totals).sort((a,b) => {
        return b.points - a.points;
    })
}