import React, { useEffect, useState } from 'react';
import '../../css/reg_entr/suc.css'


const SuccessfulRegistration = () => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='god-block'>
            <p className='heading'>Вы успешно прошли регистрацию</p>
            <div className='countdown'>
                <p>Перенаправление на страницу через:</p>
                <p id="countdown">{countdown}</p>
            </div>
        </div>
    );
};

export default SuccessfulRegistration;