const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    // totalseconds
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // days
    const days = Math.floor( totalSeconds / 3600 / 24 );

    // Hours
    const hours = Math.floor(totalSeconds / 3600) % 24;

    // minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;

    // seconds
    const seconds = Math.floor(totalSeconds % 60);

    console.log(days, hours, minutes, seconds);

    // embedding in html
    daysEl.innerHTML =  days; 
    hoursEl.innerHTML = formatTime(hours); 
    minutesEl.innerHTML = formatTime(minutes); 
    secondsEl.innerHTML = formatTime(seconds); 
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);