import React from 'react';
import { useNavigate, Route } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const navigate = useNavigate
  
    return (
      <Route
        {...rest}
        render={(props) =>
        isAdmin ? <Component {...props} /> : navigate('/login')
        }
      />
    );
  };

export default ProtectedRoute;
