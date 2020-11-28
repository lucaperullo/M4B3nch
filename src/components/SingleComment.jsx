import React from "react";
import { Button, ListGroup, Badge } from "react-bootstrap";

class SingleComment extends React.Component {
  state = {
    errMessage: "",
  };

  removeComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentObj._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmMyODMxZjk1YTU0MTAwMTc2ZTFhMmQiLCJpYXQiOjE2MDY1ODMwNzEsImV4cCI6MTYwNzc5MjY3MX0.SK0ZjJJP36C1pMQ3nh3ZE85_GUljO4haPUFyVTeYIHc",
          },
        }
      );
      if (response.ok) {
        alert("Deleted");
        this.props.onFetch();
      } else {
        console.log("uh oh stinky");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (err) {
      console.log(err);
      this.setState({
        errMessage: err.message,
      });
    }
  };

  render() {
    return (
      <ListGroup.Item
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}
        className=" w-100 mb-1 d-flex justify-content-between align-items-center"
      >
        <Badge variant="success">
          {this.props.commentObj.rate ? this.props.commentObj.rate : "ERR"}
        </Badge>
        {console.log(this.props.commentObj)}
        <p className="m-0 px-3 text-center">
          "{this.props.commentObj.comment}" - {this.props.commentObj.author}
        </p>
        <Button onClick={(e) => this.removeComment(e)} variant="danger">
          X
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
