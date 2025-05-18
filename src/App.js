import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import JobDetailsBar from './components/JobDetailsBar/JobDetailsBar';
import SideBar from './components/SideBar/SideBar';
import JobInfoBar from './components/JobInfoBar/JobInforBar';
import TabNavigation from './components/TabNavigation/TabNavigation';
import FilterOptions from './components/FilterOptions/FilterOptions';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <JobDetailsBar/>
        <JobInfoBar/>
        
        <TabNavigation/>
        <FilterOptions/>
        <SideBar/>
      </header>
    </div>
  );
}

export default App;
