import { Component } from "react"
import { ContactForm } from "./ContactForm"
import { nanoid } from "nanoid"
import { ContactList } from "./ContactList"
import { Filter } from "./Filter"
import { AppWrapper } from "./App.styled"

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    filter: ''
  }

  updateFilter = newFilter => {
    this.setState({
      filter: newFilter,
    })
  }

  addContact = newContact => {
    const {contacts} = this.state;
    const isNameExists = contacts.some(contact => contact.name.toLowerCase()===newContact.name.toLowerCase());

    if(isNameExists){
      alert(`${newContact.name} is already in contacts!`);
    } else{
      const contact = {
        ...newContact,
        id: nanoid()
      };
      this.setState(prevState => {
        return{
          contacts: [...prevState.contacts, contact],
        }
      })
    }
  }

  deleteContact = (contactId) => {
    this.setState(prevState => {
      return{
        contacts: prevState.contacts.filter(item => item.id !== contactId)
      }
    })
  }

  render(){
    const {contacts, filter} = this.state;

      const visibleContacts = contacts.filter(contact => {
      const hasContact = contact.name.toLowerCase().includes(filter.toLowerCase());

      return hasContact;
    })

    return(
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onUpdate={this.updateFilter}/>
        {contacts.length>0 && <ContactList items={visibleContacts} onDelete={this.deleteContact}/>}
      </AppWrapper>
    )
  }
}