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
import CandidateData from './data/CandidateData';
import CandidateModal from './components/Modal/CandidateModal';
import AddCandidateModal from './components/Modal/AddCandidateModal';

function App() {


  const [candidates, setCandidates] = useState(CandidateData);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

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
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === updatedCandidate.id ? updatedCandidate : candidate
      )
    );
    setShowCandidateModal(false);
  };

  const handleDeleteCandidate = (candidateId) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== candidateId));
    setShowCandidateModal(false);
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
          candidate={selectedCandidate}
          onClose={handleCloseModal}
          onEdit={handleEditCandidate}
          onDelete={handleDeleteCandidate}
        />
      )}
      
      {showAddModal && (
        <AddCandidateModal 
          onClose={handleCloseModal}
          onAdd={handleAddCandidate}
        />
      )}
    </div>
  );
}

export default App;
