import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';

const HomeMenu = () => {
  const [ activeItem, setActiveItem ] = useState("");

  const handleItemClick = (event) => {
    setActiveItem(event.name);
  }

  return (
    <Menu>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        href="/"
      >Home</Menu.Item>
      <Menu.Item
        name='javascript'
        active={activeItem === 'javascript'}
        onClick={handleItemClick}
        href="/javascript"
      >JavaScript</Menu.Item>
      <Menu.Item
        name='ruby'
        active={activeItem === 'ruby'}
        onClick={handleItemClick}
        href="/ruby"
      >Ruby</Menu.Item>
    </Menu>
  );
}
 
export default HomeMenu;