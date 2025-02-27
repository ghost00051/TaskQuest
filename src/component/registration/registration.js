import React, { useEffect, useState } from 'react';
import first from '../../img/first.svg';
import сloseEyes from '../../img/CloseEyes.svg'
import openEyes from '../../img/OpenEyes.svg'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
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
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/delivery_api/users/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email, password }),
            });
    
            if (!response.ok) {
                throw new Error('Login failed');
            }
    
            const responseData = await response.json();
            console.log(responseData);
    
            // Check if the token is present in the response
            if (responseData && responseData.token) {
                alert('Регистрация пройдена успешно!'); // Alert for successful registration
                navigate('/'); // Navigate after successful registration
            } else {
                alert('Ошибка: ' + (responseData.message || 'Неизвестная ошибка'));
            }
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка. Попробуйте еще раз.');
        }
    };
    return (
        <div className="header">
            <div>
                <p className="Microservice-name">TaskQuest</p>
                <div className="Flex-comp">
                    <div className="left-block">
                        <p className="Enter">Зарегестрироваться</p>
                        <form className='entrance-form'
                            id="entrance-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="input-checked input-email">
                                <label htmlFor="email-input" className="top-email">
                                    Email
                                </label>
                                <input
                                    id="email-input"
                                    type="email"
                                    placeholder="Введите Email-адрес ...."
                                    aria-label="Введите email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-checked input-password input-1">
                                <div className='input-second'>
                                    <label htmlFor="password-input" className="top-password">
                                        Пароль
                                    </label>
                                    <input
                                        id="password-input2"
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
                            <div className="input-checked input-password">
                                <div>
                                    <label htmlFor="password-input" className="top-password">
                                        Повторите ввод пароля
                                    </label>
                                    <input
                                        id="password-input"
                                        type="password"
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
                            <p>Уже есть аккаунт?</p>
                            <button onClick={handleLoginClick}>Войти</button>
                        </div>
                    </div>
                    <div>
                        <img
                            className='logo'
                            src={first}
                            alt="Логотип при входе"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;