import React, { useEffect } from 'react';
import first from '../../img/first.svg';
import сloseEyes from '../../img/CloseEyes.svg'
import openEyes from '../../img/OpenEyes.svg'

const Entr = () => {
  useEffect(() => {
    const inputPS = document.getElementById('password-input');
    const eyesOpen = document.getElementById('OpenEyes');
    const eyesClose = document.getElementById('CloseEyes');

    if (inputPS && eyesOpen && eyesClose) {
      eyesOpen.addEventListener('click', function() {
        inputPS.type = 'password';
        eyesOpen.style.display = 'none';
        eyesClose.style.display = 'inline';
      });

      eyesClose.addEventListener('click', function() {
        inputPS.type = 'text';
        eyesClose.style.display = 'none';
        eyesOpen.style.display = 'inline';
      });
    }

    return () => {
      if (eyesOpen) {
        eyesOpen.removeEventListener('click', () => {});
      }
      if (eyesClose) {
        eyesClose.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="header">
      <div>
        <p className="Microservice-name">TaskQuest</p>
        <div className="Flex-comp">
          <div className="left-block">
            <p className="Enter">Войти</p>
            <form role="entrance" className='entrance-form'>
              <div className="input-checked input-email">
                <label htmlFor="email-input" className="top-email">
                  Email
                </label>
                <input
                  id="email-input"
                  type="email" // Исправленный тип
                  placeholder="Введите Email-адрес ...."
                  aria-label="Введите email"
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
              >Войти</button>
            </form>
            <div className='registration'>
              <p>Еще нет аккаунта?</p>
              <Link to="/registration">Зарегестрироваться</Link>
              <Route path="/registration" component={reg}/>
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