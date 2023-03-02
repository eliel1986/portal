export function VolCompletarInfo({ title, value }) {
    return (
        <>

            <div className='header'>
                <p>Completar (max {title} lts)</p>
            </div>
            <div className='content'>
                {value > 0 && <p>{value}</p>}
            </div>

        </>
    )
}