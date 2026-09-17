//refers user to from the table to the designated level
document.querySelectorAll(".clickable-row").forEach(row => {
    row.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            return;
        }

        window.location.href = row.dataset.href;
    });
});


