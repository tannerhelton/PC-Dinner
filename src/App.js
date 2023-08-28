import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Replace this URL with your Google Sheet's published URL in CSV format
    const url =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBPL_ZLQYxnEPKr9DwYBFsRf-x3fGYFeNFjIEDd0-WHwH-V5J1PthRNZfdjuF7pbDx3PqTGrzKK2mU/pub?output=csv";

    axios
      .get(url)
      .then((response) => {
        const rows = response.data.split("\n");
        setRestaurants(rows);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dinner Picks</h1>
        <ul>
          {restaurants.map((restaurant, index) => (
            <li key={index} className={index === 2 ? "bold" : ""}>
              {restaurant}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
