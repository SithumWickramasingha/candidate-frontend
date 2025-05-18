import React from "react";
import "./CandidateCard.css";
import { Star, MoreHorizontal, User } from 'lucide-react';

const CandidateCard = ({candidate, onClick}) => {

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          fill={i < rating ? "#ffc107" : "transparent"} 
          stroke={i < rating ? "#ffc107" : "#cbd5e1"} 
        />
      );
    }
    return stars;
  };

  return(
    <div className="candidate-card" onClick={onClick}>
      <div className="card-header">
        <div className="avatar">
          {candidate.image ? (
            <img src={candidate.image} alt={candidate.name} />
          ) : (
            <div className="avatar-initials" style={{ backgroundColor: `hsl(${candidate.name.length * 30}, 70%, 60%)` }}>
              {getInitials(candidate.name)}
            </div>
          )}
        </div>
        <div className="header-info">
          <h3 className="candidate-name">{candidate.name}</h3>
          <p className="applied-date">Applied at {candidate.appliedAt}</p>
        </div>
        <button className="more-button">
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="card-footer">
        <div className="rating">
          {candidate.overall > 0 ? (
            <>
              <div className="stars">
                {renderStars(candidate.overall)}
              </div>
              <span className="rating-text">{candidate.overall} Overall</span>
            </>
          ) : candidate.hasAssessment ? (
            <div className="add-assessment">
              <User size={16} />
              <span>Add Assessment</span>
            </div>
          ) : null}
        </div>
        
        {candidate.isReferred && (
          <div className="referred-tag">
            <User size={14} />
            <span>Referred</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CandidateCard;