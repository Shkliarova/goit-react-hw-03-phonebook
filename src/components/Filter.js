export const Filter = ({filter, onUpdate}) => {
    return(
        <div>
            <input type="text" value={filter} 
            onChange={e => onUpdate(e.target.value)}/>
        </div>
    )
}