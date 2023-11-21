import React, { useEffect, useRef, useContext } from "react";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../stores/GlobalContext";
import Cart from "./Cart";
import EditCart from "./EditCart";

const AddCart = () => {
  const {
    editedItem,
    removeAllItems,
    handleInputChange,
    addItems,
    disableBtn,
    passwordLength,
    employee,
  } = useContext(GlobalContext);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <h1 className="my-2 text-primary">
          Todo <span className="text-danger">UseContext</span>
        </h1>
        <div className="bg-dark-subtle w-50 text-center rounded  border border-primary">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={employee.fullName}
              onChange={handleInputChange}
              ref={inputRef}
              className="p-2 w-75 my-2 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={employee.email}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Position"
              name="position"
              value={employee.position}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={employee.age}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={employee.password}
              onChange={handleInputChange}
              className="p-2 w-75 my-1 border border-primary rounded"
            />
          </div>
          <p className={`text-${passwordLength ? "danger" : "success"}`}>
            {passwordLength ? "Weak" : "Strong"}
          </p>
          <Button className="m-2 px-4" onClick={addItems} disabled={disableBtn}>
            Add
          </Button>

          <Button
            className="m-2 px-2"
            variant="danger"
            onClick={removeAllItems}
          >
            Remove
          </Button>
        </div>

        <Cart />

        {editedItem && <EditCart />}
      </div>
    </>
  );
};

export default AddCart;
