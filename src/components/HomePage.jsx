import React from "react";
import HomeNav from "./HomeNav";
import HomeBody from "./HomeBody";
import { Container } from "react-bootstrap";

class HomePage extends React.Component {
  state = {
    genre: 152,
  };
  fetchGenre = (selectedGenre) => {
    this.setState({ genre: selectedGenre });
    console.log("GENRE IN HomePage", this.state.genre);
  };
  render() {
    return (
      <Container
        fluid
        id="mainBody"
        className="color-change-5x"
        style={{ paddingBottom: "100px" }}
      >
        <HomeNav getGenre={this.fetchGenre} />
        <HomeBody genre={this.state.genre} />
      </Container>
    );
  }
}

export default HomePage;
