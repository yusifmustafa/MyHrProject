import "./Tablelist.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Pagination from "./Pagination";
import { FaPen, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import API from "../Api";

function Tablelist() {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [searchTab, setSearchTab] = useState("");

  function getDataFromAPI() {
    API.get("/employees").then((rsp) => {
      setData(rsp.data);
    });
  }

  // const uptData = () => {
  //   const empData = getDataFromLocalStorage();
  //   setData(empData);
  // };

  // axios
  //   .get("http://localhost:8080/employees")
  //   .then((res) => {
  //     console.log("data", res);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  useEffect(() => {
    getDataFromAPI();
  }, []);

  // useEffect(() => {
  //   uptData();
  // }, []);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = data.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(data.length / employeesPerPage);

  return (
    <div className="tablelist">
      <div className="header">
        <h2 style={{ fontFamily: "Helvetica", fontWeight: "600" }}>
          İşçilərin Siyahısı
        </h2>{" "}
        <br />
        <Link to="/add-user" className="adduser">
          Əlavə et
        </Link>
        <TextField
          type="search"
          name="search"
          variant="standard"
          label="Axtarış..."
          sx={{ marginBottom: "2rem" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          className="form-control"
          onChange={(e) => setSearchTab(e.target.value)}
          style={{ width: "150px", height: "40px" }}
        />
      </div>
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
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.patronymic}</td>
                  <td>{item.username}</td>
                  <td>{item.department}</td>
                  <td>
                    <div className="edit-button">
                      <Link to={`/edit-user/${item.id}`} className="adduser">
                        <FaPen />
                      </Link>
                    </div>
                    <div className="delete-button">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(item.id)}
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

  // function getDataFromLocalStorage() {
  //   const dataString = localStorage.getItem("data");
  //   const data = dataString ? JSON.parse(dataString) : [];
  //   return data;
  // }

  function deleteItem(userId) {
    Swal.fire({
      title: "Silmək istədiyinizə əminsiniz?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      cancelButtonText: "Geri qayıt",
      confirmButtonText: "Sil",
    }).then((result) => {
      if (result.isConfirmed) {
        API.delete(`/employees/${userId}`).then(() => {
          getDataFromAPI();
        });
        Swal.fire("İstifadəçi Silindi!");
      }
    });
    // let data = getDataFromLocalStorage();
    // data = data.filter((item) => item.userId !== userId);
    // localStorage.setItem("data", JSON.stringify(data));
    // uptData();
  }
}

export default Tablelist;
