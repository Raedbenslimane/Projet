import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MovieCard = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");
  useEffect(() => {
    !isAuth && navigate("/Login");
  }, [isAuth]);
  return (
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
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </h2>
    </div>
  );
};

export default MovieCard;
