const COMPLETIONS_KEY = "gd-completions";

//checks if LEVELS_DATA is undefined, otherwise returns it
async function fetchLevels() {
    if(typeof LEVELS_DATA === "undefined") {
        throw new Error("LEVELS_DATA is missing and the program cant load levels. check levels.js.");
    }
    return LEVELS_DATA;
}

//reads all the completions saved in local storage
function getCompletions() {
    const raw = window.localStorage.getItem(COMPLETIONS_KEY);
    if(!raw) {
        return {};
    }
    try {
        return JSON.parse(raw);
    } 
    catch (err) {
        return {};
    }
}
//saves a completion to local storage
function saveCompletion(levelId, completion) {
    const all = getCompletions();
    if(!all[levelId]) {
        all[levelId] = [];
    }
    all[levelId].push(completion);
    window.localStorage.setItem(COMPLETIONS_KEY, JSON.stringify(all));
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