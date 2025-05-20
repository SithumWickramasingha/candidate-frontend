import React, { useState } from "react";
import "./Modal.css";
import Modal from "./Modal";
import axios from "axios";
import { useEffect } from "react";
import swal from "sweetalert";

const AddCandidateModal = ({ isOpen, onClose, onAdd, onUpdate, candidateToEdit}) => {
  const initialState = {
    name: '',
    stage: 'Applying Period',
    appliedAt: new Date().toISOString().split('T')[0],
    overall: 3.0,
    isReferred: false,
    hasAssessment: false
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (candidateToEdit) {
      setFormData({
        name: candidateToEdit.name,
        stage: candidateToEdit.stage,
        appliedAt: new Date(candidateToEdit.appliedAt).toISOString().split('T')[0],
        overall: candidateToEdit.overall,
        isReferred: candidateToEdit.isReferred,
        hasAssessment: candidateToEdit.hasAssessment
      });
    } else {
      setFormData(initialState);
    }
  }, [candidateToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        candidate_name: formData.name,
        candidate_stage: formData.stage,
        application_date: formData.appliedAt,
        overall_score: parseFloat(formData.overall),
        isReferred: formData.isReferred,
        hasAssessment: formData.hasAssessment
      };

      if(candidateToEdit){
        await axios.put(`http://172.20.10.4:5000/api/candidates/${candidateToEdit.id}`, payload);

        const updatedCandidate = {
          ...formData,
          id: candidateToEdit.id,
          appliedAt: new Date(formData.appliedAt).toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short', year: 'numeric'
          }).replace(/ /g, ' ')
        };

        onUpdate(updatedCandidate);
        swal("Sucess","Updated", "success");
      }else{
        const response = await axios.post("http://172.20.10.4:5000/api/candidates/", payload);

        const newCandidate = {
          ...formData,
          id: response.data.id || Date.now(), // Fallback if backend doesn’t return ID
          appliedAt: new Date(formData.appliedAt).toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short', year: 'numeric'
          }).replace(/ /g, ' ')
        };

        onAdd(newCandidate); 
        swal("Added Successfully","New Candidate Added to Database", "success");
      }

      
      setFormData(initialState);
      onClose();

    } catch (error) {
      console.error("Error saving candidate:", error);
      alert("Failed to save candidate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="add-candidate-modal">
        <h2>Add New Candidate</h2>
        <form onSubmit={handleSubmit}>
          {/* Input Fields */}
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
              step="0.1"
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
            <button type="button" className="btn btn-cancel" onClick={onClose} disabled={loading}>
              Cancel
            </button>
            <button type="submit" className="btn btn-save" disabled={loading}>
              {loading ? "Saving..." : "Save Candidate"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCandidateModal;
