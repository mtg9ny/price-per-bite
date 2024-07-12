import { useEffect, useState } from "react";

function useID() {
    const [ID, setID] = useState(() => {
        const savedID = localStorage.getItem("ID");
        return savedID ? JSON.parse(savedID) : "";
    });

    useEffect(() => {
        if (ID) {
            localStorage.setItem("ID", JSON.stringify(ID));
        }
    }, [ID]);

    return { ID, setID };
}

export default useID;
