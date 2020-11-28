import React from "react";
import { Container, ListGroup, Row } from "react-bootstrap";

class HomeNav extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="pt-4 align-items-center justify-content-center mb-5">
          <ListGroup horizontal>
            <ListGroup.Item onClick={() => this.props.getGenre(152)}>
              Rock
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre(132)}>
              Pop
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre(116)}>
              Rap
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre(173)}>
              Weeb
            </ListGroup.Item>
            <ListGroup.Item onClick={() => this.props.getGenre(129)}>
              Jazz
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
    );
  }
}

export default HomeNav;
