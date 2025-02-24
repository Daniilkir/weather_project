import React from "react";
import { FaTrash } from "react-icons/fa";
import { FavoritesContainer, Card, Header, Icon, Temperature, CardList,Title } from "./FavList.js";
import Container from "../Container/Container.jsx";
function FavoriteList({ favorites, setFavorites }) {
    const handleRemoveFavorite = (cityToRemove) => {
        setFavorites(favorites.filter(fav => fav.city !== cityToRemove));
    };

    return (
        <FavoritesContainer>
            <Container>
                <Title>Favorite Weathers</Title>
                <CardList>
                    {favorites.map((fav, index) => (
                        <Card key={index}>
                            <Header>
                                <p>{fav.city}</p>
                                <p>{fav.country}</p>
                            </Header>
                            <h4>{fav.time}</h4>
                            <p>{fav.date}</p>
                            <Icon>
                                <img src={fav.icon} alt="Weather icon" />
                            </Icon>
                            <Temperature>{fav.temperature}°C</Temperature>
                            <FaTrash onClick={() => handleRemoveFavorite(fav.city)} style={{ cursor: "pointer", color: "gray" }} />
                        </Card>
                    ))}
                </CardList>
            </Container>
        </FavoritesContainer>
    );
}

export default FavoriteList;
