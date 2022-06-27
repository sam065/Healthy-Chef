import React from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './menuCard';
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
];
console.log(uniqueList)

const Restaurant = () => {

  const filterItem = (category) => {
    
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);
  
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData = {menuData} />
    </>
  );
};

export default Restaurant;