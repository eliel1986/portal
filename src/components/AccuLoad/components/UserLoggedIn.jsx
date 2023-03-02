export function UserLoggedIn({ title, value }) {
    return (
        <>

            <div className='header'>
                <p>{title}</p>
            </div>
            <div className='content'>
                <p>{value}</p>
            </div>

        </>
    )
}