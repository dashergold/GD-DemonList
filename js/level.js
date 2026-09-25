
//gets the level id from the url parameter for "id"
function getRequestedLevelId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function buildLargeThumb(videoId, label) {
  const thumbUrl = "https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg";
  const videoUrl = "https://www.youtube.com/watch?v=" + videoId;
  return (
    '<a class="thumb ratio-16-9 thumb-large" href="' + videoUrl + '" target="_blank" rel="noopener" ' +
    'style="background-image:url(&quot;' + thumbUrl + '&quot;)" aria-label="Watch ' + label + '"></a>'
  );
}


//renders all the information about the currently selected level on the screen
function renderLevel(level, allLevels) {
    document.title = level.name + " | Geometry Dash Demon List";
    document.getElementById("title").textContent = "#"+level.rank + " - " + level.name;
    document.getElementById("publisher").textContent = level.publisher;
    document.getElementById("verifier").textContent = level.verifier;
    document.getElementById("description").textContent = level.description;
    document.getElementById("points").textContent = level.points;
    document.getElementById("youtube-link").innerHTML = buildLargeThumb(level.videoId, level.name + " completion");

    const previousLevel = getPreviousLevel(allLevels, level);
    const nextLevel = getNextLevel(allLevels, level);
    const previousLink = document.getElementById("previous-level");
    const nextLink = document.getElementById("next-level");

    if(nextLevel) {
        nextLink.href = "level.html?id="+nextLevel.id;
        nextLink.textContent = "#" + nextLevel.rank+ " " + nextLevel.name + " >";
        nextLink.style.visibility = "visible";
    }
    else {
        nextLink.style.visibility = "hidden";
    }

    if(previousLevel) {
        previousLink.href = "level.html?id=" + previousLevel.id;
        previousLink.textContent = "< #"+previousLevel.rank + " "+ previousLevel.name;
        previousLink.style.visibility = "visible";
    }
    else {
        previousLink.style.visibility = "hidden";
    }
    renderVictorsTable(level);
}

//sorts by ascending order, finds the current level in the order, fetches the next level by ranking and returns the data for the next level.
//used ai for the search algorithm 
function getNextLevel(levels, currentLevel) {
    const sorted = levels.slice().sort((a,b) => {
        return a.rank - b.rank;
    });
    const currentIndex = sorted.findIndex(level => {
        return level.id === currentLevel.id;
    });
    if(currentIndex === sorted.length -1) {
        return null;
    }
    return sorted[currentIndex +1 ];
}

//sorts by acscending order, finds the current level in the order, fetches the porevious level and returns the data for it.
//also used ai for this algorithm
function getPreviousLevel(levels, currentLevel) {
    const sorted = levels.slice().sort((a, b) => {
        return a.rank - b.rank;
    });
    const currentIndex = sorted.findIndex(level => {
        return level.id === currentLevel.id;
    });
    if(currentIndex === 0) {
        return null;
    } 
    return sorted[currentIndex -1];
}

//renders the table for the victors, and separated a victor from the verifier with a check mark
function renderVictorsTable(level) {
    const tbody = document.getElementById("completions-body");
    const completions = level.completions;

    tbody.innerHTML = completions
    .map(function (completion, index) {
      return (
        '<tr>' +
        '<td>' + (index + 1) + '</td>' +
        '<td>' + completion.name + (completion.role === 'Verifier' ? ' ✓' : '') + '</td>' +
        '<td>' + (completion.country || '-') + '</td>' +
        '<td>' + completion.date + '</td>' +
        '</tr>'
      );
    })
    .join('');
}


//loads the javascript. gets the levels, gets the requested id, if the requested id exists, get the level info for the id, otherwise get the first level by id.
async function init() {
    const levels = await fetchLevels();
    const requestedId = getRequestedLevelId();
    const level = requestedId ? getLevelById(levels, requestedId) : levels[0];

    if(!level) {
        renderNotFound();
        return;
    }

    renderLevel(level, levels);
}
document.addEventListener("DOMContentLoaded", init);