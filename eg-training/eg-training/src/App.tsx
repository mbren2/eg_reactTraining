import { Home } from "./Home";
import { About } from "./About";
import { Nav } from "./Nav";
import { BrowserRouter, Route } from "react-router-dom";
import { FoodForm } from "./FoodForm";
import { QueryClient, QueryClientProvider } from "react-query"


export function App() {
    const queryClient = new QueryClient();

    return (
    <QueryClientProvider client={queryClient}>
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
                <Home />
            </Route>
        </BrowserRouter>
    </QueryClientProvider>
    )
}