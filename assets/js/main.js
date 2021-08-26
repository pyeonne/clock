/* ============== CLOCK ============== */
const deg = 6; // 1s = 6deg
const hour = document.querySelector('#clock-hour');
const minutes = document.querySelector('#clock-minutes');
const seconds = document.querySelector('#clock-seconds');

const clock = () => {
    let date = new Date();
    let hh = date.getHours() * 30;
    let mm = date.getMinutes() * deg;
    let ss = date.getSeconds() * deg;

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
};
setInterval(clock, 1000); // 1000 = 1s
