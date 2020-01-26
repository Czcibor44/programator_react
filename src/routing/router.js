import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Dashboard from "./dashboard";
import Altkom from "./altkom";
import Cia from "./cia";

export default function RouterExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/cia">CIA</Link>
                    </li>
                    <li>
                        <Link to="/altkomFrame">altkom</Link>
                    </li>

                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/cia">
                        <Cia/>
                    </Route>
                    <Route path="/altkomFrame">
                        <Altkom/>
                    </Route>

                </Switch>

            </div>
        </Router>
    );
}

// function Home() {
// //     return (
// //         <div>
// //             <h2>Home</h2>
// //         </div>
// //     );
// // }

// budowanie funkcji




