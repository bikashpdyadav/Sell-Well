import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Browse from "./Browse";
import ScarpSell from "./ScarpSell";
import ScarpRate from "./ScarpRate";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Browse />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/scrap-sell",
            element: <ScarpSell />,
        },
        {
            path: "/scrap-rate",
            element: <ScarpRate />,
        },
    ]);
    return (
        <div >
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;