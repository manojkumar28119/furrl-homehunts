import React from 'react';

const SharePopup = (props) => {
  const {url,onClose} = props
  const copyToClipboard = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard');
      onClose();
    } catch (error) {
      console.error('Error copying link to clipboard:', error);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>Share this link</h2>
        <p>{url}</p>
        <button onClick={copyToClipboard} style={styles.button}>Copy Link</button>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

const styles = { 
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: '#7e59e7',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  closeButton: {
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '4px',
  }
};

export default SharePopup;
