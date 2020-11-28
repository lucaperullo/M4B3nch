import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.setState({ comments: this.props.comments });
  };

  render() {
    return (
      <>
        {this.state.loading && (
          <div className="w-100 my-2 d-flex justify-content-center">
            <span>Loading comments...</span>
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <ListGroup variant="flush" className="w-100">
          {this.props.comments.length > 0 &&
            this.props.comments.map((comment, index) => (
              <SingleComment
                commentObj={comment}
                key={index}
                onFetch={this.props.onFetch}
              />
            ))}
        </ListGroup>
      </>
    );
  }
}
export default CommentList;
