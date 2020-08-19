import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./App.css";
import * as yup from "yup";
import axios from "axios";
import formSchema from "./FormSchema";

const initialFormValues = {
  name: "",
};
const initialFormError = {
  name: "",
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState(initialFormError);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(()=>{
      setFormValues(initialFormValues)
    })
  }
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid =>{
        setFormError({...formError, [name]: " "
        })
      })
      .catch(err => {
        setFormError({
          ...formError, 
          [name]:err.errors[0]
        })
      })
      setFormValues({
        ...formValues, 
        [name]: value
      })
  }
const checkboxChange = (name, isChecked) => {

}
const submit = () => {
  const newUser = {
    name: formValues.name.trim(),
  }
}

useEffect(()=> {
  getUsers()
},[])

useEffect(()=>{
  formSchema.isValid(formValues)
  .then(valid => {
    setDisabled(!valid)
  })
},[formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Boarding App </h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
