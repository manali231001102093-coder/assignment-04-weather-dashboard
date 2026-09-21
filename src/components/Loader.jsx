import React from 'react';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
      <div className="spinner" style={{ 
        width: '50px', 
        height: '50px', 
        border: '4px solid rgba(255,255,255,0.1)', 
        borderTopColor: 'var(--primary-light)', 
        borderRadius: '50%', 
        animation: 'spin 1s linear infinite' 
      }}></div>
      <style>{`
        @keyframes spin { 
          to { transform: rotate(360deg); } 
        }
      `}</style>
    </div>
  );
};

export default Loader;
