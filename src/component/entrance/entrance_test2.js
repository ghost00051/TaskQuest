import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import first from '../../img/first.svg';
import closeEyes from '../../img/CloseEyes.svg';
import openEyes from '../../img/OpenEyes.svg';
import '../../css/reg_entr/index.css';
import '../../css/reg_entr/adaptiv.css';
import SuccessfulEntrance from '../successful/SuccessfulEntrance';

const Entr = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const passwordInputRef = useRef(null);
  const eyesOpenRef = useRef(null);
  const eyesCloseRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.type = showPassword ? 'text' : 'password';
    }
  }, [showPassword]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic client-side validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/delivery_api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email, password }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      setShowSuccess(true);
      
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      setError(error.message || 'An error occurred during login');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="header">
      {showSuccess && <SuccessfulEntrance />}
      
      <div className={`content ${showSuccess ? 'blur' : ''}`}>
        <p className="Microservice-name">TaskQuest</p>
        
        <div className="Flex-comp">
          <div className="left-block">
            <p className="Enter">Войти</p>
            
            <form className="entrance-form" onSubmit={handleSubmit}>
              {error && <div className="error-message">{error}</div>}
              
              <div className="input-checked input-email">
                <label htmlFor="email-input" className="top-email">
                  Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="Введите Email-адрес ...."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-checked input-password">
                <div className="input-second">
                  <label htmlFor="password-input" className="top-password">
                    Пароль
                  </label>
                  <input
                    id="password-input"
                    ref={passwordInputRef}
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="chekPassword" onClick={togglePasswordVisibility}>
                  <img
                    src={showPassword ? openEyes : closeEyes}
                    alt={showPassword ? "Скрыть пароль" : "Показать пароль"}
                    className="eye-icon"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="entrance-button"
                disabled={isLoading}
              >
                {isLoading ? 'Загрузка...' : 'Войти'}
              </button>
            </form>

            <div className="registration">
              <p>Еще нет аккаунта?</p>
              <Link to="/registration">Зарегистрироваться</Link>
            </div>
          </div>

          <div>
            <img className="logo" src={first} alt="Логотип при входе" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entr;