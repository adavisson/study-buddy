import React, { useState } from 'react';
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
            name='general'
            active={activeItem === 'general'}
            onClick={handleItemClick}
            href="/general"
          >General</Dropdown.Item>
          <Dropdown.Item
            name='java'
            active={activeItem === 'java'}
            onClick={handleItemClick}
            href="/java"
          >Java</Dropdown.Item>
          <Dropdown.Item
            name='javascript'
            active={activeItem === 'javascript'}
            onClick={handleItemClick}
            href="/js"
          >JavaScript</Dropdown.Item>
          <Dropdown.Item
            name='react-redux'
            active={activeItem === 'react-redux'}
            onClick={handleItemClick}
            href="/react-redux"
          >React/Redux</Dropdown.Item>
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
          <Dropdown.Item
            name="testing"
            active={activeItem === 'testing'}
            onClick={handleItemClick}
            href="/testing"
          >Testing</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position="right">
        <Menu.Item
          name='website'
          active={activeItem === 'website'}
          onClick={handleItemClick}
          href="https://andydavisson.com"
        >andydavisson.com</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
 
export default HomeMenu;