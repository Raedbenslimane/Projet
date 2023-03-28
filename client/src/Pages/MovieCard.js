import React, { useEffect } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { getall } from "../Redux/Movieslice";

const MovieCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getall());
  }, []);
  const movies = useSelector((state) => state.Movie.movies);

  return (
    <div>
      {movies?.map((el) => (
        <div>
          <h2>
            {" "}
            <Row
              style={{
                width: "18 rem",
                height: "200px",
                display: "grid",
                gridTemplateColumns: "auto auto auto",
              }}
              xs={1}
              md={2}
              className="g-4"
            >
              {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{el.name}</Card.Title>
                      <Card.Text>{el.description}</Card.Text>
                      <Card.Text> {el.categories}</Card.Text>
                      <Card.Text> {el.url} </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
