import logo from "./investment-calculator-logo.png";
import React from "react";
import classes from './AssetsHeader.module.css';

const AssetsHeader = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}

export default AssetsHeader;