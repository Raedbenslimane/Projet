import React, { useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMovie, getall } from "../Redux/Movieslice";
import { Link } from "react-router-dom";

import Updatemovies from "../Components/Updatemovie";

const MovieCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getall());
  }, []);
  const movies = useSelector((state) => state.Movie.movies);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        marginLeft: "150px",
        position: "absolute",

        top: "36%",
        gap: "40px",
      }}
    >
      {movies?.map((el) => (
        <Row>
          <Col style={{ width: "18rem" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ width: "18 rem", height: "370px" }}
                src={el.Img.imgUrl}
              />
              <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
                <Card.Text>{el.categories}</Card.Text>
                <Link to={`${el.url}`}>WATCH NOW</Link>
                <Updatemovies el={el} />
                <Button
                  id="D"
                  variant="primary"
                  onClick={() => dispatch(DeleteMovie(el._id))}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default MovieCard;
