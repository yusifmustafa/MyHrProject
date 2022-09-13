import { DatePicker } from "@mui/lab";
import React, { Fragment } from "react";
import { ADD_USER } from "./Adduser";
export const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", ",", "."].includes(e.key) && e.preventDefault();

function Personal({ handleOnClick, onChange, form, show }) {
  console.log("show", show);
  return (
    <div>
      <div className="form">
        <div className="form-group">
          <input
            name="surname"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.surname}
          />
          <label>Soyad *</label>
        </div>
        <div className="form-group">
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.name}
          />
          <label>Adı *</label>
        </div>
        <div className="form-group">
          <input
            name="fathername"
            type="text"
            className="form-control"
            value={form.fathername}
            onChange={onChange}
          />
          <label>Ata Adı *</label>
        </div>
        <div className="form-group">
          <input
            name="username"
            type="text"
            className="form-control"
            value={form.username}
            onChange={onChange}
          />
          <label>İstifadəçi Adı *</label>
        </div>
        <div className="form-group">
          <input
            name="1ckod"
            type="text"
            className="form-control"
            value={form.code}
            onChange={onChange}
          />
          <label>1C Kodu *</label>
        </div>
        <div className="form-group">
          <select
            name="idcard"
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            value={form.idcard}
          >
            <option>Vətəndaşlığı təsdiq edən sənəd</option>
            <option>Şəxsiyyət vəsiqəsi</option>
            <option>Pasport</option>
            <option>Müvəqqəti Yaşamaq İcazəsi</option>
            <option>İş İcazəsi</option>
          </select>
        </div>
        <div className="form-group">
          <input
            name="passport"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.passport}
          />
          <label>Şəxsiyyət vəsiqəsi nömrəsi *</label>
        </div>
        <div className="form-group">
          <input
            name="birthplace"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.birthplace}
          />
          <label>Doğum yeri</label>
        </div>
        <div className="form-group">
          <input
            name="birthday"
            type="date"
            placeholder="Doğum tarixi"
            // onFocus={(this.type = "date")}
            className="form-control"
            onChange={onChange}
            value={form.birthday}
          />
        </div>
        <div className="form-group">
          <input
            name="fincode"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.fincode}
          />
          <label>Fin Kodu *</label>
        </div>
        <div className="form-group">
          <select
            name="bloodgroup"
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            value={form.bloodgroup}
          >
            <option>Qan Qrupu</option>
            <option value="1">I Qrup (0 RH +)</option>
            <option value="2">I Qrup (0 RH -)</option>
            <option value="3">II Qrup (A RH +)</option>
            <option value="4">II Qrup (A RH -)</option>
            <option value="5">III Qrup (B RH +)</option>
            <option value="6">III Qrup (B RH -)</option>
            <option value="7">IV Qrup (AB RH +)</option>
            <option value="8">IV Qrup (AB RH -)</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="maritalstatus"
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            value={form.maritalstatus}
          >
            <option>Ailə Vəziyyəti</option>
            <option value="1">Evli</option>
            <option value="2">Subay</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="gender"
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            value={form.gender}
          >
            <option>Cinsiyyəti</option>
            <option value="1">Kişi</option>
            <option value="2">Qadın</option>
          </select>
        </div>
        <div className="form-group">
          <input
            name="citizenship"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.citizenship}
          />
          <label>Vətəndaşlığı *</label>
        </div>
        <div className="form-group">
          <input
            name="registerationaddress"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.registerationaddress}
          />
          <label>Qeydiyyat ünvanı *</label>
        </div>
        <div className="form-group">
          <input
            name="address"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.address}
          />
          <label>Faktiki yaşadığı ünvan</label>
        </div>
        <div className="form-group">
          <select
            name="docorganization"
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            value={form.docorganization}
          >
            <option>ŞV Verən Orqan</option>
            <option value="1">Asan 1</option>
            <option value="2">Asan 2</option>
            <option value="2">Asan 3</option>
          </select>
        </div>
        <div className="form-group">
        
          <input
            name="docstart"
            type="date"
            placeholder="ŞV verilmə tarixi"
            className="form-control"
            onChange={onChange}
            value={form.docstart}
          />
        </div>
        <div className="form-group">
          <input
            name="docend"
            type="date"
            className="form-control"
            placeholder="ŞV bitmə tarixi "
            onChange={onChange}
            value={form.docend}
          />
        </div>
        <div className="form-group">
          <select
            name="militarystatus"
            className="form-select"
            aria-label="Default select example"
            onChange={onChange}
            value={form.militarystatus}
          >
            <option>Hərbi mükəlləfiyyəti</option>
            <option value="1">H/M</option>
            <option value="2">Yoxdur</option>
          </select>
        </div>
        <div className="form-group">
          <input
            name="dsmfcardnumber"
            type="number"
            min="0"
            className="form-control"
            onChange={onChange}
            value={form.dsmfcardnumber}
            onKeyDown={blockInvalidChar}
          />
          <label>DSMF Kart nömrəsi</label>
        </div>
        <div className="form-group">
          <input
            name="quotastatus"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.quotastatus}
          />
          <label>Kvota status</label>
        </div>
        <div className="form-group">
          <input
            name="graduation"
            type="text"
            className="form-control"
            onChange={onChange}
            value={form.graduation}
          />
          <label>Xüsusi məzuniyyət statusu</label>
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
