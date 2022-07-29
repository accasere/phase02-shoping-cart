
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from './Login'

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !userName ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className='signup-container'> 
    {" "}
    {login ? (
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'> 
          <label>Name: </label>
          <input onChange={(event) => setName(event.target.value)} type="text" className="form-control" placeholder="Enter full name"/>
        </div>

        <div className='form-group'> 
          <label>E-mail: </label>
          <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" placeholder="Enter email"/>
        </div>

        <div className='form-group'> 
          <label>Username: </label>
          <input onChange={(event) => setUserName(event.target.value)}type="text" className="form-control" placeholder="Enter user name"/>
        </div>
        <div className='form-group'> 
          <label>Password: </label>
          <input onChange={(event) => setPassword(event.target.value)}type="password" className="form-control" placeholder="Enter Password"/>
        </div>

        <button type="submit" className="btn btn-primary">Signup</button>

        <p onClick={handleClick} className="forgot-password text-right">Already registered{" "}log in?</p>
        {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
      </form>
    ) : ( <Login/>)}
   </div>
  )
}
