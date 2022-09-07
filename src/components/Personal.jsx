import React from "react";
import { ADD_USER } from "./Adduser";

function Personal({ userId, handleOnClick, onChange, form }) { 
  return (
    <div>
      <div className="form">
        <div className="form-group">
          <input
            name="surname"
            type="text"
            className="form-control"
            placeholder="Soyadı *"
            onChange={onChange}
            value={form.surname}
          />
        </div>
        <div className="form-group">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Adı *"
            onChange={onChange}
            value={form.name}
          />
        </div>
        <div className="form-group">
          <input
            name="fathername"
            type="text"
            className="form-control"
            placeholder="Ata Adı *"
            value={form.fathername}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="İstifadəçi Adı *"
            value={form.username}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            name="1ckod"
            type="text"
            className="form-control"
            placeholder="1C Kodu *"
            value={form.code}
            onChange={onChange}
          />
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
            placeholder="Şəxsiyyət vəsiqəsi nömrəsi *"
            onChange={onChange}
            value={form.passport}
          />
        </div>
        <div className="form-group">
          <input
          name="birthplace"
            type="text"
            className="form-control"
            placeholder="Doğum yeri "
            onChange={onChange}
            value={form.birthplace}
          />
        </div>
        <div className="form-group">
          <input
          name="birthday"
            type="date"
            className="form-control"
            placeholder="Doğum tarixi "
            onChange={onChange}
            value={form.birthday}
          />
        </div>
        <div className="form-group">
          <input
          name="fincode"
            type="text"
            className="form-control"
            placeholder="Fin Kodu *"
            onChange={onChange}
            value={form.fincode}
          />
        </div>
        <div className="form-group">
          <select
          name='bloodgroup'
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
            placeholder="Vətəndaşlığı *"
            onChange={onChange}
            value={form.citizenship}
          />
        </div>
        <div className="form-group">
          <input
          name="registerationaddress"
            type="text"
            className="form-control"
            placeholder="Qeydiyyat ünvanı *"
            onChange={onChange}
            value={form.registerationaddress}
          />
        </div>
        <div className="form-group">
          <input
          name="address"
            type="text"
            className="form-control"
            placeholder="Faktiki yaşadığı ünvan "
            onChange={onChange}
            value={form.address}
          />
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
          name="docstartdate"
            type="date"
            className="form-control"
            placeholder="ŞV verilmə tarixi "
            onChange={onChange}
            value={form.docstartdate}
          />
        </div>
        <div className="form-group">
          <input
          name="docenddate"
            type="date"
            className="form-control"
            placeholder="ŞV bitmə tarixi "
            onChange={onChange}
            value={form.docenddate}
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
            className="form-control"
            placeholder="DSMF Kart nömrəsi "
            onChange={onChange}
            value={form.dsmfcardnumber}
          />
        </div>
        <div className="form-group">
          <input
          name="quotastatus"
            type="text"
            className="form-control"
            placeholder="Kvota status"
            onChange={onChange}
            value={form.quotastatus}
          />
        </div>
        <div className="form-group">
          <input
          name="graduation"
            type="text"
            className="form-control"
            placeholder="Xüsusi məzuniyyət statusu"
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
    </div>
  );
}

export default Personal;
