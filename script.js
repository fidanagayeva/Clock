let seconds = 0;
let minutes = 0;
let hours = 0;

function startClock() {

    let secondInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
                if (hours === 0) {
                    hours = 0;
                }
            }
        }


        updateClock();


        if (seconds === 0 && minutes % 1 === 0) {
            clearInterval(secondInterval);
            setTimeout(() => {
                secondInterval = setInterval(() => {
                    seconds++;
                    if (seconds === 60) {
                        seconds = 0;
                        minutes++;
                        if (minutes === 60) {
                            minutes = 0;
                            hours++;
                            if (hours === 0) {
                                hours = 0;
                            }
                        }
                    }
                    updateClock();
                }, 1000);
            }, 0);
        }
    }, 1000);
}

function updateClock() {
    const formattedTime =
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    document.getElementById('clock').textContent = formattedTime;
}

window.onload = startClock;
