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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmMyODMxZjk1YTU0MTAwMTc2ZTFhMmQiLCJpYXQiOjE2MDY1ODMwNzEsImV4cCI6MTYwNzc5MjY3MX0.SK0ZjJJP36C1pMQ3nh3ZE85_GUljO4haPUFyVTeYIHc",
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
