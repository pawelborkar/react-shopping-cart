import React from "react";

const Header = (props) => {
    const { countCartItems } = props;
    return (
        <header className="block row">
            <div className="center">
                <a href="#/">
                    <h1>Modern Electronics</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    Cart{" "}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ""
                    )}
                </a>{" "}
                <a href="#/signin">SignIn</a>
            </div>
        </header>
    );
};

export default Header;
