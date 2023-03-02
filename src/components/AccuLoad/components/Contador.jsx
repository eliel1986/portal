import { useState, useEffect } from "react";

export function Contador() {
    const [contAsc, setContAsc] = useState(0);
    const [contDesc, setContDesc] = useState(10);
    useEffect(() => {
        if (contAsc <= 9) {
            setTimeout(() => {
                setContAsc(contAsc + 1)
            }, 500)
        }
        if (contDesc >= 1) {
            setTimeout(() => {
                setContDesc(contDesc - 1)
            }, 500)
        }
    }, [contAsc, contDesc]);

    return (
        <>
            <div className='header'>
                <p>Contador</p>
            </div>
            <div className='content'>
                <p>{contAsc} / {contDesc}</p>
            </div>
        </>
    )
}