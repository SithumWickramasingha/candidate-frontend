import React from "react";
import "./JobDetailsBar.css";
import { ArrowLeft, ChevronLeft, ChevronRight, MoreHorizontal, Share } from 'lucide-react';

const JobDetailsBar = () => {
  return(
     <div className="job-details-bar">
      <div className="job-details-left">
        <button className="back-button">
          <ArrowLeft size={20} />
        </button>
        <h1 className="job-title">Research and Development Officer</h1>
        <button className="dropdown-button">
          <ChevronLeft size={16} />
        </button>
      </div>
      
      <div className="job-details-center">
        <button className="pagination-button">
          <ChevronLeft size={20} />
        </button>
        <span className="pagination-info">1 of 8</span>
        <button className="pagination-button">
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="job-details-right">
        <button className="options-button">
          <MoreHorizontal size={20} />
        </button>
        <button className="share-button">
          <Share size={16} />
          <span>Share & Promote</span>
        </button>
      </div>
    </div>
  );
}

export default JobDetailsBar;