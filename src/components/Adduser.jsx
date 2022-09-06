import React, { useState } from "react";
import "./Adduser.css";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Personal from "./Personal";
import Department from "./Department";
import Education from "./Education";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
function Adduser() {
  const [value, SetValue] = useState(0);

  const handleChange = (event, newValue) => {
    SetValue(newValue);
  };
  return (
    <div>
      <div className="navbar">
        <h4>İşçilər</h4>
        <h4 className="backIcon">
          <Link className="goToHomePage" to="/">
          <FaBackward/>
          </Link>
        </h4>
      </div>
      <div className="tabs">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab className="tab" label="Şəxsi" value="1"  />
              <Tab className="tab" label="Vəzifələr" value="2" />
              <Tab className="tab" label="İş Saatları" />
              <Tab className="tab" label="İşçinin qrafiki" />
              <Tab className="tab" label="Məzuniyyət" />
              <Tab className="tab" label="Təhsil" value="3" />
              <Tab className="tab" label="Əlaqə" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Personal />
          </TabPanel>
          <TabPanel value="2">
            <Department />
          </TabPanel>
          <TabPanel value="3">
            <Education />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}

export default Adduser;
