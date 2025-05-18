import React from "react";
import "./JobInfoBar.css";
import { Search, MapPin, User } from 'lucide-react';

const JobInfoBar = () => {
  return(
    <div className="job-info-bar">
      <div className="status-tag open">
        <span>Open</span>
      </div>
      
      <div className="job-info-item">
        <Search size={16} />
        <span>Researcher</span>
      </div>
      
      <div className="job-info-item">
        <MapPin size={16} />
        <span>Onsite</span>
      </div>
      
      <div className="job-info-item">
        <User size={16} />
        <span>Created by</span>
        <div className="creator-info">
          <div className="creator-avatar">
            <img src="/avatars/bagus.jpg" alt="Bagus Fikri" />
          </div>
          <span>Bagus Fikri</span>
        </div>
      </div>
    </div>
  );
}

export default JobInfoBar;