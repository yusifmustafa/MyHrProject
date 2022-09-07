import "./Tablelist.css";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";

function Tablelist() {
  const data = getDataFromLocalStorage();
  return (
    <div className="tablelist">
      <h3>İşçilərin siyahısı</h3>
      <Link to="/add-user" className="adduser">
        Əlavə et
      </Link>
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
          {(data ? data : []).map((item) => {
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
                    <Link to={`/edit-user/${item.userId}`} className="adduser">
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
    </div>
  );

  function getDataFromLocalStorage() {
    const dataString = localStorage.getItem("data");
    console.log("dataString ", dataString);

    const data = dataString ? JSON.parse(dataString) : [];
    console.log("data", data);
    return data;
  }

  function deleteItem(userId) {
    let data = getDataFromLocalStorage();
    data = data.filter((item) => item.userId !== userId);
    localStorage.setItem("data", JSON.stringify(data));
  }
}

export default Tablelist;
