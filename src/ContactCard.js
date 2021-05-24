import React from "react";

export const ContactCard = ({ contact, picture, email, phone, location }) => {
  return (
    <div className="card-container">
      <h1> {contact.name.first}</h1>
      <div className="image-container"></div>
      <img src={contact.picture.medium} alt="" />
      <p className="email">{contact.email}</p>
      <p> phone: {contact.phone}</p>
      <p>address: {contact.location.street.name}</p>
      <p> {contact.location.city}</p>
      <p> {contact.location.postcode}</p>
    </div>
  );
};
export default ContactCard;
