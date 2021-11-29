import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import SignUp from './components/pages/SignUp/SignUp';
import Votes from  './components/Votes';
import { BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import  VoteForm from './components/pages/VoteForm/VoteForm'

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/votes' element={<Votes/>} />
          <Route path='/vote-form' element={<VoteForm/>}/>
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
