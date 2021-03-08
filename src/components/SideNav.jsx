import { Sidenav, Icon, Nav, Dropdown, DOMHelper } from "rsuite";
import React from "react";
import {
    Link
} from "react-router-dom";

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
                        <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                            <Link to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                            <Link to="/users">Users</Link>                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="info" />}>
                            <Link to="/about">About</Link>
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="truck" />}>
                            <Link to="/items">Items</Link>
                        </Nav.Item>
                        <Dropdown
                            eventKey="3"
                            title="Advanced"
                            icon={<Icon icon="magic" />}
                        >
                            <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                            <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                            <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                            <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            eventKey="4"
                            title="Settings"
                            icon={<Icon icon="gear-circle" />}
                        >
                            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                            <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                            <Dropdown.Menu eventKey="4-5" title="Custom Action">
                                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        );
    }
}

export default SideNav;
