import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // Listen for changes in userData context and update loggedInUserData if needed
  useEffect(() => {
    if (user === 'employee' && loggedInUserData && userData) {
      const updatedEmployee = userData.find(emp => emp.firstName === loggedInUserData.firstName);
      if (updatedEmployee && JSON.stringify(updatedEmployee) !== JSON.stringify(loggedInUserData)) {
        setLoggedInUserData(updatedEmployee);
        localStorage.setItem('loggedInUser', JSON.stringify({ 
          role: 'employee', 
          data: updatedEmployee 
        }));
      }
    }
  }, [userData, user, loggedInUserData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <>
      {/* Show login page if the user is not logged in */}
      {!user ? <Login handleLogin={handleLogin} /> : null}

      {/* Show AdminDashboard or EmployeeDashboard based on logged in role */}
      {user === 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
