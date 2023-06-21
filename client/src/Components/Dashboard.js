import React, {useEffect} from 'react';
import Map from './Map';
import {useNavigate} from 'react-router-dom';
import './styleseet/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [logout, setLogoutState] = React.useState(false);
  // Add your code for authentication, logout functionality, and other content here
  useEffect(()=>{
    const cred = localStorage.getItem('credentials');
    if(!cred){
      navigate('/',{replace:true});
    }
  }, [logout]);
  const logout_handle = () => {
    localStorage.removeItem('credentials');
    setLogoutState(true);
  }
  return (
    <div>
      <div className='main-header'>
        <h2>Map Dashboard Page</h2>
        <button className='btn' onClick={logout_handle}>Logout</button>
      </div>
      <Map />
    </div>
  );
};

export default Dashboard;
