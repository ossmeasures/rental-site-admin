import "rsuite/lib/styles/index.less";
import {
    FlexboxGrid,
    Container,
    Header,
    Content,
    Footer,
    Sidebar,
} from "rsuite";
import "./App.css";
import { List } from "rsuite";
import React from "react";
import BasicModal from "./components/BasicModal";
import SideNav from "./components/SideNav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RentalItems from "./components/RentalItems";




const styleCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
};

const styleColor = (orderStatus) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
    color:
        orderStatus === "レンタル中" || orderStatus === "配送中"
            ? "orange"
            : "gray",
});

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function App() {
    return (
        <div className="App">
            <Router>
                <Container className="frame">
                    <Sidebar>
                        <SideNav />
                    </Sidebar>
                    <Switch>
                        <Route path="/items">
                            <RentalItems />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </Container>
            </Router>

        </div>
    );
}

export default App;
