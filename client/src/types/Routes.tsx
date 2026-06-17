import { createBrowserRouter } from "react-router";
import Home from "../screens/Home";
import CreateAccount from "../screens/CreateAccount";
import CreateOrder from "../screens/CreateOrder";
import CrewDashboard from "../screens/CrewDashboard";
import OrderDashboard from "../screens/OrderDashboard";
import App from "../App";
import LogIn from "../screens/LogIn";


export const router = createBrowserRouter([
    {
    path:"/", Component: App,
    children: [
        {index: true, Component: Home},
        {path:"createaccount", Component: CreateAccount},
        {path:"createorder", Component: CreateOrder},
        {path:"crews", Component: CrewDashboard},
        {path:"orders", Component: OrderDashboard},
        {path:"login", Component: LogIn}
    ]

}
]);

