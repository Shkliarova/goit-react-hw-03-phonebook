import { ContactsList, DeleteButton } from "./ContactList.styled"

export const ContactList = ({items, onDelete}) => {
    return(
        <ContactsList>
            {items.map(item => 
            <li key={item.id}>
                {item.name}: <i>{item.number}</i>
                <DeleteButton onClick={()=>onDelete(item.id)}>delete</DeleteButton>
            </li>)}
        </ContactsList>
    )
}