import React, { useState } from 'react';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Forecast from './components/Forecast/Forecast.jsx';
import Header from './components/Header/Header.jsx';
import { GlobalStyles } from './GlobalStyles.js';
import { Page } from './GlobalStyles.js';
import Pets from './components/Pets/Pets.jsx';
import Graph from './components/Graph/Graph.jsx';
import WeatherDetails from './components/WeatherDetails/WeatherDetails.jsx';
import Carusel from './components/Carusel/Carusel.jsx';

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHourly, setShowHourly] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="App">
      <Page>
        <GlobalStyles />
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Hero
          isLoggedIn={isLoggedIn}
          setSearchCity={setSearchCity}
          searchCity={searchCity}
          setShowHourly={setShowHourly}
          setShowWeekly={setShowWeekly}
          showHourly={showHourly}
          showWeekly={showWeekly}
          setShowDetails={setShowDetails}
          showDetails={showDetails}
        />
        {isLoggedIn && (
          <>
            {showDetails && <WeatherDetails searchCity={searchCity} />}
            {showHourly && <Graph searchCity={searchCity} />}
            {showWeekly && <Forecast searchCity={searchCity} />}
          </>
        )}
        <div id="gallery">
          <Carusel />
        </div>
        <div id="puppies">
          <Pets />
        </div>
      </Page>
      <div id="contacts">
        <Footer />
      </div>
    </div>
  );
}

export default App;
