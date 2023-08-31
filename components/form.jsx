
 import { db } from '@/db/firebase';
import { useState } from 'react';
import { addDoc,collection } from "firebase/firestore"; 


const ContactForm=()=> {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber]=useState('');
  const [location, setLocation]=useState('');
  const[guests, setGuests]=useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
    const submissionData = {
        name: name,
        lastname:lastname,
        email: email,
        message: message,
        number:number,
        location:location,
        guests: guests,
      };

      // Add a new document with auto-generated ID
      const docRef = await addDoc(collection(db, "HotelForm"), submissionData);

      setName("");
      setEmail("");
      setMessage("");
      setLastname("");
      setGuests("");
      setLocation("");
      setNumber("");
      
      console.log('Message sent successfully! Document ID:', docRef.id);
    } catch (error) {
      console.error('Error sending message:', error);
    }
    
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      
      <form className="form" onSubmit={handleSubmit}>
    
    <div className="flex">
        <label>
            <input className="input" type="text" placeholder="" required="" onChange={(e) => setName(e.target.value)}/>
            <span>first name</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""onChange={(e) => setLastname(e.target.value)}/>
            <span>last name</span>
        </label>
        <label>
            <input className="input" type="number" placeholder="" required=""onChange={(e) => setGuests(e.target.value)}/>
            <span>No. of guests</span>
        </label>
        
    </div>  
    <label>
            <input className="input" type="text" placeholder="" required=""onChange={(e) => setLocation(e.target.value)}/>
            <span>Location</span>
        </label>   
    <label>
        <input className="input" type="email" placeholder="" required="" onChange={(e) => setEmail(e.target.value)}/>
        <span>email</span>
    </label> 
        
    <label>
        <input className="input" placeholder="" type="tel" required="" onChange={(e) => setNumber(e.target.value)}/>
        <span>contact number</span>
    </label>
    <label>
        <textarea className="input01" placeholder="" rows="3" required="" onChange={(e) => setMessage(e.target.value)}></textarea>
        <span>message</span>
    </label>
    
    <button href="#" className="fancy">
      <span className="top-key"></span>
      <span className="text">submit</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
</form>
    </div>
  );
}

export default ContactForm;
