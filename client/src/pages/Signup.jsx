import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auths';


const Signup = () => {

  const loggedIn = Auth.loggedIn();
  if (loggedIn) {
    window.location.assign('/')
  }

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username, email: formState.email, password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main style={{display: "flex", justifyContent: 'center'}}>
      <div className="box">
        <div >
          <h4 style-={{color: 'var(--main-light)'}} >Signup to embark on your journey</h4>
          <div >
          <form style={{ display: 'flex',justifyContent: 'center', flexWrap: 'wrap'}} onSubmit={handleFormSubmit}>
     
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="text"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Username"
                name="username"
                type="text"
                value={formState.username}
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
              <nav style={{width: '100%', display: 'flex',justifyContent: 'center',}}>
              <button className="d-block" type="submit">
                Signup
              </button>
              </nav>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;