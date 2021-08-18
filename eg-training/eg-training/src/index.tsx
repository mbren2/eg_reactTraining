import React from "react"
import { render } from "react-dom";
import { App } from "./App";
import { About } from "./About";
import { Nav } from "./Nav";
import { BrowserRouter, Route } from "react-router-dom";

const headStyle = {color: "blue", marginBottom: 10 };

// our first react component 

//HTML                        vs                          JSX
//class                                                 className
//For                                                   htmlFor
//inline styles in HTML are strings                     Inline styles are objects
// <!-- comments like this -->                          {/*comments like this*/}
//Attributes are kebab-cased                            props are camelCased
function Heading(props: any) {
    return (<h1 className="head" style={headStyle}>
        {props.children}
    </h1>
    );
    //</h1>return <h1>{ props.children }</h1>;
}

//render(<<Heading>Hello</Heading>>,document.getElementById("root"));
render(
    <BrowserRouter>
        <Nav />
        <Route path="/about">
            <About />
        </Route>
        <Route path="/" exact>
            <App />
        </Route>
    </BrowserRouter>
    ,document.getElementById("root")
);