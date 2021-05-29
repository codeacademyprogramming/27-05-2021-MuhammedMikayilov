import { Box } from "@material-ui/core";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Box>
      <Box width="1024px" margin="0 auto">
        <div>
          <Navbar color="transparent" light expand="md">
            <NavbarBrand href="/">
              <img
                src={process.env.PUBLIC_URL + "starbucks.png"}
                width="50"
                alt="logo"
              />
              Starbucks
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Box marginRight="15px">
                    <Link to="/order_list">Order List</Link>
                  </Box>
                </NavItem>
                <NavItem>
                  <Box>
                    <Link to="/coffees">Coffees List</Link>
                  </Box>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </Box>
    </Box>
  );
}

export default Header;
