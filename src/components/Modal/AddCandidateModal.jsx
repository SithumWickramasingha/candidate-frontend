import React, { useState } from "react";
import "./Modal.css";
import Modal from "./Modal";

const AddCandidateModal = ({isOpen, onClose, onSave}) => {
  
  const initialState = {
    name: '',
    stage: 'Applying Period',
    appliedAt: new Date().toISOString().split('T')[0],
    overall: 3.0,
    isReferred: false,
    hasAssessment: false
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the date properly
    const date = new Date(formData.appliedAt);
    const formattedDate = `${date.getDate()} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()]}, ${date.getFullYear()}`;
    
    const newCandidate = {
      ...formData,
      id: Date.now(),
      appliedAt: formattedDate
    };
    
    onSave(newCandidate);
    setFormData(initialState);
    onClose();
  };



  return(
        <Modal isOpen={isOpen} onClose={onClose}>
      <div className="add-candidate-modal">
        <h2>Add New Candidate</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="stage">Stage</label>
            <select
              id="stage"
              name="stage"
              value={formData.stage}
              onChange={handleChange}
            >
              <option value="Applying Period">Applying Period</option>
              <option value="Screening">Screening</option>
              <option value="Interview">Interview</option>
              <option value="Test">Test</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="appliedAt">Applied Date</label>
            <input
              type="date"
              id="appliedAt"
              name="appliedAt"
              value={formData.appliedAt}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="overall">Overall Rating (1-5)</label>
            <input
              type="number"
              id="overall"
              name="overall"
              min="1"
              max="5"
              step="0.5"
              value={formData.overall}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="isReferred"
              name="isReferred"
              checked={formData.isReferred}
              onChange={handleChange}
            />
            <label htmlFor="isReferred">Referred Candidate</label>
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="hasAssessment"
              name="hasAssessment"
              checked={formData.hasAssessment}
              onChange={handleChange}
            />
            <label htmlFor="hasAssessment">Has Assessment</label>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-save">
              Save Candidate
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddCandidateModal;