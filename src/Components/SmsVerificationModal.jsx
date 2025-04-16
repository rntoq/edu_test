import React, { useState } from 'react';

const SmsVerificationModal = ({ isOpen, onClose, onSubmit }) => {
    const [smsCode, setSmsCode] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (smsCode.length !== 6) {
            setError('SMS код должен быть длиной 6 цифр');
            return;
        }
        setError('');
        onSubmit(smsCode);
        onClose(); // Закрытие модального окна
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-80">
                <h2 className="text-xl font-bold text-center mb-4">Введите код из SMS</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            maxLength="6"
                            value={smsCode}
                            onChange={(e) => setSmsCode(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Введите код"
                            required
                        />
                        {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Подтвердить
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full text-gray-500 py-2 mt-3 border-t border-gray-300 text-center"
                    >
                        Отмена
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SmsVerificationModal;
