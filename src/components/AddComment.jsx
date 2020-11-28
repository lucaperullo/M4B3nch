import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class AddComment extends React.Component {
  state = {
    comment: {
      comment: "",
      rate: 3,
      elementId: this.props.bookId,
    },
    errMessage: "",
  };

  updateCommentField = (e) => {
    let comment = { ...this.state.comment };
    let currentId = e.currentTarget.id;
    comment[currentId] = e.currentTarget.value;
    this.setState({ comment: comment });
  };

  componentDidMount = () => {
    console.log(this.props.movieId);
  };

  componentDidUpdate = (previousProps) => {
    if (previousProps.movieId !== this.state.comment.elementId) {
      this.setState({
        comment: {
          comment: "",
          rate: 3,
          elementId: this.props.movieId,
        },
      });
      console.log(this.state.comment);
    }
  };

  submitComment = async (e) => {
    e.preventDefault();
    console.log(this.state.comment.elementId);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmMyODMxZjk1YTU0MTAwMTc2ZTFhMmQiLCJpYXQiOjE2MDY1ODMwNzEsImV4cCI6MTYwNzc5MjY3MX0.SK0ZjJJP36C1pMQ3nh3ZE85_GUljO4haPUFyVTeYIHc",
          },
        }
      );
      if (response.ok) {
        alert("Comment posted");
        this.setState({
          comment: {
            comment: "",
            rate: 3,
            elementId: this.props.movieId,
          },
        });
        this.props.onFetch();
      } else {
        console.log("uh oh stinky");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (e) {
      console.log(e);
      this.setState({
        errMessage: e.message,
      });
    }
  };

  render() {
    return (
      <Container id="AddComment">
        <h5>Add Comment:</h5>
        <Form onSubmit={this.submitComment}>
          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label htmlFor="comment">Comment:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comment"
                  id="comment"
                  placeholder="What did you think?"
                  value={this.state.comment.comment}
                  onChange={this.updateCommentField}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={6}>
              <Form.Group>
                <Form.Label htmlFor="rate">Rating:</Form.Label>
                <Form.Control
                  as="select"
                  name="rate"
                  id="rate"
                  value={this.state.comment.rate}
                  onChange={this.updateCommentField}
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Button
                type="sumbit"
                variant="success"
                value="Submit"
                className="w-100 h-100"
              >
                Submit{" "}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default withRouter(AddComment);
