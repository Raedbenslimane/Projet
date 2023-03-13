import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import { AddMovie } from "../Redux/Movieslice";

const Add = () => {
  const [newMovie, setnewMovie] = useState({});
  const HandleChange = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const Add = (e) => {
    e.preventDefault();
    dispatch(AddMovie(newMovie));
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          onChange={HandleChange}
          name="name"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          onChange={HandleChange}
          name="description"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          onChange={HandleChange}
          name="categories"
          aria-label="Example text with two button addons"
        />
      </InputGroup>

      <InputGroup>
        <Form.Control
          onChange={HandleChange}
          name="url"
          aria-label="Recipient's username with two button addons"
        />

        <Button onClick={Add} variant="outline-secondary">
          Button
        </Button>
      </InputGroup>
    </div>
  );
};

export default Add;
