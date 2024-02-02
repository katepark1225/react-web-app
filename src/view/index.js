import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { getSession } from '../storage/session'


const Landing = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (getSession()) {
      navigate('/home')
    }
  }, [navigate]);

  return (
    <>
    </>
  );
};

export default Landing;
