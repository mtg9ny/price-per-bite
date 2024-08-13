import Homepage from "./components/Homepage";
import SearchPage from "./components/SearchPage";
import Individual from "./components/Individual";
import BlogHomePage from "./components/BlogHomePage";
import BlogIndividual from "./components/BlogIndividual"

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
    },
    {
        path: "blog/recipe",
        element: <BlogIndividual />,
    }
];

export default routes;