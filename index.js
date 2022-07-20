window.onload = function () {
    
    let hours = 00;
    let minutes = 00;
    let seconds = 00;
    let milli = 00;
    let appendMilli = document.getElementById('milli');
    let appendSeconds = document.getElementById('seconds');
    let appendMinutes = document.getElementById('minutes');
    let appendHours = document.getElementById('hours');
    let startButton = document.getElementById('start-button');
    let stopButton = document.getElementById('stop-button');
    let resetButton = document.getElementById('reset-button');
    let Interval;

    startButton.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

        stopButton.onclick = function() {
            clearInterval(Interval);
        }

    resetButton.onclick = function() {
        clearInterval(Interval);
        milli = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";
        appendMilli.innerHTML = milli;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        appendHours.innerHTML = hours;
    }

    function startTimer () {
        milli++;

        if (milli <= 9) {
            appendMilli.innerHTML = '0' + milli;
        }
        if (milli > 9) {
            appendMilli.innerHTML = milli;
        }
        if (milli > 99) {
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            milli = 00;
            appendMilli.innerHTML = '0' + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds >= 60) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 00;
            appendSeconds.innerHTML = + 0;
        }
        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
        if (minutes >= 60) {
            appendMinutes.innerHTML = minutes;
        }
        if (minutes >= 60) {
            hours++;
            appendHours.innerHTML = '0' + hours;
            minutes = 00;
            appendMinutes.innerHTML = '0' + 0;
    }   
    // if (hours <= 9) {
    //     appendHours.innerHTML = '0' + hours;
    // }
}
}