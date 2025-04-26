import React from 'react';
import { BellIcon, Bars3Icon , ChevronDownIcon} from '@heroicons/react/24/outline';

const MainHeader = ({ toggleSidebar, isSidebarOpen }) => {
    return (
        <header className={`main-header ${isSidebarOpen ? 'shifted' : ''}`}>
            <Bars3Icon className="icon" onClick={toggleSidebar} />
            <div className="user-section">
                <BellIcon className="icon" />
                <div className="user-info">
                    <img src="/avatar.jpg" alt="User Avatar" className="avatar" />
                    <span>Saltanat</span>
                    <ChevronDownIcon className="icon" />
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
