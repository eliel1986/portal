export function ProductInfo({ product, company, volume }) {
    return (
        <>

            <div className='header'>
                <p>{product} / {company}</p>
            </div>
            <div className='content'>
                <p>{volume} litros</p>
            </div>

        </>
    )
}