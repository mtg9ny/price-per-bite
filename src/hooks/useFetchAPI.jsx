import useInput from './useInput';
import { useState, useEffect } from 'react';

export default function useFetchAPI() {
    const [JSONObject, setJSONObject] = useState("");
    const { input } = useInput();
    const apiKey = '6a16595f4c9a49c9aea37e1a0e93945c';
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${input}`, { mode: 'cors' })
            .then(response => response.json())
            .then(data => setJSONObject(data))
            .catch(error => console.error("Failed to fetch data:", error));
    }, [input]);

    return { JSONObject, setJSONObject };
}
