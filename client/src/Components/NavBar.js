import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../Redux/UserSlice";

const NavBar = () => {
  const isAuth = useSelector((state) => state.User.isAuth);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {isAuth ? (
              <>
                {" "}
                <Button
                  onClick={() => {
                    dispatch(LogOut());
                  }}
                >
                  {" "}
                  LogOut
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link as={Link} to="/">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/Add">
                  AddMovie
                </Nav.Link>
                <Nav.Link as={Link} to="/MovieCard">
                  MovieList
                </Nav.Link>{" "}
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
