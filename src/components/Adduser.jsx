import React, { useState, useEffect } from "react";
import "./Adduser.css";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Personal from "./Personal";
import Department from "./Position";
import Education from "./Education";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../Api";
import Swal from "sweetalert2";
export const ADD_USER = "ADD_USER";

function Adduser() {
  const notify = () => toast.error("Xəta! Xanalar boş buraxıla bilməz");
  const notify2 = () => toast.success("Əlavə edildi!");
  const notify3 = () =>
    toast.loading("Ana Səhifəyə yönləndirilir...", {
      position: toast.POSITION.TOP_CENTER,
    });
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };

  const [form, setForm] = useState({});
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnClick = (e) => {
    const { action, data } = e;
    if (
      data.name === "" ||
      data.name === undefined ||
      data.surname === "" ||
      data.surname === undefined ||
      data.username === "" ||
      data.username === undefined ||
      data.patronymic === "" ||
      data.patronymic === undefined
    ) {
      notify();
      return;
    }
    if (action === ADD_USER) {
      data.id = 0;

      if (userId !== undefined) {
        data.id = userId;
      }
      setForm(data);
      upsertPerson(data.id);
      setTimeout(() => {
        navigateToHomePage();
      }, 1500);
      notify2();
    }
    notify3();
  };
  const [value, setValue] = useState("1");
  let { userId } = useParams();

  useEffect(() => {
    getUserInfoById(userId);
  }, [userId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="navbar">
        <h4>İşçilər</h4>
        <h4 className="backIcon">
          <Link className="goToHomePage" to="/">
            <FaBackward />
          </Link>
        </h4>
      </div>

      <div className="tabs">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab className="tab" label="Şəxsi" value="1" />
              <Tab className="tab" label="Vəzifələr" value="2" />
              <Tab className="tab" label="İş Saatları" />
              <Tab className="tab" label="İşçinin qrafiki" />
              <Tab className="tab" label="Məzuniyyət" />
              <Tab className="tab" label="Təhsil" value="3" />
              <Tab className="tab" label="Əlaqə" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Personal
              userId={userId}
              onChange={onChange}
              handleOnClick={handleOnClick}
              form={form}
            />
          </TabPanel>
          <TabPanel value="2">
            <Department />
          </TabPanel>
          <TabPanel value="3">
            <Education />
          </TabPanel>
        </TabContext>
      </div>
      <ToastContainer />
    </div>
  );

  // function getDataFromLocalStorage() {
  //   const dataString = localStorage.getItem("data");
  //   const data = dataString ? JSON.parse(dataString) : [];
  //   return data;
  // }

  function upsertPerson(id) {
    if (id !== 0) {
      API.put(`/employees/${userId}`, form).then(() => {});
    } else if (id === 0) {
      API.post(`/employees`, form).then(() => {});
    }
  }

  // let updateData = getDataFromLocalStorage();
  // // form.userId = userId;
  // if (form.userId === 0) {
  //   form.userId = getMaxUserId();
  //   updateData.push(form);
  // } else if (form.userId > 0) {
  //   updateData = (updateData ? updateData : []).map((item) => {
  //     if (item.userId === form.userId) {
  //       return form;
  //     } else return item;
  //   });
  // }
  // if (updateData && typeof updateData === "object") {
  //   localStorage.setItem("data", JSON.stringify(updateData));
  // }

  // function getMaxUserId() {
  //   const data = getDataFromLocalStorage();
  //   let userId = 0;
  //   (data ? data : []).forEach((item) => {
  //     if (parseInt(item.userId) > userId) userId = parseInt(item.userId);
  //   });
  //   return (userId + 1).toString();
  // }

  function getUserInfoById(userId) {
    API.get(`/employees/${userId}`).then((rsp) => {
      const response = rsp.data;
      setForm(response);
    });
  }
  // const data = getDataFromLocalStorage();
  // (data ? data : []).forEach((item) => {
  //   if (parseInt(item.userId) === parseInt(userId)) {
  //     setForm(item);
  //   }
  // });
}

export default Adduser;
