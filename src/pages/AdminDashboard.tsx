import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user?.isAdmin) {
    return null;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-sections">
        <section>
          <h2>User Management</h2>
          {/* Add user management functionality */}
        </section>
        
        <section>
          <h2>Content Management</h2>
          {/* Add content management functionality */}
        </section>
        
        <section>
          <h2>Analytics</h2>
          {/* Add analytics functionality */}
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
