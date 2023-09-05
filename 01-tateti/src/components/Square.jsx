
// componente de cuadro , lugo sacar 
export const Square = ({ children, isSelected, updateBoard, index }) => {

    // cambiar quien tiene el turno 
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (<div onClick={handleClick} className={className}>
        {children}

    </div>)
}