import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

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
      <Dropdown item text='Categories'>
        <Dropdown.Menu>
          <Dropdown.Item
            name='javascript'
            active={activeItem === 'javascript'}
            onClick={handleItemClick}
            href="/javascript"
          >JavaScript</Dropdown.Item>
          <Dropdown.Item
            name='ruby'
            active={activeItem === 'ruby'}
            onClick={handleItemClick}
            href="/ruby"
          >Ruby</Dropdown.Item>
          <Dropdown.Item
            name="html-css"
            active={activeItem === 'html-css'}
            onClick={handleItemClick}
            href="/html-css"
          >HTML/CSS</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}
 
export default HomeMenu;