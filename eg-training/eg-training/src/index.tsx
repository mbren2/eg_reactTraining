import { render } from "react-dom";
import { App } from "./App"; 
//HTML                        vs                          JSX
//class                                                 className
//For                                                   htmlFor
//inline styles in HTML are strings                     Inline styles are objects
// <!-- comments like this -->                          {/*comments like this*/}
//Attributes are kebab-cased                            props are camelCased
//Options accept selected                               select accepts values
render(<App />, document.getElementById("root"));