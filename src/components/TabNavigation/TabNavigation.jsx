import React from "react";
import "./TabNavigation.css";
import { Users, FileText, Calendar, BarChart2, Activity, FileSpreadsheet, Settings } from 'lucide-react';

const TabNavigation = () => {
  return(
    <div className="tab-navigation">
      <div className="tab active">
        <Users size={16} />
        <span>Candidates</span>
      </div>
      <div className="tab">
        <FileText size={16} />
        <span>Job Info</span>
      </div>
      <div className="tab">
        <Calendar size={16} />
        <span>Calendar</span>
      </div>
      <div className="tab">
        <BarChart2 size={16} />
        <span>Score Card</span>
      </div>
      <div className="tab">
        <Activity size={16} />
        <span>Activity</span>
      </div>
      <div className="tab">
        <FileSpreadsheet size={16} />
        <span>Application Form</span>
      </div>
      <div className="tab">
        <Settings size={16} />
        <span>Automation</span>
        <span className="tab-badge">5</span>
      </div>
    </div>
  );
}

export default TabNavigation;