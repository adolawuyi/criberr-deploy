import React, {useState} from 'react'
import SubmitFormAlert from './SubmitFormAlert'
import WaitListForm from './WaitListForm'

const Form = () => {
    const [formIsSubmitted, setformIsSubmitted] = useState(false)

    const submitForm = () =>{
        setformIsSubmitted(true);
    }
  return (
      <div> 
        {!formIsSubmitted ? (
          <WaitListForm submitForm={submitForm}/> 
        ): (
          <SubmitFormAlert/>
        )}
      </div>
  );
};

export default Form
