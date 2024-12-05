import { useState, useTransition } from "react"
import './SignUpComponent.scss'
import { useSignup } from "../../hooks/useSignup"
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setname] = useState();
  const [contactnum, setcontactnum] = useState();
  const {signup, isLoading, error} = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name)
    await signup(email, password,name, contactnum )
    .then (() => {
      navigate('/'); // Navigates to localhost:3000 (or the root path)
    })
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3 className="login-heading">Welcome to BOOK MY SHOW PLATFORM</h3>

      <label className="login-label">Name:</label>
      <input 
        className="login-input-field"
        type="name" 
        onChange={(e) => setname(e.target.value)} 
        value={name} 
      />
      
      <label className="login-label">Email address:</label>
      <input 
        className="login-input-field"
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label className="login-label">Password:</label>
      <input 
        className="login-input-field"
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <label className="login-label">Contact No:</label>
      <input 
        className="login-input-field"
        type="text" 
        onChange={(e) => setcontactnum(e.target.value)} 
        value={contactnum} 
      />

      <button className="login-button" disabled={isLoading}>Sign up</button>
      {error && <div className="signup-error">{error}</div>}
    </form>
  )
}

export default SignUpComponent