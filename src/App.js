import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './index.css';
import ContactInfo from './components/ContactInfo';
import HomeLoan from './components/LoanInfo/HomeLoan';
import EducationLoan from './components/LoanInfo/EducationLoan';
import BusinessLoan from './components/LoanInfo/BusinessLoan';
import MortgageLoan from './components/LoanInfo/MortgageLoan';
import Others from './components/LoanInfo/Others';
import PersonalLoan from './components/LoanInfo/PersonalLoan';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/education-loan' element={<EducationLoan />} />
                <Route path='/home-loan' element={<HomeLoan />}/>
                <Route path='business-loan' element={<BusinessLoan />}/>
                <Route path='personal-loan' element={<PersonalLoan />} />
                <Route path='mortgage-loan' element={<MortgageLoan />}/>
                <Route path='other-services' element={<Others />} />
                <Route path="/contact" element={<ContactInfo />} />
            </Routes>
        </Router>
    );
};

export default App;
