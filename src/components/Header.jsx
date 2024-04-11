import { useState } from "react"
import Cart from "./Cart"
import Modal from "./Modal"
import { useTheme, useThemeToggle } from "../App"

function Header({ data }) {
    const [cart, setCart] = useState(false)
    const isDark = useTheme()
    const toggleTheme = useThemeToggle()
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
                <button onClick={toggleTheme}>{!isDark ? 'false' : 'true'}</button>
                <button onClick={() => setCart(prev => !prev)}>cart</button>
            </header>

            <Modal setState={setCart} state={cart}>
                <Cart data={data} />
            </Modal>
        </>

    )
}
export default Header