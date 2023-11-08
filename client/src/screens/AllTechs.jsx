import React, { useState, useEffect } from "react";

function TechnologiesList() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API endpoint URL
    fetch("http://localhost:3001/api/tech")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Technologies List</h1>
      <ul>
        {technologies.map((technology) => (
          <li key={technology._id}>{technology.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TechnologiesList;
