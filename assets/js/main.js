/* ============== CLOCK ============== */
const hour = document.querySelector('#clock-hour');
const minutes = document.querySelector('#clock-minutes');
const seconds = document.querySelector('#clock-seconds');

const clock = () => {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000); // 1000 = 1s
/* ============== CLOCK & DATE TEXT ============== */
const textHour = document.querySelector('#text-hour');
const textMinutes = document.querySelector('#text-minutes');
const textAmPm = document.querySelector('#text-ampm');
const dateDay = document.querySelector('#date-day');
const dateMonth = document.querySelector('#date-month');
const dateYear = document.querySelector('#date-year');

const clockText = () => {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ampm;
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // We change the hour from 24 to 12 hours and establish whether it is AM or PM
    if (hh >= 12) {
        hh = hh - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    // We detect when it's 0 AM and transform to 12 AM
    if (hh == 0) {
        hh = 12;
    }

    // Show a zero before hours
    if (hh < 10) {
        hh = `0${hh}`;
    }

    // Show time
    textHour.innerHTML = `${hh}:`;

    // Show a zero before the minutes
    if (mm < 10) {
        mm = `0${mm}`;
    }

    // Show minutes
    textMinutes.innerHTML = `${mm}`;

    // Show am or pm
    textAmPm.innerHTML = ampm;

    // We get the months of the year and show it
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // We show the day, the month and the year
    dateDay.innerHTML = day;
    dateMonth.innerHTML = `${months[month]},`;
    dateYear.innerHTML = year;
};
setInterval(clockText, 1000); // 1000 = 1s
