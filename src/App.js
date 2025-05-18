import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import JobDetailsBar from './components/JobDetailsBar/JobDetailsBar';
import SideBar from './components/SideBar/SideBar';
import TabNavigation from './components/TabNavigation/TabNavigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <JobDetailsBar/>
        <SideBar/>
        <TabNavigation/>
      </header>
    </div>
  );
}

export default App;
