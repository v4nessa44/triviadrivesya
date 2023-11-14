import React, { useState, useEffect } from "react";

function TechnologiesList() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/tech")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false); // Set loading to false on successful data fetch
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
        setLoading(false); // Set loading to false on error
      });
  }, []);

  return (
    <div>
      <h1>Technologies List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ul>
          {technologies.map((technology) => (
            <li key={technology._id}>{technology.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TechnologiesList;
