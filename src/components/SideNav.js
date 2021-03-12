import { Sidenav, Icon, Nav, DOMHelper } from "rsuite";
import React from "react";
import { Link } from "react-router-dom";

const { getHeight, on } = DOMHelper;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: getHeight(window),
      expand: true,
    };
    this.resizeListenner = on(window, "resize", this.updateHeight);
  }
  updateHeight = () => {
    this.setState({
      windowHeight: getHeight(window),
    });
  };
  render() {
    const { expand, windowHeight } = this.state;

    let navBodyStyle = null;
    if (expand) {
      navBodyStyle = {
        height: windowHeight,
        overflow: "auto",
      };
    }
    return (
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1" appearance="subtle">
        <Sidenav.Body style={navBodyStyle}>
          <Nav>
            <Link to="/">
              <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                Home
              </Nav.Item>
            </Link>
            <Link to="/users">
              <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                Users
              </Nav.Item>
            </Link>
            <Link to="/about">
              <Nav.Item eventKey="2" icon={<Icon icon="info" />}>
                About
              </Nav.Item>
            </Link>
            <Link to="/items">
              <Nav.Item eventKey="2" icon={<Icon icon="truck" />}>
                Items
              </Nav.Item>
            </Link>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    );
  }
}

export default SideNav;
