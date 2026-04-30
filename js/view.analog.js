"use strict";

export function renderAnalog(time) {
    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");

    const hours = time.hours;
    const minutes = time.minutes;
    const seconds = time.seconds;

    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = hours * 30 + minutes * 0.5;

    secondHand.style.transform = "rotate(" + (secondAngle -90) + "deg)";
    minuteHand.style.transform = "rotate(" + (minuteAngle -90) + "deg)";
    hourHand.style.transform = "rotate(" + (hourAngle -90) + "deg)";
}