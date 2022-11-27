// import React from 'react'
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ user, onSubmitSuccess }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    dateOfBirth: "",
  });
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {id,...payload} = values
      if(id){
        await axios.put(
          `https://62a694e897b6156bff7bc30e.mockapi.io/api/users/${id}`,
          payload
        );
      }else{
        await axios.post(
          "https://62a694e897b6156bff7bc30e.mockapi.io/api/users",
          payload
        );
      }
      // Thành công => gọi tới 1 prop onSubmitSuccess để component UserManagement gọi lại api get users và thay đổi state users
      onSubmitSuccess();
      // reset form
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        dateOfBirth: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    if(!user){
      return // vì lần đầu tiên user là null
    }
    setValues({
      ...user
    })
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name */}
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          id="firstName"
          className="form-control"
          value={values.firstName}
          name="firstName"
          onChange={handleChange}
        />
      </div>
      {/* Last Name */}
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          id="lastName"
          className="form-control"
          value={values.lastName}
          name="lastName"
          onChange={handleChange}
        />
      </div>
      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          className="form-control"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      {/* Address */}
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          id="address"
          className="form-control"
          value={values.address}
          name="address"
          onChange={handleChange}
        />
      </div>
      {/* Date of Birth */}
      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label">
          Date Of Birth
        </label>
        <input
          id="dateOfBirth"
          className="form-control"
          value={values.dateOfBirth}
          name="dateOfBirth"
          onChange={handleChange}
        />
      </div>
      {/* Submit */}
      <button className="btn btn-dark">Submit</button>
    </form>
  );
};

export default UserForm;
