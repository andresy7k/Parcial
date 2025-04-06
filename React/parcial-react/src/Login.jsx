import React from 'react';
import { useState } from 'react';
import './Login.css';
import wifiIcon from './assets/wifi.png';
import signalIcon from './assets/signal.png';
import batteryIcon from './assets/battery.png';
import userIcon from './assets/user.png';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    const handleClick = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe ? 'Yes' : 'No');
    };

    return (
        <section className='login'>
            <div className="status-bar">
                <div className="time">
                    12:00
                </div>
                <div className="status-bar-icons">
                    <img 
                        className='status-icon-wifi' 
                        src={wifiIcon} 
                        alt='Wifi' 
                    />
                    <img 
                        className='status-icon-signal' 
                        src={signalIcon} 
                        alt='Signal' 
                    />
                    <img 
                        className='status-icon-battery' 
                        src={batteryIcon}
                        alt='Battery' 
                    />
                </div>
            </div>
            <div className="login-container">
                <div className="background">
                    <div 
                        className="circle circle1">
                    </div>
                    <div
                        className="circle circle2">
                    </div>
                </div>
                <div 
                    className='login-container-avatar'>
                    <img 
                    src={userIcon}
                    />
                </div>
                <div className='login-container-inputs'>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div 
                    className='login-container-rememberme'>
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label 
                        htmlFor="remember-me">
                        Remember me
                    </label>
                </div>
                <div className='login-container-signin-button' onClick={handleClick}>
                <button 
                    className='login-signin-button'>Sign In
                </button>
                </div>
                <div 
                    className='login-container-forgot-password'>
                    <a href="#">Forgot password?</a>  
                </div>
            <div 
                className='login-footer'>
            </div>                      
            </div>
        </section>
    );
}



