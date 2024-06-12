import { useState } from 'react'; 
import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auths';

// login component
const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  //const [login, { error, data }] = useMutation(LOGIN_USER);
const error = {};
const data = {};
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
    // <section className="flex-row justify-center mb-4">
    <>
      <div className="col-12 col-lg-10">
      
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Initiating your character's journey</h4>
          <div className="card-body">
            {data ? (
              <p>
                "Success! You've successfully established your account within the realm."{' '} //
                <Link to="/">back to the adventure's hub.</Link>
              </p>
            ) : (
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
                  placeholder="******"
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
                  Present your action
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    
     </>
  );
};

export default Login;
