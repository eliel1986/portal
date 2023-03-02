export function InputData({ title, value }) {
    return (
        <>

            <div className='header'>
                <p>{title}</p>
            </div>
            <div className='content'>
                {value > 0 && <p>{value}</p>}
            </div>

        </>
    )
}