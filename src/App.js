import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Providers from './pages/Providers';
import Patients from './pages/Patients';
import Appointment from './pages/Appointment';
import RegisterForm from './pages/forms/RegisterForm';
import LoginForm from './pages/forms/LoginForm';
import PatientForm from './pages/forms/PatientForm';
import ProviderForm from './pages/forms/ProviderForm';
import BookAppointmentForm from './pages/forms/BookAppointmentForm';
import ScheduleForm from './pages/forms/ScheduleForm';
import PaymentPage from './pages/PaymentPage';
import PatientDashboard from './pages/forms/PatientDashboard';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/patients/register" element={<PatientForm />} />
          <Route path="/providers/register" element={<ProviderForm />} />
          <Route path="/book-appointment" element={<BookAppointmentForm />} />
          <Route path="/schedule" element={<ScheduleForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/patientdashboard" element={<PatientDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
