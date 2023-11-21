import React, { useState, createContext, useCallback, useMemo } from "react";

const GlobalContext = createContext();

const initialState = {
  fullName: "",
  email: "",
  position: "",
  age: "",
  password: "",
};

const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [employee, setEmployee] = useState(initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const openModal = (cart) => {
    setIsModalOpen(true);
    setEditedItem(cart);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditedItem(null);
  };

  const disableBtn =
    !employee.fullName?.trim() ||
    !employee.email?.trim() ||
    !employee.position?.trim() ||
    !employee.age?.trim() ||
    !employee.password?.trim();

  const passwordLength = useMemo(
    () => employee.password.length <= 8,
    [employee.password]
  );

  const addItems = useCallback(() => {
    const { fullName, email, position, age, password } = employee;
    const newList = [...cartItems];
    const newEmployee = {
      id: new Date().getTime(),
      fullName,
      email,
      position,
      age,
      password,
    };
    newList.push(newEmployee);
    setCartItems(newList);
    setEmployee(initialState);
    localStorage.setItem("cartItems", JSON.stringify(newList));
    // setCartItems((prevItems) => {
    //   const updatedItems = [...prevItems, newEmployee];
    //   localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    //   return updatedItems;
    // });
  }, [cartItems, employee]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const deleteItems = useCallback(
    (cartId) => {
      const deletedItem = cartItems.filter((cart) => cart.id !== cartId);
      setCartItems(deletedItem);
      localStorage.setItem("cartItems", JSON.stringify(deletedItem));
    },
    [cartItems]
  );

  const removeAllItems = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const saveEdit = useCallback(
    (editedEmployee) => {
      const editedItem = cartItems.map((cart) =>
        cart.id === editedEmployee.id ? editedEmployee : cart
      );
      setCartItems(editedItem);
      localStorage.setItem("cartItems", JSON.stringify(editedItem));
    },
    [cartItems]
  );

  const contextValue = {
    isModalOpen,
    editedItem,
    saveEdit,
    removeAllItems,
    deleteItems,
    handleInputChange,
    addItems,
    disableBtn,
    closeModal,
    openModal,
    passwordLength,
    employee,
    cartItems,
    setCartItems,
  };
  const Component = GlobalContext.Provider;

  return <Component value={contextValue}>{children}</Component>;
};

export { GlobalContext, GlobalProvider };
