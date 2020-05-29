import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Home from "./pages/Home";

const App = () => {
  const [visible, setVisible] = useState(false);
  const dark = useSelector((state) => state.theme.dark);

  return (
    <BrowserRouter>
      <Segment
        inverted={dark}
        style={{
          minHeight: "100vh",
          paddingTop: "6rem",
          paddingLeft: 0,
          paddingRight: 0,
          borderRadius: 0,
        }}
      >
        <Sidebar visible={visible} setVisible={setVisible} />
        <Navbar visible={visible} setVisible={setVisible} />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Container>
      </Segment>
    </BrowserRouter>
  );
};

export default App;
