import "rsuite/lib/styles/index.less";
import {
  Nav,
  Navbar,
  Dropdown,
  Icon,
  Container,
  Header,
  Content,
  Footer,
} from "rsuite";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import React from "react";
import { RentalItems, Home, Users } from "./pages";
import { useWindowDimensions } from "./useWindowDimentions";
import { Logo } from "./driller.icon";

const NavLink = React.forwardRef((props, ref) => {
  const location = useLocation();
  return (
    <Nav.Item
      {...props}
      ref={ref}
      active={props.to === location.pathname}
      componentClass={Link}
    />
  );
});

const navBarBrandLogo = {
  padding: "5px 5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "bold",
};

const NavBarInstance = ({ ...props }) => {
  return (
    <Navbar {...props} appearance="inverse">
      <Navbar.Header style={navBarBrandLogo}>
        <Logo
          alt="logo"
          style={{ height: "70%", width: "auto", fill: "white" }}
        />
        れんたるさいと
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <NavLink to="/" icon={<Icon icon="home" />}>
            Home
          </NavLink>
          <NavLink to="/rental/items">レンタル商品一覧</NavLink>
          <NavLink to="/users">ユーザ一覧</NavLink>
          <Dropdown title="About">
            <Dropdown.Item eventKey="4">Company</Dropdown.Item>
            <Dropdown.Item eventKey="5">Team</Dropdown.Item>
            <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

function App() {
  const { width, height } = useWindowDimensions();

  return (
    <Container>
      <Router>
        <Header>
          <NavBarInstance />
        </Header>
        <Content
          style={{
            height: height * 0.95,
            width: width * 0.9,
            marginTop: 10,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Switch>
            <Route path="/rental/items">
              <RentalItems />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Router>
    </Container>
  );
}

export default App;
