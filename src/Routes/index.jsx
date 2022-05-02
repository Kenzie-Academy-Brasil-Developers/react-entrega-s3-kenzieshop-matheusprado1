import { Switch, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import CartPage from "../Pages/CartPage";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route path="/cart">
                <CartPage />
            </Route>
        </Switch>
    );
};

export default Routes;