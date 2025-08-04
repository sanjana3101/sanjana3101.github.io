import React from 'react';

const Resume = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '70%',
          maxWidth: '900px',
          height: '800px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <iframe
          src="/Resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
          style={{
            border: 'none',
            borderRadius: '12px',
          }}
        />
      </div>
    </div>
  );
};

export default Resume;
