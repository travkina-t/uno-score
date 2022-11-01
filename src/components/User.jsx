import React, {useState} from 'react';
import cl from './User.module.css';


export default function User({addContact}) {

const [contactInfo, setContactInfo] = useState({
    name:'',
    age:'',
});

const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({name:'', age:''})
  }
  return (
    <div className={cl.user}>
        <form className={cl.form} onSubmit={handleSubmit}>

            <input className={cl.input} type='text' name='name' value={contactInfo.name} onChange={handleChange}></input>
            {/* <button className={cl.btn}><BsPlusSquare size={`2rem`} color={`gray`}/></button> */}
            <button style={{backgroundColor:'#228B22', padding:'2px 3px', color:'white', borderRadius: '5px'}}>Добавить игрока</button>

        </form>
        
    </div>
  )
}
