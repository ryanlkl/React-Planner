import './App.css';
import React from 'react';
import Home from './pages/Home';
import DailyTodo from './pages/DailyTodo';
import WeeklyTodo from './pages/WeeklyTodo';
import MonthlyTodo from './pages/MonthlyTodo';

import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/dailytodo' element={ <DailyTodo /> } />
            <Route path='/weeklytodo' element={ <WeeklyTodo />} />
            <Route path='/monthlytodo' element={ <MonthlyTodo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
