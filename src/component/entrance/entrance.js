import React, { useEffect, useState } from 'react';
import first from '../../img/first.svg';
import сloseEyes from '../../img/CloseEyes.svg'
import openEyes from '../../img/OpenEyes.svg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Entr = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };
  useEffect(() => {
    const inputPS = document.getElementById('password-input');
    const eyesOpen = document.getElementById('OpenEyes');
    const eyesClose = document.getElementById('CloseEyes');

    if (inputPS && eyesOpen && eyesClose) {
      eyesOpen.addEventListener('click', function () {
        inputPS.type = 'password';
        eyesOpen.style.display = 'none';
        eyesClose.style.display = 'inline';
      });

      eyesClose.addEventListener('click', function () {
        inputPS.type = 'text';
        eyesClose.style.display = 'none';
        eyesOpen.style.display = 'inline';
      });
    }

    return () => {
      if (eyesOpen) {
        eyesOpen.removeEventListener('click', () => { });
      }
      if (eyesClose) {
        eyesClose.removeEventListener('click', () => { });
      }
    };
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/delivery_api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email,
          password
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
      } else {
        throw new Error('Login failed');
      }
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="header">
      <div>
        <p className="Microservice-name">TaskQuest</p>
        <div className="Flex-comp">
          <div className="left-block">
            <p className="Enter">Войти</p>
            <form className='entrance-form'
              onSubmit={handleSubmit}>
              <div className="input-checked input-email">
                <label htmlFor="email-input" className="top-email">
                  Email
                </label>
                <input
                  id="email-input"
                  type="email" // Исправленный тип
                  placeholder="Введите Email-адрес ...."
                  aria-label="Введите email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-checked input-password">
                <div>
                  <label htmlFor="password-input" className="top-password">
                    Пароль
                  </label>
                  <input
                    id="password-input"
                    type="password" // Исправленный тип
                    placeholder="Введите пароль"
                    aria-label="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="chekPassword">
                  <img
                    src={сloseEyes}
                    alt="Пароль открыт"
                    className="CloseEyes"
                    id='CloseEyes'
                    style={{ display: 'inline' }}
                  />
                  <img
                    src={openEyes}
                    alt="Пароль зыкрыт"
                    className="OpenEyes"
                    id='OpenEyes'
                    style={{ display: 'none' }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="entrance-button"
                aria-label="Войти в аккаунт"
                id='entrance-button'
                onClick={handleLoginClick}
              >Войти</button>
            </form>
            <div className='registration'>
              <p>Еще нет аккаунта?</p>
              <Link to="/registration">Зарегестрироваться</Link>
            </div>
          </div>
          <div>
            <img
              src={first}
              alt="Логотип при входе"
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default Entr;