import React from 'react';
import './Header.css';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return(
     <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-symbol">✨</span>
          <span className="logo-text">tiimi</span>
        </div>
        <div className="nav-section">
          <span className="nav-item active">Recruitment</span>
        </div>
      </div>
      
      <div className="header-center">
        <div className="nav-tabs">
          <div className="tab">
            <span className="tab-text">Jobs</span>
            <span className="tab-count">8</span>
          </div>
          <div className="tab active">
            <span className="tab-text">Candidate</span>
            <span className="tab-count">541</span>
          </div>
          <div className="tab">
            <span className="tab-text">Career Site</span>
          </div>
        </div>
      </div>
      
      <div className="header-right">
        <button className="action-button">
          <Plus size={16} />
        </button>
        <button className="icon-button">
          <Search size={20} />
        </button>
        <button className="icon-button">
          <Bell size={20} />
          <span className="notification-badge">5</span>
        </button>
        <div className="user-avatar">
          <img src="/avatars/user.jpg" alt="User" />
        </div>
      </div>
    </header>
  );
}

export default Header;
