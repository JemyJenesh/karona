import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Sidebar as Nav, Checkbox } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);
  return (
    <Nav
      as={Menu}
      animation="overlay"
      onHide={() => setVisible(false)}
      vertical
      visible={visible}
      inverted={dark}
      style={{
        width: 260,
        borderRight: "2px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <Menu.Item style={{ textAlign: "center", fontSize: 24, padding: 16 }}>
        Karona
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" exact>
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/hospitals">
        Hospitals
      </Menu.Item>
      <Menu.Item as={NavLink} to="/questions">
        Questions
      </Menu.Item>
      <Menu.Item as={NavLink} to="/myths">
        Myths
      </Menu.Item>
      <Menu.Item as={NavLink} to="/data">
        World data
      </Menu.Item>
      <Menu.Item style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          toggle
          style={{ marginRight: 8 }}
          onChange={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          checked={dark}
        />
        {dark ? "Switch to bright mode" : "Switch to dark mode"}
      </Menu.Item>
    </Nav>
  );
};

export default Sidebar;
