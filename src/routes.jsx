import Homepage from "./components/Homepage";
import SearchPage from "./components/SearchPage";
import Individual from "./components/Individual";
import BlogHomePage from "./components/BlogHomePage";

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
    {
        path: "blog",
        element: <BlogHomePage />,
    }
];

export default routes;