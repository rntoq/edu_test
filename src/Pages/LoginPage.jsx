import React, { useState } from 'react';
import Header from '../Components/Login_header';
import { Link } from 'react-router-dom';
import PasswordInput from '../Components/PasswordInput';

const LoginPage = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ emailOrPhone, password });
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container h-full flex justify-center">
                <div className="w-full max-w-md my-9 bg-white rounded-3xl shadow-md px-8 py-6 ">
                    <h2 className="text-2xl text-gray-800 text-center mb-6">Кіру</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-2">Почта немесе телефон</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+7 (...) ... .. .."
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                required
                            />
                        </div>

                        <PasswordInput password={password} setPassword={setPassword} />


                        <div className="mb-4 text-sm flex justify-between items-center">
                            <a href="#" className="text-blue-600 hover:underline text-sm">Забыли пароль?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Кіру
                        </button>
                    </form>

                    <div className="mt-6 text-sm text-center flex">
                        <p className="text-gray-600">Әлі тіркелмедіңіз бе?</p>
                        <Link to="/register" className="text-blue-600 ml-3.5 hover:underline font-medium">Тіркелу</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;