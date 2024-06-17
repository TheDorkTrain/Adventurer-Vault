import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import Header from '../components/header';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import React, { useEffect } from 'react';


import Auth from '../utils/auths';

// login component
const Login = () => {

  const loggedIn = Auth.loggedIn();
  if (loggedIn) {
    window.location.assign('/')
  }

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };



  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <><div style={{display: "flex", justifyContent: 'center'}}>
      <div className="box">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2"> Login To Continue your Adventure</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-primary"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
            <Link to="/">Present your completed</Link>
              </button>
            </form>

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
      </div>

     
    </>
  );
}

export default Login;
