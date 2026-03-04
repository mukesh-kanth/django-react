import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [samples, setSamples] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Fetch Data (GET)
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/admin_app/api/samples/")
      .then(res => setSamples(res.data))
      .catch(err => console.log(err));
  }, []);

  // 🔹 Create Data (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/admin_app/api/samples/",
        { name, password }
      );

      setSamples([...samples, res.data]);
      setName("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create Sample</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <h3>All Samples</h3>
      <ul>
        {samples.map((item) => (
          <li key={item.id}>
            {item.name} - {item.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;