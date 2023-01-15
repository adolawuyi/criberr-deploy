import {useState, useEffect} from "react";
import Validation from "./Validation";
import axios from 'axios'
const useForm = (submitForm) => {
const url = "https://us-central1-criberr-30ca5.cloudfunctions.net/app/create"
const [values, setValues] = useState({
    fullName: " ",
    email: "",
    phoneNumber: ""
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
return {handleChange, handleFormSubmit, values, errors };
}

export default useForm