import React, {useState} from 'react'
import WaitListForm from './WaitListForm'
import SubmitFormAlert from './SubmitFormAlert'

const Form = () => {
    const [formIsSubmitted, setformIsSubmitted] = useState(false)
    const submitForm = () =>{
        setformIsSubmitted(true);
    }
  return <div> {!formIsSubmitted ? <WaitListForm submitForm={submitForm}/> : <SubmitFormAlert/>}
  </div>
  
}

export default Form
