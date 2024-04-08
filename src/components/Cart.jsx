function Cart({ data }) {
    return (
        <div className="cart">
            {
                data.map((item) =>
                    <div key={item.id} className="cart_card">
                        <img src={item.img} alt="" />
                        <div>
                            <p>{item.title}</p>
                            <b>{item.price}</b>
                            <br />
                            <button>delete</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Cart