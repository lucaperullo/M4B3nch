import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends React.Component {
  state = {
    comments: [],
  };
  componentDidMount = () => {
    this.fetchComments();
    console.log("fetching comments");
  };
  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.albumId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2UzZjk4MzViMDAwMTc1ODRlZmUiLCJpYXQiOjE2MDU3OTUzOTIsImV4cCI6MTYwNzAwNDk5Mn0.DfmIOMUkFDOn23K1S3KRRfRDXdq3PuQ85LIP5I7piVI",
          },
        }
      );
      let comments = await response.json();
      this.setState({ comments: comments });
      console.log(this.state.comments);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <Row>
        {this.state.comments && (
          <CommentList
            comments={this.state.comments}
            onFetch={this.fetchComments}
          />
        )}

        <AddComment movieId={this.props.albumId} onFetch={this.fetchComments} />
      </Row>
    );
  }
}

export default CommentArea;
