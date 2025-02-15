import React, { useState } from 'react';
import './Documents.css';

const Documents = () => {
  const [files, setFiles] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      alert('Please select at least one file to upload.');
      return;
    }

    // Simulate file upload (replace with actual API call)
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('documents', file);
    });

    alert('Files uploaded successfully! (This is a simulation)');
    console.log('Uploaded files:', files);
  };

  const handleLogin = () => {
    const password = prompt('Enter the password to access this feature:');
    if (password === 'Jayesh Nakum') { // Replace with your desired password
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Access denied.');
    }
  };

  if (!isAuthenticated) {
    return (
      <section id="documents">
        <h2>Upload Documents</h2>
        <button onClick={handleLogin}>Login to Upload/Remove Documents</button>
      </section>
    );
  }

  return (
    <section id="documents">
      <h2>Upload Documents</h2>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />
      <button onClick={handleUpload}>Upload</button>

      {files.length > 0 && (
        <div className="file-list">
          <h3>Selected Files:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <span>{file.name}</span>
                <button onClick={() => handleRemoveFile(index)}>Remove</button>
                <div className="preview">
                  {file.type.startsWith('image/') ? (
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                  ) : (
                    <iframe
                      src={URL.createObjectURL(file)}
                      title={file.name}
                      width="100%"
                      height="300px"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Documents;