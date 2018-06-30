document.addEventListener("DOMContentLoaded", function () {
    console.log(getMidnightInMillis(getCurrentDateAsString()) + " -> " + getMidnightInMillis(getTomorrowDateAsString()));
});

// Returns the representation of current midnight in milliseconds.
function getMidnightInMillis(date) {

    var midnight = "T00:00:00.000Z"

    return Date.parse(date + midnight);
}

function getCurrentDateAsString() {
    return new Date().toJSON().slice(0, 10);
}

function getTomorrowDateAsString() {
    var nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toJSON().slice(0, 10);
}

function requestPomodorosForDateRange(startDate_ms, endDate_ms) {
}