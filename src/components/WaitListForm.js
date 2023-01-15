import React from 'react'
import './WaitListForm.css'
import useForm from './useForm'

const WaitListForm = ({submitForm}) => {
    
    const {handleChange, handleFormSubmit, values, errors } = useForm(submitForm);
   
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
                <div className='phoneNumber'>
                    <label className='label'>Phone Number</label>
                    <input className='input' 
                    id='phoneNumber'
                    type='tel' 
                    name='phoneNumber' 
                    value={values.phoneNumber}
                    onChange={handleChange}
                    />
                    {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
                </div>
                <div className='submit' onClick={handleFormSubmit}>Join</div>
            </form>
        </div>
      
    </div>
  )
}

export default WaitListForm
