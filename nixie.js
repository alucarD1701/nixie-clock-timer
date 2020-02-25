//const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
const countDownDate = new Date("Feb 21, 2020 00:00:00");
var video = document.getElementById('video');

function getTime() {
    const now = new Date();
	const distance = countDownDate - now;
    return {
		//hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) <= 9 ? `0${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}` : `${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`,
		mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) <= 9 ? `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}` : `${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`,
		secs: Math.floor((distance % (1000 * 60)) / 1000) <= 9 ? `0${Math.floor((distance % (1000 * 60)) / 1000)}` : `${Math.floor((distance % (1000 * 60)) / 1000)}`
    }
}

function setDigits(section, digit) {
    const tens = [...section.children[0].children];
    const ones = [...section.children[1].children];
    tens.forEach(number => number.classList.remove('active'));
    tens[digit[0]].classList.add('active');
    ones.forEach(number => number.classList.remove('active'));
    ones[digit[1]].classList.add('active');
}

function tick() {
    const time = getTime();
    //setDigits(hours, time.hours);
    setDigits(mins, time.mins);
    setDigits(secs, time.secs);
	if ((time.mins <= 0) && (time.secs <= 0)) {
		clearInterval(timer);
		//video.play();
		//video.muted = false;
	}
}

tick();
var timer = setInterval(tick, 1000);