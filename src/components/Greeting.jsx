import React from 'react';

export default function Greetings(){

    const dt = new Date().getHours();

    if(dt < 12){
        return("Good Morning")
    }
    else if(dt > 12 && dt < 18){
        return("Good AfterNoon")
    }
    else {
        return("Good Evening")
    }

}