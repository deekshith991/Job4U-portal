

const Buttons = ({ type, color, onClick, children }) => {

    return (
        <button type={type} style={{ backgroundColor: color }} onClick={onClick}>{children}</button>
    )
}

export default Buttons;