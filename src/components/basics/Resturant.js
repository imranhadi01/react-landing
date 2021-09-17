import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
