import React, { useEffect, useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { GlobalContext } from "../stores/GlobalContext";

const Cart = () => {
  const { deleteItems, openModal, cartItems, setCartItems } =
    useContext(GlobalContext);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-3 flex-wrap ">
        {cartItems.map((cart) => (
          <div key={cart.id} className="mx-2">
            <Col key={cart.id} className="my-2">
              <Card
                style={{ width: "22rem" }}
                className="mt-3 bg-dark-subtle text-center py-4 border border-primary"
              >
                <Card.Body>
                  <Card.Title>FullName : {cart.fullName}</Card.Title>
                  <Card.Title>Email : {cart.email}</Card.Title>
                  <Card.Title>Position : {cart.position}</Card.Title>
                  <Card.Title>Age : {cart.age}</Card.Title>
                  <Button className="me-2 mt-2" onClick={() => openModal(cart)}>
                    <AiFillEdit size={30} />
                  </Button>
                  <Button
                    variant="danger"
                    className="mt-2"
                    onClick={() => deleteItems(cart.id)}
                  >
                    <AiTwotoneDelete size={30} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
