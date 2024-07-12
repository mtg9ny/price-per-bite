import { useState, useEffect } from 'react';
import useID from './useID';

export default function useDetailsAPI() {
    const [detailsObject, setDetailsObject] = useState({});
    const { ID } = useID();
    const apiKey = '6a16595f4c9a49c9aea37e1a0e93945c';
    useEffect(() => {
        if (ID) {
            fetch(`https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}`, { mode: 'cors' })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => setDetailsObject(data))
                .catch(error => console.error("Failed to fetch data:", error));
        }
    }, [ID]);

    return { detailsObject, setDetailsObject };
}
