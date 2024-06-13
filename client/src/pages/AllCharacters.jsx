import React, { useState, useEffect } from 'react';

const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch characters from an API
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://api.example.com/characters');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('https://api.example.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const data = await response.json();
      alert('File uploaded successfully!');
      // Update characters list if necessary
      // setCharacters((prevCharacters) => [...prevCharacters, data.newCharacter]);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>All Characters</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload Picture</button>
      </form>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            {character.imageUrl && <img src={character.imageUrl} alt={character.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCharacters;