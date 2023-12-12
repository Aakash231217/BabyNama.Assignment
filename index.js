const minutesInput = document.getElementById("countMin");
const countDisplay = document.getElementById("countDisplay"); // Updated to match the span's id in the HTML

let countInterval;
let totalSeconds;

function startCountdown(minutes) {
    totalSeconds = minutes * 60;
    if (!countInterval) {
        countInterval = setInterval(() => {
            if (totalSeconds >= 0) {
                let displayHours = Math.floor(totalSeconds / 3600);
                let displayMinutes = Math.floor((totalSeconds % 3600) / 60);
                let displaySeconds = totalSeconds % 60;
                countDisplay.innerText = `${displayHours.toString().padStart(2, '0')}:${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
                totalSeconds--;
            } else {
                clearInterval(countInterval);
                countInterval = null;
            }
        }, 1000);
    }
}

function stopCountdown() {
    clearInterval(countInterval);
    countInterval = null;
}

function resetCountdown() {
    stopCountdown();
    countDisplay.innerText = "00:00:00";
    minutesInput.value = '';
}

document.querySelector(".fa-play-circle").addEventListener("click", () => {
    if (!countInterval) {
        let minutes = parseInt(minutesInput.value) || 0;
        startCountdown(minutes);
    }
});

document.getElementById("pause").addEventListener("click", stopCountdown);

document.getElementById("reset").addEventListener("click", resetCountdown);
