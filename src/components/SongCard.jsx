import React from "react";
import { Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SongCard extends React.Component {
  render() {
    return (
      <Col
        xs={12}
        sm={6}
        lg={4}
        xl={2}
        onClick={() =>
          this.props.history.push("/album/" + this.props.song.album.id)
        }
      >
        <Card>
          <Card.Img
            variant="top"
            src={this.props.song.album.cover_xl}
            alt="artistImage"
          />
          <Card.Body>
            <Card.Text className="text-center">
              {this.props.song.title_short}
            </Card.Text>
            <Card.Text className="text-center">
              {this.props.song.album.title}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default withRouter(SongCard);
