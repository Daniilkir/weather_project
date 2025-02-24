import React, { useState, useEffect } from "react";
import {
    DetailsContainer,
    DetailBox,
    DetailTitle,
    DetailValue,
    DetailIcon
} from "./WeatherDetails.js";
import Container from "../Container/Container.jsx";

import tempIcon from "../../images/tempIcon.png";
import humidityIcon from "../../images/humidityIcon.png";
import pressureIcon from "../../images/pressureIcon.png";
import windIcon from "../../images/windIcon.png";
import visibilityIcon from "../../images/visibilityIcon.png";

function WeatherDetails({ searchCity }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (searchCity) {
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=044caffa9ff0495d929181225251102&q=${searchCity}&days=1&aqi=no&alerts=no`)
                .then(response => response.json())
                .then(data => {
                    setWeatherData({
                        feelsLike: data.current.feelslike_c,
                        minTemp: data.forecast.forecastday[0].day.mintemp_c,
                        maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
                        humidity: data.current.humidity,
                        pressure: data.current.pressure_mb,
                        windSpeed: data.current.wind_kph,
                        visibility: data.current.vis_km
                    });
                })
                .catch(error => console.error("Ошибка загрузки данных:", error));
        }
    }, [searchCity]);

    if (!weatherData) {
        return <p>Loading...</p>;
    }

    return (
        <DetailsContainer>
            <Container>
                <DetailBox>
                    <DetailTitle>Feels like</DetailTitle>
                    <DetailValue>{weatherData.feelsLike}°C</DetailValue>
                    <DetailIcon src={tempIcon} alt="Temperature" />
                </DetailBox>

                <DetailBox>
                    <DetailTitle>Min °C</DetailTitle>
                    <DetailValue>{weatherData.minTemp}°C</DetailValue>
                    <DetailTitle>Max °C</DetailTitle>
                    <DetailValue>{weatherData.maxTemp}°C</DetailValue>
                </DetailBox>
        
                <DetailBox>
                    <DetailTitle>Humidity</DetailTitle>
                    <DetailValue>{weatherData.humidity}%</DetailValue>
                    <DetailIcon src={humidityIcon} alt="Humidity" />
                </DetailBox>

                <DetailBox>
                    <DetailTitle>Pressure</DetailTitle>
                    <DetailValue>{weatherData.pressure} Pa</DetailValue>
                    <DetailIcon src={pressureIcon} alt="Pressure" />
                </DetailBox>

                <DetailBox>
                    <DetailTitle>Wind speed</DetailTitle>
                    <DetailValue>{weatherData.windSpeed} km/h</DetailValue>
                    <DetailIcon src={windIcon} alt="Wind Speed" />
                </DetailBox>

                <DetailBox>
                    <DetailTitle>Visibility</DetailTitle>
                    <DetailValue>{weatherData.visibility} km</DetailValue>
                    <DetailIcon src={visibilityIcon} alt="Visibility" />
                </DetailBox>
            </Container>
        </DetailsContainer>
    );
}

export default WeatherDetails;
