import "./App.css";
import contacts from "./data.js";
import AddressBook from "./AddressBook";
import ContactCard from "./ContactCard";
import picture from "./data";

function App() {
  console.log(contacts);

  return (
    <div className="App">
      <div>{`The length of the list is ${contacts.length}`}</div>
      <h1>My address book</h1>
      <AddressBook />

     <div className="container"> {contacts.map((contact, index) => (
        <ContactCard contact={contact} picture={picture} key={index} />
     ))}
        </div>
    </div>
  );
}
export default App;
