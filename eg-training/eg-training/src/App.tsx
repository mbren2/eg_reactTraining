import { Home } from "./Home";
import { About } from "./About";
import { Nav } from "./Nav";
import { BrowserRouter, Route } from "react-router-dom";
import { FoodForm } from "./FoodForm";
import { QueryClient, QueryClientProvider } from "react-query"
import { UserContextProvider, UserContextType } from "./UserContext";
 
const user: UserContextType = {
    email: "c@gmail.com",
    name: "Cory",
    role: "admin",
    token: "1234",
};

export function App() {
    const queryClient = new QueryClient();

    return (
        <UserContextProvider value={user}>
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
        </UserContextProvider>
    )
}