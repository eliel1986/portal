export function VolAcimaTol({ title, value }) {
    return (
        <>

            <div className='header'>
                <p>Completar (max {title} lts)</p>
            </div>
            <div className='content'>
                <p>{value}</p>
            </div>

        </>
    )
}
