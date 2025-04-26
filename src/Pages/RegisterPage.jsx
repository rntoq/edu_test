import React, { useState } from 'react';
import Header from '../Components/Login_header';
import { Link } from 'react-router-dom';
import PasswordInput from '../Components/PasswordInput';
import PhoneInput from '../Components/PhoneNumberInput';
import SmsVerificationModal from '../Components/SmsVerificationModal'; // Импортируем модальное окно

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isEmail, setIsEmail] = useState(true); // Состояние для переключения
    const [error, setError] = useState(''); // Состояние для ошибки
    const [isSmsModalOpen, setIsSmsModalOpen] = useState(false); // Состояние для модального окна

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const cleaned = phone.replace(/\D/g, '');
        return cleaned.length === 11 && cleaned.startsWith('7');
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Құпиясөздер сәйкес келмейді');
            return;
        }

        // Проверка на корректность email или телефона
        if (isEmail && !validateEmail(email)) {
            setError('Некорректный email');
            return;
        }
        if (!isEmail && !validatePhone(emailOrPhone)) {
            setError('Некорректный номер телефона');
            return;
        }

        setError(''); // Очистим ошибку, если всё правильно
        console.log({ email, emailOrPhone, firstName, lastName, password, confirmPassword });
        // Дальше отправка данных на сервер или другие действия
        if (!isEmail) {
            setIsSmsModalOpen(true);
        } else {
            // Иначе — отправка данных сразу или редирект
            // Например:
            alert("Пошта арқылы тіркеу сәтті аяқталды!");
        }
    };


    const handleSmsVerificationSubmit = (smsCode) => {
        console.log(`SMS код: ${smsCode}`);
        // Логика для обработки SMS-кода
        setIsSmsModalOpen(false); // Закрываем модальное окно после подтверждения
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container h-full flex justify-center">
                <div className="max-w-2xl max-w-md my-9 bg-white rounded-3xl shadow-md px-8 py-6">
                    <h2 className="text-2xl text-gray-800 text-center mb-6">Тіркелу</h2>

                    <div className="flex justify-center space-x-4 mb-6">
                        <button
                            className={`w-full px-4 py-2 border-b-2 ${isEmail ? 'border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            onClick={() => setIsEmail(true)}
                        >
                            Почта арқылы
                        </button>
                        <button
                            className={`w-full px-4 py-2 border-b-2 ${!isEmail ? 'border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                            onClick={() => setIsEmail(false)}
                        >
                            Телефон арқылы
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {isEmail ? (
                            <div className="mb-4">
                                <label className="block text-sm text-gray-700 mb-2">Почта</label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="abc@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {!validateEmail(email) && email.length > 0 && (
                                    <div className="text-red-500 text-sm mt-1">Некорректный email</div>
                                )}
                            </div>
                        ) : (
                            <PhoneInput
                                label="Телефон"
                                value={emailOrPhone}
                                onChange={setEmailOrPhone}
                                required
                            />
                        )}

                        {/* Имя и Фамилия в один ряд */}
                        <div className="flex gap-4 mb-4">
                            <div className="w-1/2">
                                <label className="block text-sm text-gray-700 mb-2">Есіміңіз</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Аяжан"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="w-1/2">
                                <label className="block text-sm text-gray-700 mb-2">Тегіңіз</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Сағындық"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Пароли в один ряд */}
                        <div className="flex gap-4 mb-4">
                            <div className="w-1/2">
                                <PasswordInput password={password} setPassword={setPassword} label="Құпиясөз" />
                            </div>
                            <div className="w-1/2">
                                <PasswordInput password={confirmPassword} setPassword={setConfirmPassword} label="Құпиясөзді растаңыз" />
                            </div>
                        </div>

                        {/* Ошибка */}
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                        >
                            Тіркелу
                        </button>
                    </form>

                    <div className="mt-6 text-center flex">
                        <p className="text-gray-600">Тіркелгенсіз бе?</p>
                        <Link to="/login" className="text-blue-600 hover:underline font-medium ml-3.5">Кіру</Link>
                    </div>
                </div>
            </div>

            {/* Модальное окно для ввода SMS-кода */}
            <SmsVerificationModal
                isOpen={isSmsModalOpen}
                onClose={() => setIsSmsModalOpen(false)}
                onSubmit={handleSmsVerificationSubmit}
            />
        </div>
    );
};

export default RegisterPage;
