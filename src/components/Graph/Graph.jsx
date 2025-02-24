import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ContainerGraph, GraphWrapper, TitleGraph } from "./Graph.js";
import Container from "../Container/Container.jsx";
const Graph = ({ searchCity }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchCity) {
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=1&appid=6186c3d77edb36858d42718191fb5020`)
        .then((res) => res.json())
        .then(([geoData]) => {
          if (!geoData) throw new Error("Місто не знайдено");
          return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&appid=6186c3d77edb36858d42718191fb5020`);
        })
        .then((res) => res.json())
        .then((result) => {
          if (!result.list) throw new Error("Помилка");
          setData(
            result.list.slice(0, 13 ).map((entry) => ({
              time: `${new Date(entry.dt * 1000).getHours()}:00`,
              temp: entry.main.temp,
            }))
          );
        })
        .catch((error) => console.error("Помилка:", error));
    }
  }, [searchCity]);

  return (
    <ContainerGraph>
      <Container>
      <TitleGraph>Hourly forecast</TitleGraph>
      <GraphWrapper>
        <ResponsiveContainer width="100%" height={426}>
          <LineChart data={data}>
            <XAxis dataKey="time" tick={{ fontSize: 13}} axisLine={false} tickLine={false} />
            <YAxis domain={["auto", "auto"]} tick={{ fontSize: 13 }} />
            <Tooltip />
            <Line type="monotone" dataKey="temp" stroke="#FF914D" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </GraphWrapper>
      </Container>
    </ContainerGraph>
  );
};

export default Graph;
