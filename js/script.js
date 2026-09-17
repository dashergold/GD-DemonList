

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

//https://youtu.be/
//https://i.ytimg.com/vi/XXXXXX/mqdefault.jpg)

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

}
document.addEventListener("DOMContentLoaded", init);
