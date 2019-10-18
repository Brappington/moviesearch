import React from "react";

const Header = (props) => {
    return (
        <header className="App-header">
            <h3 class="name"><a href="https://jackpowell.dev">Jack Powell</a></h3>
            <h2>{props.text}</h2>
        </header>
    );
};

export default Header;