import React, { useState } from "react";
import { FaSync, FaHeart, FaTrash } from "react-icons/fa";
import ErrorModal from "../ErrorModal/ErrorModal.jsx";
import { Card, Header, ForecastButtons, Button, Icon, Temperature, SeeMore, IconsCont } from "./Card.js";
import Container from "../Container/Container.jsx";

function WeatherCard({ weather, isLoggedIn, favorites, setFavorites, setShowHourly, setShowWeekly, setShowDetails, showHourly, showWeekly, showDetails }) {
    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const showModal = (message) => {
        setModalMessage(message);
        setOpen(true);
        setTimeout(() => setOpen(false), 111000);
    };

    const handleFavorite = () => {
        if (!isLoggedIn) {
            showModal("You must be logged in to add favorites");
            return;
        }
        if (!favorites.some(fav => fav.city === weather.city)) {
            setFavorites([...favorites, weather]);
        }
    };

    const handleRemoveFavorite = () => {
        if (!isLoggedIn) return;
        setFavorites(favorites.filter(fav => fav.city !== weather.city));
    };

    const requireLogin = (action) => {
        if (!isLoggedIn) {
            showModal("You must be logged in for this action.");
            return;
        }
        action();
    };

    return (
        <Card>
            <Container>
                <Header>
                    <p>{weather.city}</p>
                    <p>{weather.country}</p>
                </Header>
                <h4>{weather.time}</h4>
                <ForecastButtons>
                    <Button onClick={() => requireLogin(() => setShowHourly(!showHourly))} style={{ background: showHourly ? "#fca311" : "#FFB36C" }}>
                        Hourly forecast
                    </Button>
                    <Button onClick={() => requireLogin(() => setShowWeekly(!showWeekly))} style={{ background: showWeekly ? "#fca311" : "#FFB36C" }}>
                        Weekly forecast
                    </Button>
                </ForecastButtons>
                <p>{weather.date}</p>
                <Icon>
                    <img src={weather.icon} alt="Weather icon" />
                </Icon>
                <Temperature>{weather.temperature}°C</Temperature>

                <IconsCont>
                    <FaSync style={{ cursor: "pointer" }} />
                    <FaHeart onClick={handleFavorite} style={{ cursor: "pointer", color: favorites.some(fav => fav.city === weather.city) ? "red" : "gray" }} />
                    <SeeMore onClick={() => requireLogin(() => setShowDetails(!showDetails))} style={{ background: showDetails ? "#fca311" : "#FFB36C" }}>
                        See more
                    </SeeMore>
                    <FaTrash onClick={handleRemoveFavorite} style={{ cursor: "pointer", color: "gray" }} />
                </IconsCont>
            </Container>
            {open && <ErrorModal message={modalMessage} onClose={() => setOpen(false)} />}
        </Card>
    );
}

export default WeatherCard;
