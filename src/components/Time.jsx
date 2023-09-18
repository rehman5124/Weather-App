import React, {useState} from "react";

export default function Time() {
    let time = new Date().toLocaleTimeString();
    // console.log(time);

    const [newTime, setnewTime] = useState(time);
    function currentTime() {
        var time = new Date().toLocaleTimeString();
        setnewTime(time);
    }
    setInterval(currentTime,1000);

    return newTime;
}