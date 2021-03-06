import React from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import Home from "./Home";

const Detail = (props) => {
  const params = useParams();
  alert(params.id);

  return (
    <div className="mb-5">
      <h2>Album Details</h2>

      <div className="font-bold d-flex justify-content-center">
        <span>Getting Data</span>
        <Spinner animation="border" variant="success" />
      </div>

      <ListGroup>
        <ListGroup.Item>AlbumID: {id}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Detail;
