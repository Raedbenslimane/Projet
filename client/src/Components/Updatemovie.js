import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatemovie } from "../Redux/Movieslice";

const Updatemovies = ({ el }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [UpdateM, setUpdateM] = useState({ _id: el._id });
  const HandleChange = (e) => {
    setUpdateM({ ...UpdateM, [e.target.name]: e.target.value });
  };
  const modifier = (e) => {
    e.preventDefault();
    dispatch(updatemovie(UpdateM));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Modifer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              defaultValue={el.name}
              onChange={HandleChange}
              name="name"
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              defaultValue={el.description}
              onChange={HandleChange}
              name="description"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              defaultValue={el.categories}
              onChange={HandleChange}
              name="categories"
              aria-label="Example text with two button addons"
            />
          </InputGroup>

          <InputGroup>
            <Form.Control
              defaultValue={el.url}
              onChange={HandleChange}
              name="url"
              aria-label="Recipient's username with two button addons"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={modifier}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Updatemovies;
