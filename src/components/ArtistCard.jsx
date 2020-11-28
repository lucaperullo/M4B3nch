import React from "react";
import { Col, Card, Alert, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class ArtistCard extends React.Component {
  state = {
    genre: 152,
    artists: [],
    loading: true,
  };
  componentDidMount = () => {
    console.log("GENRE ON Mount IN ArtistCard", this.props.genre);
    this.setState({ genre: this.props.genre });
    this.fetchArtists();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.genre !== this.props.genre) {
      console.log("PREVIOUS GENRE IS DIFFERENT TO THIS ONE");
      this.setState({ genre: this.props.genre });
      this.setState({ loading: true });
      console.log("GENRE ON Update BEFORE FETCHING", this.state.genre);
      this.fetchArtists();
      console.log("GENRE ON Update AFTER FETCHING", this.state.genre);
    }
  };
  fetchArtists = async (g) => {
    let response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/genre/` +
        this.props.genre +
        `/artists`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    let parsedResponse = await response.json();
    this.setState({ artists: parsedResponse.data });
    this.setState({ loading: false });
    console.log(parsedResponse.data);
  };
  render() {
    if (this.state.artists) {
      if (this.state.loading === true) {
        return (
          <div className="w-100 text-center" style={{ color: "white" }}>
            Loading... <Spinner animation="border" variant="primary" />
          </div>
        );
      } else {
        return this.state.artists.map((artist, index) => (
          <Col
            xs={12}
            sm={6}
            lg={4}
            xl={2}
            key={index}
            onClick={() => this.props.history.push("/artist/" + artist.id)}
          >
            <Card>
              <Card.Img
                variant="top"
                src={artist.picture_xl}
                alt="artistImage"
              />
              <Card.Body>
                <Card.Text className="text-center">{artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ));
      }
    } else {
      return <h1>uh oh</h1>;
    }
  }
}

export default withRouter(ArtistCard);
