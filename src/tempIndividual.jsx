import useID from '../hooks/useID';
import { useEffect, useState } from 'react';

export default function tempIndividual() {
    const { ID } = useID();
    const [detailsObject, setDetailsObject] = useState(null);
    const apiKey = '6a16595f4c9a49c9aea37e1a0e93945c';

    useEffect(() => {
        console.log(`Retrieved ID: ${ID}`);
    }, [ID]);

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
    }, [ID, apiKey]);

    return (
        <>
            {detailsObject ? (
                <div>
                    <div>Title: {detailsObject.title}</div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
