import React from 'react';
import Counter from './Counter';
import cl from './UserList.module.css';
export default function UserList({contacts}) {

    // const array = JSON.parse(localStorage.getItem("localUsers"));
    // contacts = [...array];
  return (
    <div className={cl.userList}>
      {contacts.map((contact, id) => (
        <div  key={id}>
            <div className={cl.inside}>
            <p className="card-name">{contact.name}</p>
            <Counter />
            
        
            </div>
          
        </div>
      ))}
    </div>
  );
}