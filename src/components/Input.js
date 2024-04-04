import { useState } from 'react'
function Input() {
    const [state, setState] = useState()
    return <>
        <h1>{state}</h1>
        <input onChange={(e) => setState(e.target.value)} />
    </>
}
export default Input