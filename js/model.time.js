"use strict";

export function getTime() {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}