import useInput from "../hooks/useInput";

export default function SearchPage() {
    const { input } = useInput();
    return (
        <>
            <div>The input is {input}</div>
        </>
    );
}