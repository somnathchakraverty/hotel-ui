import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";

const RouterPath = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />}></Route>
                <Route path="/Login" exact element={<Login />}></Route>
            </Routes>
        </Router>
    );
};

export default RouterPath