import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Membership from './components/Membership/Membership';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
        <Page1/>
        <Page2/>
        <Membership/>
        <Join/>


        <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
