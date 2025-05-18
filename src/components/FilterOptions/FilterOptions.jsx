import React from "react";
import "./FilterOptions.css";
import { Calendar, TrendingUp, Filter, Users, LayoutGrid, Plus } from 'lucide-react';

const FilterOptions = ({ onAddClick }) => {
  return(
    <div className="filter-options">
      <div className="filter-left">
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
        
        <button className="filter-button">
          <Calendar size={16} />
          <span>Date Range</span>
          <span className="caret"></span>
        </button>
        
        <button className="filter-button">
          <TrendingUp size={16} />
          <span>Score Range</span>
          <span className="caret"></span>
        </button>
        
        <button className="filter-button">
          <Filter size={16} />
          <span>Advance Filter</span>
          <span className="caret"></span>
        </button>
      </div>
      
      <div className="filter-right">
        <button className="refer-button">
          <Users size={16} />
          <span>Refer People</span>
        </button>
        
        <button className="view-button">
          <LayoutGrid size={16} />
          <span>Kanban</span>
          <span className="caret"></span>
        </button>
        
        <button className="add-button" onClick={onAddClick}>
          <Plus size={16} />
          <span>Add Candidate</span>
        </button>
      </div>
    </div>
  );
}

export default FilterOptions;