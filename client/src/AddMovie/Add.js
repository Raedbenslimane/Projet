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
  const [image, setImage] = useState();
  const Imagechange = (e) => {
    setImage(e.target.files);
  };
  const dispatch = useDispatch();
  const Add = (e) => {
    e.preventDefault();

    const MovieData = new FormData();
    MovieData.append("name", newMovie.name);
    MovieData.append("description", newMovie.description);
    MovieData.append("categories", newMovie.categories);
    MovieData.append("url", newMovie.url);
    MovieData.append("Img", image);
    dispatch(AddMovie(MovieData));
  };
  return (
    <div className="AddM">
      <InputGroup style={{ width: "700px" }} className="mb-3">
        <Form.Control
          style={{ width: "500px" }}
          onChange={HandleChange}
          name="name"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup style={{ width: "700px" }} className="mb-3">
        <Form.Control
          style={{ width: "500px" }}
          onChange={HandleChange}
          name="description"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

      <InputGroup style={{ width: "700px" }} className="mb-3">
        <Form.Control
          style={{ width: "500px" }}
          onChange={HandleChange}
          name="categories"
          aria-label="Example text with two button addons"
        />
      </InputGroup>
      <InputGroup style={{ width: "700px" }} className="mb-3">
        <Form.Control
          type="file"
          style={{ width: "500px" }}
          onChange={Imagechange}
          name="Img"
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup style={{ width: "700px" }}>
        <Form.Control
          onChange={HandleChange}
          name="url"
          aria-label="Recipient's username with two button addons"
        />

        <Button onClick={Add} variant="outline-secondary">
          Add
        </Button>
      </InputGroup>
    </div>
  );
};

export default Add;
