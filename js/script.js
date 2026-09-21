

//fetches the level data from levels.js, and builds the table for every level based on the levels data.
async function renderLevelsTable() {
    const tbody = document.getElementById("levels-tbody");
    if(!tbody) {
        return;
    }

    const levels = await fetchLevels();

    tbody.innerHTML = levels.map(function (level) {
        const detailUrl = "levels/level.html?id=" + level.id;
        return (
            '<tr class="clickable-row" data-href="' + detailUrl + '">' +
            '<td class="rank-cell">' + level.rank + '</td>' +
            '<td><a href="' + detailUrl + '">' + level.name + '</a></td>' +
            '<td>' + level.publisher + '</td>' +
            '<td>' + level.verifier + '</td>' +
            '<td>' + buildThumbLink(level.videoId, level.name + ' completion') + '</td>' +
            '</tr>'
        );
    }).join("");

    wireUpClickableRows();
}

//fetches the levels list, gets the completions for every level and displays the leaderboard sorted in descending order.
async function renderPlayersTable() {
    const tbody = document.getElementById("players-body");
    if (!tbody) {
        return;
    }
    const levels = await fetchLevels();
    const leaderboard = computeLeaderboard(levels);

    tbody.innerHTML = leaderboard
    .map(function (player, index) {
      return (
        '<tr>' +
        '<td class="rank-cell">' + (index + 1) + '</td>' +
        '<td>' + player.name + '</td>' +
        '<td>' + (player.country || '&mdash;') + '</td>' +
        '<td>' + player.points + '</td>' +
        '</tr>'
      );
    }).join('');
}

async function renderRecentSubmissions() {
    const list = document.getElementById("submission-list");
    if(!list) {
        return;
    }
    const levels = await fetchLevels();
    const completions = getCompletions();

    const entries = [];
    levels.forEach(level => {
        (completions[level.id] ||[]).forEach(completion => {
            entries.push(Object.assign({levelName: level.name}, completion));
        });
    });
    if(entries.length === 0) {
        list.innerHTML = '<li> You haven\'t submitted any completions yet.</li>'
        return;
    }
    list.innerHTML = entries.reverse().map(entry => {
        return ('<li><strong>' + entry.name + '</strong> completed <em>'+entry.levelName + '</em>' + 
        '<span class="meta">Video: <a href="' + entry.video + '" target="_blank" rel="noopener">' +
        entry.video + '</a>' +
        (entry.country ? ' - ' + entry.country : '') +
        (entry.startPositionId ? ' - Start Pos ID: ' + entry.startPositionId : '') +
        ' - submitted ' + entry.date +
        '</span></li>');
    }).join();

}

//initializes the submission form page
async function initSubmission() {
    const form = document.getElementById("completion-form");
    if(!form) {
        return;
    }
    await populateDropdown();
    form.addEventListener("submit", handleFormSubmit);
    await renderRecentSubmissions();
}

//grabs the levels and places them as options in the drop down menu for the level completed in the form
async function populateDropdown() {
    const select = document.getElementById("level-completed");
    if(!select) {
        return;
        
    }
    const levels = await fetchLevels();
    const options = levels.map(level => {
        return '<option value="' + level.id + '">#'+level.rank+ '-' +level.name + '</option>';
    }).join("");

    select.innerHTML = '<option value="" disabled selected>Choose a level...</option>' + options;  
}

//prevents a reload when submitting, grabs the info from the fields, saves it in a local store and renders on the screen.
async function handleFormSubmit(event) {
    event.preventDefault();
    console.log("test");

    const statusBox = document.getElementById('form-status');
    const nameField = document.getElementById('player-name');
    const levelField = document.getElementById('level-completed');
    const videoField = document.getElementById('video-link');
    const startPosField = document.getElementById('start-position-id');
    const countryField = document.getElementById('player-country');

    const name= nameField.value.trim();
    const levelId = levelField.value;
    const video = videoField.value.trim();

    if(!name || !levelId || !video) {
        statusBox.textContent = "A submission requires a name, level submission and a video link to the raw completion.";
        statusBox.className = 'error';
        return;
    }

    saveCompletion(levelId, {
        name: name,
        country: countryField.value.trim(),
        video: video,
        startPositionId: startPosField.value.trim(),
        date: new Date().toISOString().slice(0,10),
        role: "100%"
    });
    event.target.reset();
    statusBox.textContent ="Your completion has been submitted for manual review.";
    statusBox.className = "success";
    await renderRecentSubmissions();
}


//https://youtu.be/
//https://i.ytimg.com/vi/XXXXXX/mqdefault.jpg)
//gets the youtube link, grabs its thumbnail and displays it as an image, that when clicked on redirects to the youtube link
function buildThumbLink(videoId, label) {
  const thumbUrl = 'https://i.ytimg.com/vi/' + videoId + '/mqdefault.jpg';
  const videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
  return (
    '<a class="thumb ratio-16-9" href="' + videoUrl + '" target="_blank" rel="noopener" ' +
    'style="background-image:url(&quot;' + thumbUrl + '&quot;)" aria-label="Watch ' + label + '"></a>'
  );
}
//when user clicks on a row in the table it refers them to the deisngated levels info page. if user clicks on a real link inside it refers to the clicked link instead.
function wireUpClickableRows() {
    document.querySelectorAll(".clickable-row").forEach(row => {
        row.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                return;
            }

            window.location.href = row.dataset.href;
        });
    });
}




//loads the javascript 
async function init() {
    await renderLevelsTable();
    await renderPlayersTable();
    await initSubmission();

}
document.addEventListener("DOMContentLoaded", init);
