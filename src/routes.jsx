import Homepage from "./components/Homepage";
import SearchPage from "./components/SearchPage";
import Individual from "./components/Individual";

const routes = [
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
    },
    {
        path: "/search/individual",
        element: <Individual />,
    },
];

export default routes;