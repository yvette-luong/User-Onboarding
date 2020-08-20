import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./App.css";
import * as yup from "yup";
import axios from "axios";
import formSchema from "./FormSchema";
import User from "./User";

const initialFormValues = {
  first_name: "",
  email:"",
  password:"",
  //checkbox 
  termofservices:{
    true: false, 
  }
};
const initialFormError = {
  first_name: "",
  email:"",
  password:"",
};
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState(initialFormError);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      // .finally(() => {
      //   setFormValues(initialFormValues);
      // });
  };
  const postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        console.log(res);
        setUsers([...users, res.data]);     
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setFormValues(initialFormValues);
      })
  };
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormError({ ...formError, [name]: " " });
      })
      .catch((err) => {
        setFormError({
          ...formError,
          [name]: err.errors[0],
        });
      });
      setFormValues({
        ...formValues,
        [name]: value,
      });
  };
  const checkboxChange = (name, isChecked) => {
      setFormValues({
        ...formValues,termofservices: {
          ...formValues.termofservices,
            [name]: isChecked,
        } 
      })
  };

  const submit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termofservices: Object.keys(formValues.termofservices).filter(term => formValues[term])
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Boarding App </h1>
        <Form
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
          disabled={disabled}
          errors={formError}
        />
        {users.map(user => {
          return (
            <User key={user.id} details={user}/>
          )
        })}
      </header>
    </div>
  );
}

export default App;
