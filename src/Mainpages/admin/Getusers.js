import React, { useEffect, useState } from 'react';
import styles from "./users.module.css"

function DataFetchingComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the URL of the endpoint for your backend API
    const endpointURL = 'http://localhost:7000/getuser';

    // Define your bearer token
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQ2MTYwZWM0MGEyMTU5OWYyYmI3NWYiLCJpYXQiOjE2OTkyNjkyMDYsImV4cCI6MTcwMjI5MzIwNn0.zBtIFmenRwd0w8n7DIvIRCzxD1HEmuKqADkQXVxAdjM';

    // Make a GET request to the backend API with the Authorization header
    fetch(endpointURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.result); // Store the fetched data
        console.log(responseData.result);
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.message); // Set error if there's an issue
        setLoading(false); // Set loading to false
      });
  }, []);

  // Render loading state while data is being fetched


  return (
    <div className={styles.wrapper}>
      <div>
        <h2>User Data</h2>
        <table>
          <thead className={styles.table_header}>
            <tr>
                <th>No.</th>
              <th>Name</th>
              <th>Mobile No.</th>
              <th>Date of Birth</th>
              <th>Documents</th>
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            
                 {data.map((item, index) => (
                    <tr key={index} className={styles.table_row}>
                        <td>{index}</td>
                      <td>{item.name}</td>
                      <td>{item.mobileNo}</td>
                      <td>{new Date(item.DOB).toDateString()}</td>
                      <td>
                        <ul>
                          {/* {item.documents.map((doc, docIndex) => (
                            <li key={docIndex}>{doc}</li>
                          ))} */}
                        </ul>
                      </td>
                    </tr>
                  ))}
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default DataFetchingComponent;
