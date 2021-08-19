import React from "react"
import { render } from "react-dom";
import { App } from "./App";
import { About } from "./About";
import { Nav } from "./Nav";
import { BrowserRouter, Route } from "react-router-dom";
import { FoodForm } from "./FoodForm";

// our first react component 

//HTML                        vs                          JSX
//class                                                 className
//For                                                   htmlFor
//inline styles in HTML are strings                     Inline styles are objects
// <!-- comments like this -->                          {/*comments like this*/}
//Attributes are kebab-cased                            props are camelCased
//Options accept selected                               select accepts values
render(
    <BrowserRouter>
        <Nav />
        <Route path="/about">
            <About />
        </Route>
        <Route path="/food" exact>
            <FoodForm />
        </Route>
        <Route path="/food/:foodId">
            <FoodForm />
        </Route>
        <Route path="/" exact>
            <App />
        </Route>
    </BrowserRouter>
    ,document.getElementById("root")
);