import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorMessage = ({ message }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.3)',
      borderRadius: '1rem',
      padding: '1.5rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
      color: '#fca5a5',
      marginTop: '2rem'
    }}>
      <AlertCircle size={24} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
      <div>
        <h4 style={{ fontWeight: 600, marginBottom: '0.25rem', color: '#fef2f2' }}>Error</h4>
        <p style={{ fontSize: '0.95rem' }}>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
