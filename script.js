let stopwatchInterval;
let elapsedTime = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatchInterval = setInterval(() => {
            elapsedTime += 10;
            displayTime();
        }, 10);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    isRunning = false;
    elapsedTime = 0;
    displayTime();
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapsContainer = document.getElementById('laps');
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        lapsContainer.appendChild(lapTime);
    }
}

function displayTime() {
    const display = document.getElementById('display');
    display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    let milliseconds = parseInt((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

    return `${minutes}:${seconds}:${milliseconds}`;
}
