import React, { useState } from "react";
import "./Tablelist.css";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
export const ADD_USER = "ADD_USER";
export const EDIT_PERSON = "EDIT_PERSON";


function Tablelist() {
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnClick = (e) => {
    const { action, data } = e;
    if (action === ADD_USER) {
      setForm({ userId: 0 });
    } else if (action === EDIT_PERSON) {
      setForm(data);
      upsertPerson();
    }
  };

  const [form, setForm] = useState({});

  const data = getDataFromLocalStorage();
  return (
    <div className="tablelist">
      <h3>İşçilərin siyahısı</h3>
      <Link to="/Adduser" className="adduser">
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
                    <button className="btn btn-success">
                      <FaPen />
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

  function getMaxUserId() {
    let data = getDataFromLocalStorage();
    let userId = 0;
    (data ? data : []).forEach((item) => {
      if (item.userId > userId) item.userId = userId;
      return userId + 1;
    });
  }

  function upsertPerson() {
    let updateData = getDataFromLocalStorage();

    if (form.userId === 0) {
      form.userId = getMaxUserId(updateData);
      updateData.push(form);
      console.log("pushForm", form);
    } else if (form.userId > 0) {
      updateData = (updateData ? updateData : []).map((item) => {
        if (item.userId === form.userId) return form;
        else return item;
      });
    }

    if (updateData && typeof updateData === "object") {
      localStorage.setItem("data", JSON.stringify(updateData));
    }
  }
}

export default Tablelist;
