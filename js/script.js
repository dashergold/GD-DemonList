

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
            '<td><a href="'+'https://www.youtube.com/watch?v='+level.videoId+'" target="_blank">Verification</a> </td>' +
            '</tr>'
        );
    }).join("");

    wireUpClickableRows();
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
