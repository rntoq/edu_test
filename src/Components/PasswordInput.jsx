import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PasswordInput = ({ password, setPassword }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-4 relative">
            <label className="block text-sm text-gray-700 mb-2">Құпиясөз</label>
            <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button
                type="button"
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <EyeIcon className="h-5 w-5" />
                ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                )}
            </button>
        </div>
    );
};

export default PasswordInput;
