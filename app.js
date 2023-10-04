const timeLeft = document.getElementById('time-left');
const sleepLeft = document.getElementById('sleep-left');

//month day year
const birthday = new Date('10/31/2024');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const sleeps = hour * 24;
let timerId;

function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;
    //milliseconds
    console.log(timeSpan);

    if (timeSpan <= -day) {
        timeLeft.innerHTML = 'Happy Birthday!!';
        clearInterval(timerId);
        return;
    }

    if (timeSpan <= 0) {
        timeLeft.innerHTML = 'Congratulations!!';
        clearInterval(timerId);
        return;
    }


    const sleeps = Math.floor(timeSpan / day + 1);
    const days = Math.floor(timeSpan / day + 1);
    const hours = Math.floor((timeSpan % day));
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    sleepLeft.innerHTML =
        days + ' Days left. ';
    // timeLeft.innerHTML =
    //     hours + 'hrs ' + minutes + 'mins ' + seconds + 'secs';
}

timerId = setInterval(countDown, second);