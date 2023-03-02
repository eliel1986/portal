import React, { useState, useEffect } from "react";

export function HourDisplay() {
    const [now, setNow] = useState(null);

    useEffect(() => {
        setInterval(() => {
            const actualDate = new Date().toLocaleString("pt-br", { timeZone: "America/Sao_Paulo" });

            setNow(actualDate);

        }, 1000)
    }, []);

    return (
        <div className='footer'>
            <p>{now}</p>
        </div>
    )
}