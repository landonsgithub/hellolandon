import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';

const HeaderTwo = props => {
    return <React.Fragment>
        <header className={classes.headerTwo}>
            <h1>Jin Jin Sushi</h1>
           <HeaderCartButton onShowCart={props.onShowCart}/>
        </header>
    </React.Fragment>
}
export default HeaderTwo;