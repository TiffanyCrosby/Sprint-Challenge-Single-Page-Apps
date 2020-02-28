import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodesList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}><WelcomePage /></Route >
      <Route path="/characters" component={CharacterList}><CharacterList /></Route>
      <Route path="/locations" component={LocationsList}><LocationsList /></Route>
      <Route path="/episodes" component={EpisodeList}><EpisodeList /></Route>
    </main >
  );
}