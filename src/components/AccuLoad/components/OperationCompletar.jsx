import { useState, useEffect } from "react";

export function OperationCompletar({ value, product, flow, operationFinished }) {
    const [contAsc, setContAsc] = useState(0);
    const [contDesc, setContDesc] = useState(value);
    const percent = (100 / value); /* percentual de progresso */
    const [perc, setPerc] = useState(0); /* percentual de progresso */    
    const [vol, setVol] = useState(0)

    useEffect(() => {
        if (contAsc < value && flow === '800' && perc < 100) {
            setTimeout(() => {
                setContAsc(contAsc + 1)
                setPerc(perc + percent)
            }, 500)
        }
        if (contDesc >= 1 && flow === '800') {
            setTimeout(() => {
                setContDesc(contDesc - 1)
            }, 500)
        }
        if (contAsc < value && flow === '1800' && perc < 100) {
            setTimeout(() => {
                setContAsc(contAsc + 1)
                setPerc(perc + percent)
            }, 250)
        }
        if (contDesc >= 1 && flow === '1800') {
            setTimeout(() => {
                setContDesc(contDesc - 1)
            }, 250)
        }
        if (contAsc < value && flow === '2000' && perc < 100) {
            setTimeout(() => {
                setContAsc(contAsc + 1)
                setPerc(perc + percent)
            }, 100)
        }
        if (contDesc >= 1 && flow === '2000') {
            setTimeout(() => {
                setContDesc(contDesc - 1)
            }, 100)
        }
    }, [contAsc, contDesc]);

    useEffect(() => {
        if (contDesc > 0) return;
        operationFinished();
    }, [contDesc])

    useEffect(() => {
        if (value !== '' && Number(value) > 0) {
            setVol(Number(value))
        }
    }, [value])

    return (

        <div>
            <div className='upperLeft'>
                <p className="titleOperation">Carregado</p>
                <p> {contAsc} litros</p>
            </div>
            <div className='lowerLeft'>
                <p className="titleOperation">Restante</p>
                <p> {contDesc} litros</p>
            </div>
            <div className='percent'>
                <p> {perc.toFixed(0)} %</p>
            </div>
            <div className='upperRight'>
                <p className="titleOperation">Produto</p>
                <p>{product}</p>
            </div>
            <div className='middleRight'>
                <p className="titleOperation">Volume</p>
                <p>{vol} litros</p>
            </div>
            <div className='lowerRight'>
                <p className="titleOperation">Vazão</p>
                <p>{flow} m³</p>
            </div>
        </div>
    )
}