import React, { useState, useEffect } from 'react';

const PROPS_DISPLAY = {
    morning: 'BOM DIA',
    afternoon: 'BOA TARDE',
    night: 'BOA NOITE'
}

export function DisplayWelcome() {
    const [statusHora, setStatusHora] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            const actualDate = new Date();

            if (actualDate.getHours() >= 0 && actualDate.getHours() < 12) {
                setStatusHora(PROPS_DISPLAY.morning)
            } else if (actualDate.getHours() >= 12 && actualDate.getHours() < 18) {
                setStatusHora(PROPS_DISPLAY.afternoon)
            } else {
                setStatusHora(PROPS_DISPLAY.night)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <>
            <div className='header'>
                <p>{statusHora}</p>
            </div>
            <div className='content'>
                <p>Press SET to Start</p>
            </div>
        </>
    )
}