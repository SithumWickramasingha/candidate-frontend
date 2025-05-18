import React from "react";
import "./KanbanBoard.css";
import CandidateCard from "../CandidateCard/CandidateCard";
const KanbanBoard = ({candidates, onCandidateClick}) => {
  console.log(candidates);

  const stages = [
    { name: 'Applying Period', color: 'orange', count: candidates.filter(c => c.stage === 'Applying Period').length },
    { name: 'Screening', color: 'purple', count: candidates.filter(c => c.stage === 'Screening').length },
    { name: 'Interview', color: 'blue', count: candidates.filter(c => c.stage === 'Interview').length },
    { name: 'Test', color: 'teal', count: candidates.filter(c => c.stage === 'Test').length }
  ];

  return(

    <div className="kanban-board">
      {stages.map((stage) => (
        <div key={stage.name} className="kanban-column">
          <div className={`column-header ${stage.color}`}>
            <h3>{stage.name}</h3>
            <span className="column-count">{stage.count}</span>
          </div>
          <div className="column-content">
            {candidates
              .filter(candidate => candidate.stage === stage.name)
              .map(candidate => (
                <CandidateCard 
                  key={candidate.id} 
                  candidate={candidate} 
                  onClick={() => onCandidateClick(candidate)} 
                />
              ))
            }
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;