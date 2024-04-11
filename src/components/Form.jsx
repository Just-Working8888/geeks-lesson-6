import { useState } from "react"
import { useTheme } from "../App"

function Form() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [oldprice, setoldPrice] = useState('')
    const [img, setImg] = useState('')
    const isDark = useTheme()
    function onSumit() {
        fetch('https://63d304794abff88834170d21.mockapi.io/items', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                oldprice: oldprice,
                image: img,
            })
        }).then((res) => console.log(res)
        ).catch((err) => console.log(err))
    }

    return (
        <div style={isDark === true ? { background: 'black' } : {}}>

            <h1>modal form</h1>

            <input onChange={(e) => setTitle(e.target.value)}
                placeholder="title:" type="text" />
            <input placeholder="description:" type="text" />
            <input placeholder="price:" type="text" />
            <input placeholder="oldprice:" type="text" />
            <input placeholder="img:" type="text" />

            <button onClick={onSumit}>onSubmit</button>
        </div >


    )
}
export default Form