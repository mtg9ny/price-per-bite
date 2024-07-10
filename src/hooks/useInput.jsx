import { useEffect, useState } from "react";

function useInput() {
    const [input, setInput] = useState(() => {
        const savedInput = localStorage.getItem("input");
        return savedInput ? JSON.parse(savedInput) : "";
    });

    useEffect(() => {
        localStorage.setItem("input", JSON.stringify(input));
    }, [input]);

    return { input, setInput };
}

export default useInput;