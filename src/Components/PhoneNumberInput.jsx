import React from 'react';

const PhoneInput = ({ value, onChange, label, required }) => {
    // Функция для форматирования номера
    const formatPhoneNumber = (phone) => {
        // Убираем все нецифровые символы
        const cleaned = phone.replace(/\D/g, '');

        // Форматируем номер в формат +7 (7**) *** ** **
        if (cleaned.length <= 9) {
            const part1 = cleaned.slice(0, 1); // +7
            const part2 = cleaned.slice(1, 2); // 7
            const part3 = cleaned.slice(2, 4); // (7**)
            const part4 = cleaned.slice(4, 7); // ***
            const part5 = cleaned.slice(7, 11); // **

            // Возвращаем номер в нужном формате
            return `+7 (${part2}${part3}) ${part4} ${part5}`;
        }
        return phone;
    };

    const handleInputChange = (e) => {
        // Отформатируем номер на лету
        const formattedPhone = formatPhoneNumber(e.target.value);
        onChange(formattedPhone);
    };

    return (
        <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2">{label}</label>
            <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+7 (7**) *** ****"
                value={value}
                onChange={handleInputChange}
                required={required}
                maxLength={17} // Ограничиваем длину до 18 символов
            />
        </div>
    );
};

export default PhoneInput;
