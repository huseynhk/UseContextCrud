import React, { useState, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { GlobalContext } from "../stores/GlobalContext";

const EditCart = () => {
  const { isModalOpen, closeModal, editedItem, saveEdit } =
    useContext(GlobalContext);
  const [editedEmployee, setEditedEmployee] = useState(editedItem);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedEmployee({
      ...editedEmployee,
      [name]: value,
    });
  };

  const updateEmployee = () => {
    saveEdit(editedEmployee);
    closeModal();
  };

  return (
    <>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={editedEmployee.fullName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editedEmployee.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={editedEmployee.position}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={editedEmployee.age}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={editedEmployee.password}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center align-items-center">
          <Button
            variant="primary"
            className="py-2 px-5"
            onClick={updateEmployee}
          >
            Save Employee
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditCart;
