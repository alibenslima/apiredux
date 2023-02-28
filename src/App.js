import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getUsers = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => setUsers(data))
  //       .catch((err) => console.log(err));
  //   };
  //   getUsers();
  //   setLoading(false);
  // }, []);
  // console.log(users);

  useEffect(() => {
    const searchusers = async () => {
      try {
        const resultat = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(resultat);
        setUsers(resultat.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchusers();
    setLoading(false);
  }, []);

  return (
    <div className="App">




      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {users.map((el) => (
            <div key={el.id} style={{ border: "solid 2px" }}>
              <h1 style={{ color: "blue " }}>{el.name}</h1>
              <h1 style={{ color: "green " }}>{el.username}</h1>
              <p>{el.email}</p>
              <p>{el.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
