

const Buttons = ({ color, onClick, children }) => {

    return (
        <button type="button" style={{ backgroundColor: color }} onClick={onClick}>{children}</button>
    )
}

export default Buttons;