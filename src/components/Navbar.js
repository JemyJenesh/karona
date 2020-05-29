import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";

import {
  Menu,
  Container,
  Responsive,
  Button,
  Icon,
  Popup,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);

  return (
    <Menu
      inverted={dark}
      secondary={dark}
      pointing={dark}
      fixed="top"
      size="large"
      style={{ background: dark ? "#1B1C1D" : "white" }}
    >
      <Container>
        <Menu.Item
          style={{
            fontSize: 18,
            fontWeight: "bolder",
            marginRight: "auto",
          }}
          active={dark}
        >
          Karona
        </Menu.Item>
        <Responsive as={Fragment} minWidth={768}>
          <Menu.Item
            activeClass="active item"
            as={Link}
            to="home"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
          >
            Home
          </Menu.Item>
          <Menu.Item
            activeClass="active item"
            as={Link}
            to="news"
            spy={true}
            offset={-70}
            smooth={true}
            duration={500}
          >
            News
          </Menu.Item>
          <Menu.Item as={Link} to="/questions">
            Questions
          </Menu.Item>
          <Menu.Item as={Link} to="/myths">
            Myths
          </Menu.Item>
          <Popup
            inverted={dark}
            content={dark ? "Toggle bright mode" : "Toggle dark mode"}
            size="tiny"
            trigger={
              <Menu.Item onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}>
                <Icon name={dark ? "sun" : "moon"} size="large" />
              </Menu.Item>
            }
          />
        </Responsive>
        <Menu.Item as={Responsive} maxWidth={767}>
          <Button
            basic
            inverted={dark}
            icon={visible ? "close" : "sidebar"}
            onClick={() => setVisible(!visible)}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Navbar;
