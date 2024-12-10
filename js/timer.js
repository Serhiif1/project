function calculateTimeSince(date) {
    const now = new Date();
    const startDate = new Date(date);
    const diffInSeconds = Math.floor((now - startDate) / 1000);

    const days = Math.floor(diffInSeconds / (24 * 3600));
    const hours = Math.floor((diffInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    return `${days}D ${hours}H ${minutes}M ${seconds}S`;
}

function updateTimer() {
    const timerElement = document.getElementById("timer");
    const timeSince = calculateTimeSince("2023-11-01T00:00:00");
    timerElement.textContent = timeSince;
}

setInterval(updateTimer, 1000);

updateTimer();
