import { DatePicker } from "@mui/lab";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { FormControl } from "@mui/material";
import { ADD_USER } from "./Adduser";
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();

function Personal({ handleOnClick, onChange, form, show }) {
  console.log("show", show);
  return (
    <div>
      <div className="form">
        <div className="form-group">
          <TextField
            name="surname"
            type="text"
            label="Soyad *"
            variant="standard"
            onChange={onChange}
            value={form.surname}
          />
        </div>
        <div className="form-group">
          <TextField
            name="name"
            type="text"
            label="Adı *"
            variant="standard"
            onChange={onChange}
            value={form.name}
          />
        </div>
        <div className="form-group">
          <TextField
            name="fathername"
            type="text"
            label="Ata Adı *"
            variant="standard"
            value={form.fathername}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <TextField
            name="username"
            label="İstifadəçi Adı *"
            variant="standard"
            type="text"
            value={form.username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <TextField
            name="1ckod"
            type="text"
            variant="standard"
            label="1C Kodu *"
            value={form.code}
            onChange={onChange}
          />
        </div>
        <FormControl style={{ width: "250px" }}>
          <InputLabel id="demo-simple-select-label">
            Vətəndaşlığı təsdiq edən sənəd
          </InputLabel>

          <Select
            name="idcard"
            value={form.idcard}
            label="Vətəndaşlığı təsdiq edən sənəd"
            onChange={onChange}
            variant="standard"
          >
            <MenuItem value="Şəxsiyyət vəsiqəsi">Şəxsiyyət vəsiqəsi</MenuItem>
            <MenuItem value="Pasport">Pasport</MenuItem>
            <MenuItem value="Müvəqqəti Yaşamaq İcazəsi">
              Müvəqqəti Yaşamaq İcazəsi
            </MenuItem>
            <MenuItem value="İş İcazəsi">İş İcazəsi</MenuItem>
          </Select>
        </FormControl>
        <div className="form-group">
          <TextField
            name="passport"
            label="Şəxsiyyət vəsiqəsi nömrəsi *"
            variant="standard"
            type="text"
            onChange={onChange}
            value={form.passport}
          />
        </div>
        <div className="form-group">
          <TextField
            name="birthplace"
            type="text"
            label="Doğum yeri"
            variant="standard"
            onChange={onChange}
            value={form.birthplace}
          />
        </div>
        <div className="form-group">
          <TextField
            name="birthday"
            label="Doğum tarixi"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 200 }}
            variant="standard"
            onChange={onChange}
            value={form.birthday}
          />
        </div>
        <div className="form-group">
          <TextField
            name="fincode"
            label="Fin Kodu *"
            variant="standard"
            sx={{ width: 250 }}
            type="text"
            onChange={onChange}
            value={form.fincode}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">Qan Qrupu </InputLabel>

            <Select
              name="bloodgroup"
              value={form.idcard}
              label="Qan Qrupu"
              onChange={onChange}
              variant="standard"
            >
              <MenuItem value="I Qrup (0 RH +)">I Qrup (0 RH +)</MenuItem>
              <MenuItem value="I Qrup (0 RH -)">I Qrup (0 RH -)</MenuItem>
              <MenuItem value="II Qrup (A RH +)">II Qrup (A RH +) </MenuItem>
              <MenuItem value="II Qrup (A RH -)">II Qrup (A RH -)</MenuItem>
              <MenuItem value="III Qrup (B RH +)">III Qrup (B RH +)</MenuItem>
              <MenuItem value="III Qrup (B RH -)">III Qrup (B RH -)</MenuItem>
              <MenuItem value="IV Qrup (AB RH +)">IV Qrup (AB RH +)</MenuItem>
              <MenuItem value="IV Qrup (AB RH -)">IV Qrup (AB RH -)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              Ailə Vəziyyəti{" "}
            </InputLabel>

            <Select
              name="maritalstatus"
              value={form.maritalstatus}
              label="Ailə Vəziyyəti"
              onChange={onChange}
              variant="standard"
            >
              <MenuItem value="Evli">Evli</MenuItem>
              <MenuItem value="Subay">Subay</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">Cinsiyyəti </InputLabel>

            <Select
              name="gender"
              value={form.gender}
              label="Cinsiyyəti"
              onChange={onChange}
              variant="standard"
            >
              <MenuItem value="Kişi">Kişi</MenuItem>
              <MenuItem value="Qadın">Qadın</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <TextField
            name="citizenship"
            label="Vətəndaşlığı *"
            variant="standard"
            sx={{ width: "250px" }}
            type="text"
            onChange={onChange}
            value={form.citizenship}
          />
        </div>
        <div className="form-group">
          <TextField
            name="registerationaddress"
            variant="standard"
            label="Qeydiyyat ünvanı *"
            type="text"
            onChange={onChange}
            sx={{ width: "250px" }}
            value={form.registerationaddress}
          />
        </div>
        <div className="form-group">
          <TextField
            name="address"
            variant="standard"
            label="Faktiki yaşadığı ünvan"
            type="text"
            onChange={onChange}
            value={form.address}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              ŞV Verən Orqan{" "}
            </InputLabel>

            <Select
              name="docorganization"
              value={form.docorganization}
              variant="standard"
              label="ŞV Verən Orqan"
              onChange={onChange}
            >
              <MenuItem value="Asan 1">Asan 1</MenuItem>
              <MenuItem value="Asan 2">Asan 2</MenuItem>
              <MenuItem value="Asan 3">Asan 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <TextField
            name="docstart"
            label="ŞV verilmə tarixi"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 250 }}
            variant="standard"
            onChange={onChange}
            value={form.docstart}
          />
        </div>
        <div className="form-group">
          <TextField
            name="docend"
            type="date"
            label="ŞV bitmə tarixi"
            variant="standard"
            defaultValue="2017-05-24"
            onChange={onChange}
            value={form.docend}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              Hərbi mükəlləfiyyəti
            </InputLabel>

            <Select
              name="militarystatus"
              value={form.militarystatus}
              variant="standard"
              label="ŞV Verən Orqan"
              onChange={onChange}
            >
              <MenuItem value="H/M">H/M</MenuItem>
              <MenuItem value="Yoxdur">Yoxdur</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <TextField
            name="dsmfcardnumber"
            variant="standard"
            label="DSMF Kart nömrəsi"
            type="number"
            min="0"
            onChange={onChange}
            value={form.dsmfcardnumber}
            onKeyDown={blockInvalidChar}
          />
        </div>
        <div className="form-group">
          <TextField
            name="quotastatus"
            label="Kvota status"
            variant="standard"
            type="text"
            sx={{width:"250px"}}
            onChange={onChange}
            value={form.quotastatus}
          />
        </div>
        <div className="form-group">
          <TextField
            name="graduation"
            variant="standard"
            sx={{width:"300px"}}
            label="Xüsusi məzuniyyət statusu"
            type="text"
            onChange={onChange}
            value={form.graduation}
          />
        </div>
      </div>
      <button
        onClick={() =>
          handleOnClick({
            action: ADD_USER,
            data: form,
          })
        }
        className="btn btn-primary"
        id="addUser"
      >
        ƏLAVƏ ET
      </button>
      {show && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ width: "250px", margin: "0 auto" }}
        >
          Xanalar boş buraxıla bilməz!
        </div>
      )}
    </div>
  );
}

export default Personal;
