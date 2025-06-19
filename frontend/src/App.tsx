import { useState, useEffect } from 'react';
import './App.css';

interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse {
  message: string;
  data: User[];
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        console.log("response =>", data);
        setData(data);
      } catch (err) {
        setError('Failed to fetch data from backend');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>MERN Stack Application</h1>
      {error && <p className="error">{error}</p>}
      {data ? (
        <div>
          <p>{data.message}</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((user) => (
                <tr key={user.email}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
