function Card({ props, cart, setCart }) {
    const { img, title, description, price } = props


    function addTocart() {
        setCart([...cart, props])
    }
    return (
        <div className='card'>
            <img src={img} />
            <h1>{title}</h1>
            <p>{description}</p>
            <b>{price}</b>
            <button onClick={addTocart}>add to cart</button>
        </div>
    )
}
export default Card