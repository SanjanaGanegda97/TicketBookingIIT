import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UpNavBarComponent.scss';
import { AuthContext } from "../../context/AuthContext";
import { useLogout } from '../../hooks/useLogout';

const UpNavBarComponent = () => {
    const { logout } = useLogout();
    const navigate = useNavigate();

    const handleClick = () => {
        logout();
        navigate('/login'); // Navigates to localhost:3000 (or the root path)
    };

    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log("my user name", user);
    }, [user]);

    return (
        <header className='nav-bar-header'>
            <div className="nav-bar-container">
                <Link to="/" className="nav-bar-logo">
                    <img src='../assets/images/shift one logo.png' alt="Shift One Logo" className="logo-image" />
                </Link>
                <Link to="/">
                    <p className='nav-bar-heading'>Book My Shows</p>
                </Link>
                <nav>
                    {user ? (
                        <div>
                            <span>Hi! <a href="/profile">{user.user.name}</a></span>
                            <button className="logout-btn" onClick={handleClick}>Log Out</button>
                        </div>
                    ) : (
                        <div className="auth-buttons"> {/* New container for Login and Signup */}
                            <Link to="/login" className="auth-link">Login</Link>
                            <Link to="/signup" className="auth-link">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default UpNavBarComponent;
