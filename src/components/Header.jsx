import { useState } from "react"
import Cart from "./Cart"

function Header({ data }) {
    const [cart, setCart] = useState(false)
    return (
        <>
            <header>
                <div>logo</div>
                <nav>
                    <ul>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                        <li>home</li>
                    </ul>
                </nav>
                <button onClick={() => setCart(prev => !prev)}>cart</button>
            </header>
            {cart && <Cart data={data} />}
        </>

    )
}
export default Header