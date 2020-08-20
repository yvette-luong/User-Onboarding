import React from "react";

const Form = (props) => {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };
  return (
    <div>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="errors">
          <div>{errors.first_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termofservices}</div>
        </div>

        <h4>General Infor</h4>
        <label>
          <p>Name</p>
          <input
            name="first_name"
            type="text"
            value={values.first_name}
            onChange={onInputChange}
          />
        </label>
        <label>
          <h3>Email</h3>
          <input
            value={values.email}
            onChange={onInputChange}
            name="email"
            type="email"
          />
        </label>
        <label>
          <h3>Password</h3>
          <input
            value={values.password}
            onChange={onInputChange}
            name="password"
            type="password"
          />
        </label>

        <label><h3>Term of Service</h3>
          <input
            type="checkbox"
            name='true'
            checked={values.termofservices.true === true}
            onChange={onCheckboxChange}
          />
        </label>
        <p>Add New User</p>
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
