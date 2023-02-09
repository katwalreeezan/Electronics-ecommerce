

import React from "react";
import { useState,useEffect} from "react";
import "./Contact.css";
import { User } from "phosphor-react";
import {EnvelopeSimpleOpen} from "phosphor-react";
import {AddressBook} from "phosphor-react";
import axios from "axios";


export const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('email:', email);
    console.log('Message:', message);
  };

  const[product, setproduct]=useState([]);
  const[loading, setloading]=useState(true)
  useEffect(()=>{
  fetchdata();
  },[])
  const fetchdata= async()=>{
    await axios.get('https://fakestoreapi.com/products').then((res)=>{setproduct(res.data);setloading(false)})
  }
  if(loading){
    return(<div>loading..</div>)
  }
  return (
  <div className="login-form">
    {product.map(item=>(<div key={item.id}>{item.title}</div>))}
    <form onSubmit={handleSubmit}>
      <label>
        <User size={32} weight="bold" />
        <input
          type="text"
          value={username}
          placeholder="Enter your name"
          onChange={event => setUsername(event.target.value)}
          
        />
      </label>
      <br />
      <label>
      
      <AddressBook size={32} weight="bold" />
        <input
          type="text"
          value={email}
          placeholder="Enter your address"
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <br />

      <label>
      <EnvelopeSimpleOpen size={32} weight="bold" />
        <input
          type="text"
          value={message}
          placeholder="Enter your message"
          onChange={event => setMessage(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>

  </div>);
};