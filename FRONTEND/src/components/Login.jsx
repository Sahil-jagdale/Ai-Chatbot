import { useState } from 'react';
import '../index.css';
import ChatbotIcon from './ChatbotIcon';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Call your backend login API here
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        setError('');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-form">
                    <h2>LOGIN</h2>
                    <p>How to i get started lorem ipsum dolor at?</p>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <div className="error">{error}</div>}
                        <button className="login-btn" type="submit">Login Now</button>
                    </form>

                </div>

                <div className="login-image">
                    <ChatbotIcon />
                </div>
            </div>
        </div>
    );
};

export default Login;