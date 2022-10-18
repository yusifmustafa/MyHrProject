import { TextField } from "@mui/material";
import React from "react";

export const ADD_POSITION = "ADD_POSITION";

function Department({ form, onChange, handleOnClick }) {
  handleOnClick = (e) => {
    const { action, data } = e;
    if (action === ADD_POSITION) {
     
    }
  };
  return (
    <div>
      <TextField
        name="position"
        label="Vəzifəsi"
        variant="standard"
        onChange={onChange}
        value={form.position}
      />
    </div>
  );
}

export default Department;
