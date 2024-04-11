import { useTheme } from "../App"


function Modal({ children, setState, state }) {
   

    return (
        <div style={!state ? { display: 'none' } : { display: 'block' }} onClick={() => setState(false)} className="mask">
            <div className="modalForm">
                {children}
            </div>
        </div>
    )
}
export default Modal