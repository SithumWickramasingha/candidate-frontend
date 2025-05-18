import React from "react";
import "./Modal.css";
import Modal from "./Modal";
import { Star, Edit2, Trash2 } from 'lucide-react';

const CandidateModal = ({isOpen, onClose, candidate, onEdit, onDelete}) => {

  if (!candidate) return null;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        fill={i < rating ? "#facc15" : "none"}
        color={i < rating ? "#facc15" : "#cbd5e1"}
      />
    ));
  };


  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="candidate-modal">
        <div className="candidate-modal-header">
          <div className="candidate-modal-avatar">
            {candidate.image ? (
              <img src={candidate.image} alt={candidate.name} />
            ) : (
              <span>{candidate.name.charAt(0)}</span>
            )}
          </div>
          <div className="candidate-modal-title">
            <h2>{candidate.name}</h2>
            <div className="candidate-modal-stage">
              <span className={`stage-badge ${candidate.stage.toLowerCase().replace(/\s+/g, '-')}`}>
                {candidate.stage}
              </span>
            </div>
          </div>
        </div>

        <div className="candidate-modal-details">
          <div className="detail-item">
            <span className="detail-label">Applied on:</span>
            <span className="detail-value">{candidate.appliedAt}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Overall Rating:</span>
            <div className="detail-value rating-stars">
              {renderStars(candidate.overall)}
              <span className="rating-text">{candidate.overall}</span>
            </div>
          </div>
          {candidate.isReferred && (
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className="detail-badge referred">Referred</span>
            </div>
          )}
          <div className="detail-item">
            <span className="detail-label">Assessment:</span>
            <span className="detail-value">
              {candidate.hasAssessment ? "Completed" : "Not Available"}
            </span>
          </div>
        </div>

        <div className="candidate-modal-actions">
          <button className="btn btn-edit" onClick={() => onEdit(candidate)}>
            <Edit2 size={16} />
            Edit
          </button>
          <button className="btn btn-delete" onClick={() => onDelete(candidate.id)}>
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default CandidateModal;