import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

export default function App() {


    return (
    <div className="container">
        <div className="container-fluid">
            <div className="panel_1">
                <div className="location_ui">
                    <p2 className="city_ui">Lahore</p2> <br/>
                    <p4 className="country_ui">PK</p4>
                </div>
                <h3 className="time_ui">18:00:00</h3>
                <h4 className="date_ui">Wednesday, 15Feb 2023</h4>
                <h1 className="temp_p1">23°c</h1>
            </div>
            <div className="panel_2">
                <WbSunnyRoundedIcon sx={{ fontSize: 60, color: "white" }} className="sun_icon"/>
                <p1 className="haze">Haze</p1> <hr className="haze_hr"/>
                <input type="text" placeholder="search any city"></input>
                <SearchIcon sx={{ fontSize: 20, color: "white" }} className="search_icon"/>
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