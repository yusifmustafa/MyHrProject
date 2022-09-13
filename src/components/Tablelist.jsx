import "./Tablelist.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { FaPen, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

function Tablelist() {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [searchTab, setSearchTab] = useState("");
  const uptData = () => {
    const empData = getDataFromLocalStorage();
    setData(empData);
  };

  useEffect(() => {
    uptData();
  }, []);


  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = data.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(data.length / employeesPerPage);

  return (
    <div className="tablelist">
      <h3>İşçilərin siyahısı</h3> <br />
      <Link to="/add-user" className="adduser">
        Əlavə et
      </Link>
      <input
        type="search"
        name="search"
        placeholder="Axtar..."
        className="form-control"
        onChange={(e) => setSearchTab(e.target.value)}
        style={{ width: "150px", height: "40px" }}
      />
      <table className="table table-striped">
        <thead>
          <tr className="user-about">
            <th scope="col">ID</th>
            <th scope="col">Adı</th>
            <th scope="col">Soyadı</th>
            <th scope="col">Ata adı</th>
            <th scope="col">İstifadəçi adı</th>
            <th scope="col">Vəzifəsi</th>
          </tr>
        </thead>
        <tbody>
          {(currentEmployees ? currentEmployees : [])

            .filter((item) => item.name?.includes(searchTab))

            .map((item) => {
              return (
                <tr key={item.userId}>
                  <td>{item.userId}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.fathername}</td>
                  <td>{item.username}</td>
                  <td>{item.department}</td>
                  <td>
                    <div className="edit-button">
                      <Link
                        to={`/edit-user/${item.userId}`}
                        className="adduser"
                      >
                        <FaPen />
                      </Link>
                    </div>
                    <div className="delete-button">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(item.userId)}
                      >
                        <span className="trash-icon">
                          <FaTrash />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );

  function getDataFromLocalStorage() {
    const dataString = localStorage.getItem("data");
    const data = dataString ? JSON.parse(dataString) : [];
    return data;
  }

  function deleteItem(userId) {
    let data = getDataFromLocalStorage();
    data = data.filter((item) => item.userId !== userId);
    localStorage.setItem("data", JSON.stringify(data));
    uptData();
  }
}

export default Tablelist;
