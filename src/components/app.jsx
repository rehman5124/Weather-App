import React, { useState } from "react";
import Time from "./Time.jsx";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

export default function App() {

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = weekday[new Date().getDay()];
    // console.log(day);

    var date = new Date().getDate();
    // console.log(date);
    
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December",];
    var month = monthNames[new Date().getMonth()];
    // console.log(month);

    var year = new Date().getFullYear();
    // console.log(year);

    const API_KEY = "5710b099a08fb0bddefe27fd352f6ed3";

    const API_COOR =`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=2&appid=${API_KEY}`;
    const API_CALL = `https://api.openweathermap.org/data/3.0/onecall?lat=51.5072&lon=-0.1275&appid=${API_KEY}`;
    
    async function getUserData() {
        console.log("i got clicked")

        axios.get(API_COOR)
        .then((response) => {
            const {lat, lon} = response.data[0];
            console.log(lat, lon);
        })
        .catch((error) => {
            console.log(error.message);
        })

        axios.get(API_CALL)
        .then((response) => {
            console.log(response);
        })

    }

    return (
    <div className="container" >
        <div className="container-fluid">
            <div className="panel_1" >
                <div className="location_ui">
                    <p2 className="city_ui">Lahore</p2> <br/>
                    <p4 className="country_ui">PK</p4>
                </div>
                <h3 className="time_ui"><Time /></h3>
                <h4 className="date_ui">{day + "," + " "  + date + " " + month + " " + year}</h4>
                <h1 className="temp_p1">23°c</h1>
            </div>
            <div className="panel_2">
                <WbSunnyRoundedIcon sx={{ fontSize: 60, color: "white" }} className="sun_icon"/>
                <p1 className="haze">Haze</p1> <hr className="haze_hr"/>
                <input type="text" placeholder="search any city"></input>
                <SearchIcon onClick={getUserData} sx={{ fontSize: 20, color: "white" }} className="search_icon"/>
                <div>
                    <span className="location_2">Lahore, PK</span>
                </div>
                <div className="weather_info">
                    <div className="info"><span className="temp hr">Temperature</span><span className="value">23°c</span> </div>
                    <div className="info"><span className="humid hr">Humidity</span><span className="value">38%</span>  </div>
                    <div className="info"><span className="visib hr">Visibility</span><span className="value">3000 mi</span> </div>
                    <div className="info"><span className="wind_speed hr">Wind Speed</span><span className="value">3 km/h</span> </div>
                </div>

            </div>
        </div>
        <p2 className="tag_line">Developed by <b>Abdul Rehman</b> | Powered with <b>Love</b></p2>
    </div>
    );
}
