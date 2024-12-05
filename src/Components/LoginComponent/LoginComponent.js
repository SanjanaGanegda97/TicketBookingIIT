import { useState } from "react"
import './LoginComponent.scss'
import { useLogin } from "../../hooks/useLogin"
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isloading} = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(email, password)
    .then (() => {
      navigate('/'); // Navigates to localhost:3000 (or the root path)
    })
  
  }

  return (
   
      <form className="login" onSubmit={handleSubmit}>
      <h3 className="login-heading">Log In to Book My Show</h3>
      
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

      <button className="login-button" disabled={isloading} onClick={handleSubmit}>Log in</button>
      {error && <div>{error}</div>}
    </form>
    
  )
}

export default LoginComponent