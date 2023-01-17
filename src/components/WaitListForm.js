import {React, useState, useEffect} from 'react'
import './WaitListForm.css'
import Validation from './Validation'
import axios from 'axios'

const WaitListForm = ({submitForm}) => {
    const url = "https://us-central1-criberr-30ca5.cloudfunctions.net/app/create"
const [values, setValues] = useState({
    fullName: "",
    email: "",
});

const [errors, setErrors] = useState ({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);

 const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    })
 }
const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
    axios.post(url, values, {
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
    }

})
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

useEffect(() =>{
    if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true);
    }
},[errors]);
    
  return (
    <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Join Waitlist</h2>
                <p className='info'>Fill the form below to join</p>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'>Full Name</label>
                    <input className='input'
                    id='fullName' 
                    type='text' 
                    name='fullName' 
                    value={values.fullName}
                    onChange={handleChange}
                    />
                    {errors.fullName && <p className='error'>{errors.fullName}</p>}
                </div>
                <div className='email'>
                    <label className='label'>Email Address</label>
                    <input className='input' 
                    id='email'
                    type='email' 
                    name='email' 
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <button className='submit-form' name='submit' onClick={handleFormSubmit}>Join</button>
            </form>
        </div>
      
    </div>
  )
}

export default WaitListForm
