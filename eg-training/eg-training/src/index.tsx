import React from "react"
import { render } from "react-dom";
import { App } from "./App";

const headStyle = {color: "blue", marginBottom: 10 };

// our first react component 

//HTML                        vs                          JSX
//class                                                 className
//For                                                   htmlFor
//inline styles in HTML are strings                     Inline styles are objects
// <!-- comments like this -->                          {/*comments like this*/}
function Heading(props: any) {
    return (<h1 className="head" style={headStyle}>
        {props.children}
    </h1>
    );
    //</h1>return <h1>{ props.children }</h1>;
}

//render(<<Heading>Hello</Heading>>,document.getElementById("root"));
render(<App />,document.getElementById("root"));