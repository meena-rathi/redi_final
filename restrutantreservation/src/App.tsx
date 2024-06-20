import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views//Home';
import Menu from './views/Menu';
import { useState } from 'react';
import ReservationForm from './views/ReservationForm';
import ViewReservation from './views/ViewReservation';
import EditReservationForm from './components/EditReservationForm';
import Signup from './views/Signup';
import Login from './views/Login';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservationform" element={<ReservationForm />} />
          <Route path="/viewreservation" element={<ViewReservation />} />
          <Route path="/EditReservationform" element={<EditReservationForm/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLogin={() => {}} setUserName={() =>{}} />} />      
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
