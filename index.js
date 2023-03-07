const diff = 120; // second
const startDate = new Date();
const startDateDiff = startDate.setSeconds(startDate.getSeconds() + diff);
const startDateTime = new Date(startDateDiff).getTime();

function getTimer() {

    const now = new Date().getTime();
    const gap = startDateTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day));
    const h = Math.floor((gap) % (day) / (hour));
    const m = Math.floor((gap) % (hour) / (minute));
    const s = Math.floor((gap) % (minute) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(() => {
    getTimer()
}, 1000);
