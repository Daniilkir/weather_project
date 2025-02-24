import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import WeatherCard from "../Card/Card.jsx";
import FavoriteList from "../FavList/FavList.jsx";
import { HeroContainer,Title, Subtitle, SearchContainer, SearchInput, SearchButton, Divider,MobileSpan,DeviceSpan } from "./Hero.js";
import Container from "../Container/Container.jsx";

function Hero({ searchCity, setSearchCity, isLoggedIn, setShowHourly, setShowWeekly, showHourly, showWeekly, setShowDetails, showDetails }) {
    const today = new Date();
    const monthYear = today.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    const fullDate = today.toLocaleDateString("en-US", { weekday: "long", day: "numeric" });

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        if (searchCity) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=b198dea0aa06e32e05c42cfa2ebe8620&units=metric`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod !== 200) {
                        setWeather(null);
                        return;
                    }
                    const localDateObj = new Date(data.dt * 1000);
                    setWeather({
                        city: data.name,
                        country: data.sys.country,
                        date: localDateObj.toLocaleDateString("ua-UA"),
                        time: localDateObj.toLocaleTimeString("ua-UA"),
                        temperature: data.main.temp,
                        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                    });
                });
        }
    }, [searchCity]);

    const handleSearch = () => setSearchCity(city);

    return (
        <div>

            <HeroContainer>

            <Container>


                    <Title>Weather Dashboard</Title>
                    <Subtitle>
                        <DeviceSpan>Create your personal list of favorite cities and always be aware of the weather.</DeviceSpan>
                        <Divider />
                        <div style={{ display: "flex", flexDirection: "column" }}>
        <MobileSpan>Create your personal list of favorite cities and always be aware of the weather.</MobileSpan>
        <span>{monthYear}<br />{fullDate}</span>
    </div>
                    </Subtitle>
                    <SearchContainer>
                        <SearchInput type="text" placeholder="Search location..." value={city} onChange={(e) => setCity(e.target.value)} />
                        <SearchButton onClick={handleSearch}>
                            <FaSearch fill="black" />
                        </SearchButton>
                    </SearchContainer>
                </Container>
            </HeroContainer>
            {weather && (
                <WeatherCard weather={weather} isLoggedIn={isLoggedIn} favorites={favorites} setFavorites={setFavorites} setShowHourly={setShowHourly} setShowWeekly={setShowWeekly} setShowDetails={setShowDetails} showHourly={showHourly} showWeekly={showWeekly} showDetails={showDetails} />
            )}
            {isLoggedIn && favorites.length > 0 && <FavoriteList favorites={favorites} setFavorites={setFavorites} />}
        </div>
    );
}

export default Hero;
