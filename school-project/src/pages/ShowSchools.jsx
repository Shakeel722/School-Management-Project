import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ShowSchools.css";

function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/schools")
      .then((res) => {
        console.log(res.data);
        setSchools(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="show-schools-page">
      <h2 className="page-title">Schools List</h2>

      <div className="schools-grid">
        {schools.map((school, index) => {
          return (
            <div className="school-card" key={index}>
              <img
                src={`http://localhost:5000/schoolImages/${school.image}`}
                alt={school.name}
                className="school-image"
              />

              <h3 className="school-name">{school.name}</h3>
              <p className="school-address">{school.address}</p>
              <p className="school-city">{school.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowSchools;
