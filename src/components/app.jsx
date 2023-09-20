import React, { useState } from "react";
import Time from "./Time.jsx";
import Greetings from "./Greeting.jsx";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

export default function App() {

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [city, setCity] = useState('');
    const [data, setData] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [Visibility, setVisibility] = useState('');
    const [wSpeed, setWSpeed] = useState('');
    const [wInfo, setWInfo] = useState('');
    const [nameOfCity, setNameOfCity] = useState('');

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

    const API_COOR =`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${API_KEY}`;
    var API_CALL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    
    async function getUserData() {
      console.log("i got clicked");

    //   axios.get(API_COOR)
    //     .then((response) => {
    //       setLat(response.data[0].lat);
    //       setLon(response.data[0].lon);

    //       console.log(lat);
    //       console.log(lon);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });

    //   await axios.get(API_CALL).then((response) => {
    //     console.log(response);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    }
    
    function userInput(event) {
        setCity(event.target.value);
        console.log(city);

        axios.get(API_COOR)
        .then((response) => {
          setLat(response.data[0].lat);
          setLon(response.data[0].lon);

          console.log(lat);
          console.log(lon);
        })
        .catch((error) => {
          console.log(error.message);
        });

        axios.get(API_CALL).then((response) => {
            setData(response.data.current);
            console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    async function fetchUserData() {
        console.log("i also got clicked");

        // await axios.get(API_CALL).then((response) => {
        //     setData(response.data.current);
        //     console.log(data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

        setTemp(Math.floor(data.temp));
        setHumidity(Math.floor(data.humidity));
        setVisibility(Math.floor(data.visibility));
        setWSpeed(Math.floor(data.wind_speed));
        setWInfo(data.weather[0].main);
        setNameOfCity(city);

    }

      
    return (
    <div className="container" >
        <div className="container-fluid">
            <div className="panel_1" >
                <div className="location_ui">
                    <p2 className="greeting_ui"><Greetings /></p2> <br/>
                    <p4 className="name_ui">I'm Steve!</p4>
                </div>
                <h3 className="time_ui"><Time /></h3>
                <h4 className="date_ui">{day + "," + " "  + date + " " + month + " " + year}</h4>
                <h1 className="temp_p1">{temp}°c</h1>
            </div>
            <div className="panel_2">
                <WbSunnyRoundedIcon sx={{ fontSize: 60, color: "white" }} className="sun_icon"/>
                <p1 className="haze">{wInfo}</p1> <hr className="haze_hr"/>
                <input type="text" placeholder="search any city" onChange={userInput}></input>
                <SearchIcon onClick={fetchUserData} sx={{ fontSize: 20, color: "white" }} className="search_icon"/>
                <div>
                    <span className="location_2">{nameOfCity}</span>
                </div>
                <div className="weather_info">
                    <div className="info"><span className="temp hr">Temperature</span><span className="value">{temp}°c</span> </div>
                    <div className="info"><span className="w_speed hr">wind_speed</span><span className="value">{wSpeed} m/s</span>  </div>
                    <div className="info"><span className="visib hr">Visibility</span><span className="value">{Visibility} m</span> </div>
                    <div className="info"><span className="humid hr">Humidity</span><span className="value">{humidity}%</span> </div>
                </div>

            </div>
        </div>
        <p2 className="tag_line">Developed by <b>Abdul Rehman</b> | Powered with <b>Love</b></p2>
    </div>
    );
}
