import React from 'react';
import './Login.css';
import wifiIcon from './assets/wifi.png';
import signalIcon from './assets/signal.png';
import batteryIcon from './assets/battery.png';
import userIcon from './assets/user.png';

export function Login() {
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
                <div class="background">
                    <div 
                        class="circle circle1">
                    </div>
                    <div
                        class="circle circle2">
                    </div>
                </div>
                <div 
                    className='login-container-avatar'>
                    <img 
                    src={userIcon}
                    />
                </div>
                <div className='login-container-inputs'>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                </div>
                <div 
                    className='login-container-rememberme'>
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div className='login-container-signin-button'>
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



