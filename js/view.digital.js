"use strict";

export function renderDigital(time) {
    const clock = document.getElementById("clock");

    const hours = String(time.hours).padStart(2, "0");
    const minutes = String(time.minutes).padStart(2, "0");
    const seconds = String(time.seconds).padStart(2, "0");

    const text = hours + ":" + minutes + ":" + seconds;

    clock.textContent = text;
}