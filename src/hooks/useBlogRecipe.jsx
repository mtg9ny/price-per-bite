import { useEffect, useState } from "react";

function useBlogRecipe() {
    const [blogRecipe, setBlogRecipe] = useState(() => {
        const savedRecipe = localStorage.getItem("blogRecipe");
        return savedRecipe ? JSON.parse(savedRecipe) : "";
    });

    useEffect(() => {
        if (blogRecipe) {
            localStorage.setItem("blogRecipe", JSON.stringify(blogRecipe));
        }
    }, [blogRecipe]);

    return { blogRecipe, setBlogRecipe };
}

export default useBlogRecipe;
