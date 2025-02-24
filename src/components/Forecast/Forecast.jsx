import React, { useState, useEffect } from "react";
import {
    ForecastContainer,
    Title,
    DayContainer,
    DateText,
    WeatherIcon,
    TempText,
    ConditionText,
    Wrap
} from "./Forecast.js";
import Container from "../Container/Container.jsx";
function Forecast({ searchCity }) {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        if (searchCity) {
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=044caffa9ff0495d929181225251102&q=${searchCity}&days=8&aqi=no&alerts=no`)
                .then(response => response.json())
                .then(data => {
                    setForecast(data.forecast.forecastday);
                });
        }
    }, [searchCity]);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <ForecastContainer>
            <Container>
                <Title>8-day forecast</Title>
                <Wrap>
                    {forecast && forecast.map((day, index) => (
                        <DayContainer key={index}>
                            <DateText>{formatDate(day.date)}</DateText>
                            <TempText><WeatherIcon src={day.day.condition.icon} alt={day.day.condition.text} />
                                {day.day.maxtemp_c}/{day.day.mintemp_c}°C</TempText>
                            <ConditionText>{day.day.condition.text}</ConditionText>
                        </DayContainer>
                    ))}
                </Wrap>
            </Container>
        </ForecastContainer>
    );
}

export default Forecast;
