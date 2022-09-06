import React from "react";

function Personal() {
  return (
    <form>
      <div className="form">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Soyadı *" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Adı *" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Ata Adı *" />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="İstifadəçi Adı *"
          />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="1C Kodu *" />
        </div>
        <div className="form-group">
          <select className="form-select" aria-label="Default select example">
            <option selected>Vətəndaşlığı təsdiq edən sənəd</option>
            <option value="1">Şəxsiyyət vəsiqəsi</option>
            <option value="2">Pasport</option>
            <option value="3">Müvəqqəti Yaşamaq İcazəsi</option>
            <option value="4">İş İcazəsi</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Şəxsiyyət vəsiqəsi nömrəsi *"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Doğum yeri "
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Doğum tarixi "
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Fin Kodu *"
          />
        </div>
        <div className="form-group">
          <select className="form-select" aria-label="Default select example">
            <option selected>Qan Qrupu</option>
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
          <select className="form-select" aria-label="Default select example">
            <option selected>Ailə Vəziyyəti</option>
            <option value="1">Evli</option>
            <option value="2">Subay</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-select" aria-label="Default select example">
            <option selected>Cinsiyyəti</option>
            <option value="1">Kişi</option>
            <option value="2">Qadın</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Vətəndaşlığı *"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Qeydiyyat ünvanı *"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Faktiki yaşadığı ünvan "
          />
        </div>
        <div className="form-group">
          <select className="form-select" aria-label="Default select example">
            <option selected>ŞV Verən Orqan</option>
            <option value="1">Asan 1</option>
            <option value="2">Asan 2</option>
            <option value="2">Asan 3</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="ŞV verilmə tarixi "
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="ŞV bitmə tarixi "
          />
        </div>
        <div className="form-group">
          <select className="form-select" aria-label="Default select example">
            <option selected>Hərbi mükəlləfiyyəti</option>
            <option value="1">H/M</option>
            <option value="2">Yoxdur</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="DSMF Kart nömrəsi "
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Kvota status"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Xüsusi məzuniyyət statusu"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" id="addUser">
        ƏLAVƏ ET
      </button>
    </form>
  );
}

export default Personal;
