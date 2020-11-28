import React from "react";
import { Row } from "react-bootstrap";
import ArtistCard from "./ArtistCard";

class HomeBody extends React.Component {
  render() {
    return (
      <Row>
        {console.log("GENRE IN HomeBody", this.props.genre)}
        <ArtistCard genre={this.props.genre} />
      </Row>
    );
  }
}

export default HomeBody;
