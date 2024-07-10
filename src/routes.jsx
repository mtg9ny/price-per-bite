import Homepage from "./components/Homepage";
import SearchPage from "./components/SearchPage";

const routes = [
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
    }
];

export default routes;