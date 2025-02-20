import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminDashboard.css';

// Main Admin Dashboard Component
function AdminDashboard() {
  const [contentList, setContentList] = useState([]);
  const [title, setTitle] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedCategory, setEditedCategory] = useState('');

  const location = useLocation();

  useEffect(() => {
    // Load existing meditations from local storage on component mount
    const storedMeditations = localStorage.getItem('meditations');
    if (storedMeditations) {
      setContentList(JSON.parse(storedMeditations));
    }
  }, []);

  useEffect(() => {
    // Save updated content list to local storage
    localStorage.setItem('meditations', JSON.stringify(contentList));
  }, [contentList]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAudioFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContent = {
      id: Date.now(),
      title,
      audioFile: audioFile ? URL.createObjectURL(audioFile) : null,
      description,
      category,
    };

    setContentList([...contentList, newContent]);

    // Clear form fields
    setTitle('');
    setAudioFile(null);
    setDescription('');
    setCategory('');
  };

  const handleEdit = (content) => {
    setEditingId(content.id);
    setEditedTitle(content.title);
    setEditedDescription(content.description);
    setEditedCategory(content.category);
  };

  const handleSave = () => {
    const updatedContent = {
      id: editingId,
      title: editedTitle,
      audioFile: contentList.find(c => c.id === editingId).audioFile, // Keep the original audio file
      description: editedDescription,
      category: editedCategory,
    };

    const updatedList = contentList.map(content =>
      content.id === updatedContent.id ? updatedContent : content
    );
    setContentList(updatedList);
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const newList = contentList.filter(content => content.id !== id);
    setContentList(newList);
  };

  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link to="/admin" className={location.pathname === "/admin" ? "active" : ""}>Manage Content</Link>
          </li>
        </ul>
      </nav>

      <div className="content-area">
        <div className="content-section">
          <h3>Upload/Edit Content</h3>
          <form className="upload-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="audioFile">Audio File:</label>
              <input
                type="file"
                id="audioFile"
                onChange={handleAudioFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={handleCategoryChange}
                required
              />
            </div>

            <button type="submit">Upload</button>
          </form>
        </div>

        <div className="content-section">
          <h3>Uploaded Content</h3>
          <ul className="content-list">
            {contentList.map((content) => (
              <li key={content.id}>
                <div>
                  {editingId === content.id ? (
                    <>
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                      />
                      <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                      />
                      <input
                        type="text"
                        value={editedCategory}
                        onChange={(e) => setEditedCategory(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <strong>Title:</strong> {content.title}<br />
                      <strong>Category:</strong> {content.category}<br />
                      <strong>Description:</strong> {content.description}
                    </>
                  )}
                </div>
                <div className="content-actions">
                  {editingId === content.id ? (
                    <button className="edit-button" onClick={handleSave}>Save</button>
                  ) : (
                    <button className="edit-button" onClick={() => handleEdit(content)}>Edit</button>
                  )}
                  <button className="delete-button" onClick={() => handleDelete(content.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
