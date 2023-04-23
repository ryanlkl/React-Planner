import './App.css';
import React from 'react';
import Home from './pages/Home';
import Todo from './pages/DailyTodo';
import Planner from './pages/Planner';
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
            <Route path='/todo' element={ <Todo /> } />
            <Route path='/planner' element={ <Planner />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
