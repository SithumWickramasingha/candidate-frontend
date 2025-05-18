import React from "react";
import "./SideBar.css";
import { Home, Users, BarChart, Briefcase, Settings, HelpCircle } from 'lucide-react';

const SideBar = () => {
  return(
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="profile-circle">
          <span>FI</span>
        </div>
        
        <div className="sidebar-nav">
          <button className="sidebar-button">
            <Home size={20} />
          </button>
          <button className="sidebar-button active">
            <Users size={20} />
            <span className="notification-dot"></span>
          </button>
          <button className="sidebar-button">
            <BarChart size={20} />
          </button>
          <button className="sidebar-button">
            <Briefcase size={20} />
          </button>
          <button className="sidebar-button">
            <Settings size={20} />
          </button>
        </div>
      </div>
      
      <div className="sidebar-bottom">
        <button className="sidebar-button">
          <HelpCircle size={20} />
        </button>
      </div>
    </div>
  );
}

export default SideBar;