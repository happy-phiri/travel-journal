import React from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const places = data.map((place) => {
    return <Card key={place.id} place={place} />;
  });
  return (
    <div>
      <NavBar />
      <main className="cards">{places}</main>
    </div>
  );
}

export default App;
