const Hex = ({onClick, color}) => {
    return (
        <div className='wrapper'>
            <h2>Background Color : {color}</h2>
            <button onClick={onClick}>Click me</button>
        </div>
    )
}

export default Hex;