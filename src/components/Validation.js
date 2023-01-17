

const Validation = (values) => {

    let errors={};

    if (!values.fullName){
        errors.fullName= "Oops! Name is required"
    }
    if (!values.email){
        errors.email= "Oops! Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Oops! Email is invalid"
    }
    
  return errors;
}

export default Validation
