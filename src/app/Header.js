import React from 'react';

import {Button, ButtonGroup, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

import logo from './logo.png';
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <header className="taverna-header">
        <div className="taverna-logo-container">
          <img className="app-logo" src={logo} alt="logo"></img>
          <h1>Taverna do Herói</h1>
        </div>
        <div className="taverna-menu-buttons">
          <ButtonGroup size="lg">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Categorias
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Skins</DropdownItem>
                <DropdownItem>Roupas</DropdownItem>
                <DropdownItem>E-sport</DropdownItem>
                <DropdownItem>Coaching</DropdownItem>
                <DropdownItem>Cosplay</DropdownItem>
                <DropdownItem>Outros</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button>Cadastro</Button>{' '}
            <Button>Em alta</Button>
          </ButtonGroup>
        </div>
      </header>
    );
  }

  componentDidMount() {
    this.setState({someKey: 'otherValue'});
  }
}

export default Header;
