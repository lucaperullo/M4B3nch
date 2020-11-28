import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./components/NavBar";
import FooterPlayer from "./components/FooterPlayer";
import HomePage from "./components/HomePage";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import "./App.css";

class App extends React.Component {
  state = {
    song: {},
    image: "",
  };
  selectedSong = (selected, image) => {
    this.setState({ song: selected });
    this.setState({ image: image });
  };
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route
          path="/artist/:id"
          render={(props) => <ArtistPage {...props} />}
        />
        <Route
          path="/album/:id"
          render={(props) => (
            <AlbumPage selectedSong={this.selectedSong} {...props} />
          )}
        />
        <FooterPlayer song={this.state.song} image={this.state.image} />
      </BrowserRouter>
    );
  }
}

export default App;
