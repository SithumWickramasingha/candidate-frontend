import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JobDetailsBar from './components/JobDetailsBar/JobDetailsBar';
import Sidebar from './components/SideBar/SideBar';
import JobInfoBar from './components/JobInfoBar/JobInforBar';
import TabNavigation from './components/TabNavigation/TabNavigation';
import FilterOptions from './components/FilterOptions/FilterOptions';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import axios from 'axios';
import { useEffect } from 'react';
import CandidateModal from './components/Modal/CandidateModal';
import AddCandidateModal from './components/Modal/AddCandidateModal';

function App() {


  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [candidateToEdit, setCandidateToEdit] = useState(null);

  useEffect(() => {
    console.log("hello");
     axios.get('http://172.20.10.4:5000/api/candidates')
    .then((response) => {
      const formattedCandidates = response.data.map(candidate => ({
        id: candidate.id,
        name: candidate.candidate_name,
        stage: candidate.candidate_stage,
        appliedAt: new Date(candidate.application_date).toLocaleDateString('en-GB', {
          day: '2-digit', month: 'short', year: 'numeric'
        }), // e.g. 18 Apr, 2022
        overall: candidate.overall_score,
        isReferred: candidate.isReferred === 1,
        hasAssessment: candidate.hasAssessment === 1,
        image: null // Assuming no image for now
      }));
      console.log("formatted ",formattedCandidates);
      setCandidates(formattedCandidates);
    })
    .catch((error) => {
      console.error('Error fetching candidates:', error);
    });
  }, []);

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowCandidateModal(true);
  };

  const handleCloseModal = () => {
    setShowCandidateModal(false);
    setShowAddModal(false);
  };

  const handleAddCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
    setShowAddModal(false);
  };

  const handleEditCandidate = (updatedCandidate) => {
    setCandidateToEdit(updatedCandidate);
    setShowAddModal(true);
    setShowCandidateModal(false);
  };

  const handleUpdateCandidate = (updatedCandidate) => {
  setCandidates(
    candidates.map(candidate =>
      candidate.id === updatedCandidate.id ? updatedCandidate : candidate
    )
  );

  const handleCloseModal = () => {
    setShowCandidateModal(false);
    setShowAddModal(false);
    setCandidateToEdit(null);
  };

  setCandidateToEdit(null);
  setShowAddModal(false);
};


  const handleDeleteCandidate = (candidateId) => {
    axios
    .delete(`http://172.20.10.4:5000/api/candidates/${candidateId}`)
    .then(() => {
      setCandidates(candidates.filter((candidate) => candidate.id !== candidateId));
      setShowCandidateModal(false);
    })
    .catch((error) =>{
      console.log('Error deleting candidate', error);
    });
    
  };

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <JobDetailsBar />
          <JobInfoBar />
          <TabNavigation />
          <FilterOptions onAddClick={() => setShowAddModal(true)} />
          <KanbanBoard 
            candidates={candidates} 
            onCandidateClick={handleCandidateClick} 
          />
        </div>
      </div>
      
      {showCandidateModal && (
        <CandidateModal
          isOpen={showCandidateModal}
          onClose={handleCloseModal}
          candidate={selectedCandidate}
          onEdit={handleEditCandidate}
          onDelete={handleDeleteCandidate}
        />
      )}
      
      {showAddModal && (
        <AddCandidateModal
          isOpen={showAddModal}
          onClose={handleCloseModal}
          onAdd={handleAddCandidate}
          onUpdate={handleUpdateCandidate}
          candidateToEdit={candidateToEdit}
        />
      )}
    </div>
  );
}

export default App;
