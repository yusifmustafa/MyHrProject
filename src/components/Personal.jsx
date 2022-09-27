import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { ADD_USER } from "./Adduser";
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();

function Personal({ handleOnClick, onChange, form }) {
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
            name="patronymic"
            type="text"
            label="Ata Adı *"
            variant="standard"
            onChange={onChange}
            value={form.patronymic}
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
            name="oneCCode"
            type="text"
            variant="standard"
            label="1C Kodu *"
            value={form.oneCCode}
            onChange={onChange}
          />
        </div>
        <FormControl style={{ width: "250px" }}>
          <InputLabel id="demo-simple-select-label">
            Vətəndaşlığı təsdiq edən sənəd
          </InputLabel>

          <Select
            name="identification"
            value={form.identification}
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
            name="idnumber"
            label="Şəxsiyyət vəsiqəsi nömrəsi *"
            variant="standard"
            type="text"
            onChange={onChange}
            value={form.idnumber}
          />
        </div>
        <div className="form-group">
          <TextField
            name="birthPlace"
            type="text"
            label="Doğum yeri"
            variant="standard"
            onChange={onChange}
            value={form.birthPlace}
          />
        </div>
        <div className="form-group">
          <TextField
            name="birthDate"
            label="Doğum tarixi"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 200 }}
            variant="standard"
            onChange={onChange}
            value={form.birthDate}
          />
        </div>
        <div className="form-group">
          <TextField
            name="pincode"
            label="Fin Kodu *"
            variant="standard"
            sx={{ width: 250 }}
            type="text"
            onChange={onChange}
            value={form.pincode}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">Qan Qrupu </InputLabel>

            <Select
              name="bloodGroupId"
              value={form.bloodGroupId}
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
              name="maritalStatus"
              value={form.maritalStatus}
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
            name="registrationAddress"
            variant="standard"
            label="Qeydiyyat ünvanı *"
            type="text"
            onChange={onChange}
            sx={{ width: "250px" }}
            value={form.registrationAddress}
          />
        </div>
        <div className="form-group">
          <TextField
            name="residenceAddress"
            variant="standard"
            label="Faktiki yaşadığı ünvan"
            type="text"
            onChange={onChange}
            value={form.residenceAddress}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              ŞV Verən Orqan{" "}
            </InputLabel>

            <Select
              name="idprovider"
              value={form.idprovider}
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
            name="idgivenDate"
            label="ŞV verilmə tarixi"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 250 }}
            variant="standard"
            onChange={onChange}
            value={form.idgivenDate}
          />
        </div>
        <div className="form-group">
          <TextField
            name="idexpirationDate"
            type="date"
            label="ŞV bitmə tarixi"
            variant="standard"
            defaultValue="2017-05-24"
            onChange={onChange}
            value={form.idexpirationDate}
          />
        </div>
        <div className="form-group">
          <FormControl style={{ width: "250px" }}>
            <InputLabel id="demo-simple-select-label">
              Hərbi mükəlləfiyyəti
            </InputLabel>

            <Select
              name="militaryStatus"
              value={form.militaryStatus}
              variant="standard"
              label="Hərbi mükəlləfiyyət"
              onChange={onChange}
            >
              <MenuItem value="H/M">H/M</MenuItem>
              <MenuItem value="Yoxdur">Yoxdur</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group">
          <TextField
            name="dsmfcardNumber"
            variant="standard"
            label="DSMF Kart nömrəsi"
            type="number"
            min="0"
            onChange={onChange}
            value={form.dsmfcardNumber}
            onKeyDown={blockInvalidChar}
          />
        </div>
        <div className="form-group">
          <TextField
            name="quoteStatus"
            label="Kvota status"
            variant="standard"
            type="text"
            sx={{ width: "250px" }}
            onChange={onChange}
            value={form.quoteStatus}
          />
        </div>
        <div className="form-group">
          <TextField
            name="specialGraduationStatus"
            variant="standard"
            sx={{ width: "300px" }}
            label="Xüsusi məzuniyyət statusu"
            type="text"
            onChange={onChange}
            value={form.specialGraduationStatus}
          />
        </div>
      </div>
      <Button
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
      </Button>
      <ToastContainer />
    </div>
  );
}

export default Personal;
