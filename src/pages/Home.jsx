import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="main-container">
      <div className="desktop">
        <div className="jobs-1">
          <div className="hero">
            <Header />
            <span className="magang">Magang</span>
          </div>
          <div className="side-bar-cars-banner">
            <div className="side-bar-banner">
              <div className="side-bar">
                <div className="text-input">
                  <span className="cari-posisi-magang">
                    Cari Posisi Magang
                  </span>
                  <div className="input">
                    <div className="search" />
                    <span className="cari-posisi-atau-perusahaan">
                      Cari posisi atau Perusahaan
                    </span>
                  </div>
                </div>
                <div className="text-input-5">
                  <span className="lokasi">Lokasi</span>
                  <div className="input-6">
                    <div className="frame">
                      <div className="map-pin" />
                      <span className="pilih-kota">Pilih Kota</span>
                    </div>
                    <div className="chevron-down" />
                  </div>
                </div>
                <div className="text-check-badge">
                  <span className="kategori">Kategori</span>
                  <div className="check-text-badge">
                    <div className="check-text-badge-7">
                      <div className="checkbox-text">
                        <div className="rectangle" />
                        <span className="fakultas-hukum">Fakultas Hukum</span>
                      </div>
                      <div className="badge">
                        <span className="text-f">10</span>
                      </div>
                    </div>
                    <div className="check-text-badge-8">
                      <div className="checkbox-text-9">
                        <div className="rectangle-a" />
                        <span className="fakultas-ekonomi">
                          Fakultas Ekonomi
                        </span>
                      </div>
                      <div className="badge-b">
                        <span className="text-11">10</span>
                      </div>
                    </div>
                    <div className="check-text-badge-c">
                      <div className="checkbox-text-d">
                        <div className="rectangle-e" />
                        <span className="fakultas-keguruan-ilmu">
                          Fakultas Keguruan & Ilmu
                        </span>
                      </div>
                      <div className="badge-f">
                        <span className="text-13">10</span>
                      </div>
                    </div>
                    <div className="check-text-badge-10">
                      <div className="checkbox-text-11">
                        <div className="rectangle-12" />
                        <span className="fakultas-pertanian">
                          Fakultas Pertanian
                        </span>
                      </div>
                      <div className="badge-13">
                        <span className="text-15">10</span>
                      </div>
                    </div>
                    <div className="check-text-badge-14">
                      <div className="checkbox-text-15">
                        <div className="rectangle-16" />
                        <span className="fakultas-ilmu-komputer">
                          Fakultas Ilmu Komputer
                        </span>
                      </div>
                      <div className="badge-17">
                        <span className="text-17">10</span>
                      </div>
                    </div>
                  </div>
                  <div className="button-25">
                    <span className="register-26">Show more</span>
                  </div>
                </div>
              </div>
              <div className="frame-73">
                <span className="we-are-hiring">We are hiring</span>
                <span className="apply-today">Apply Today!</span>
                <div className="img" />
              </div>
            </div>
            <div className="cards">
              <div className="text-button-74">
                <span className="showing-results">
                  Menampilkan 6–6 dari 10 hasil
                </span>
                <div className="button-75">
                  <span className="terbaru-76">Terbaru</span>
                  <div className="chevron-down-77" />
                </div>
              </div>
              <div className="cards-78">
                <div className="card">
                  <div className="text-badge-icon">
                    <div className="badge-icon">
                      <div className="badge-79">
                        <span className="time-ago">10 menit lalu</span>
                      </div>
                      <div className="icon" />
                    </div>
                    <div className="logo-text">
                      <div className="logo-7a" />
                      <div className="text-7b">
                        <span className="job-title">
                          Human Capital Business Partner Internship
                        </span>
                        <span className="company-name">
                          PT Bank Mandiri (Persero) Tbk
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="icons-text-button">
                    <div className="icons-text">
                      <div className="icon-text">
                        <div className="briefcase" />
                        <span className="job-category">Psikologi</span>
                      </div>
                      <div className="icon-text-7c">
                        <div className="clock" />
                        <span className="job-type">Full time</span>
                      </div>
                      <div className="icon-text-7d">
                        <div className="salary-range-7e" />
                        <span className="salary-amount">Rp. 1.000.000;</span>
                      </div>
                      <div className="icon-text-7f">
                        <div className="location" />
                        <span className="job-location">Jakarta Selatan</span>
                      </div>
                    </div>
                    <Link to="/job/1" className="button-80">
                      <span className="register-81">Detail Magang</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-company">
            <div className="text-108">
              <span className="top-company-109">Perusahaan Unggulan</span>
              <span className="trusted-company">
                Perusahaan terpercaya yang membuka program magang mahasiswa.
              </span>
            </div>
            <div className="cards-10a">
              <div className="card-10b">
                <div className="icon-text-10c">
                  <div className="icon-bg">
                    <div className="icon-10d" />
                  </div>
                  <span className="instagram">Gojek</span>
                </div>
                <span className="transportation-innovation">
                  Inovasi transportasi digital dengan peluang magang
                  mahasiswa.
                </span>
                <div className="open-jobs">
                  <span className="open-jobs-10e">8 Lowongan</span>
                </div>
              </div>
              <div className="card-10f">
                <div className="icon-text-110">
                  <div className="icon-bg-111">
                    <div className="logos" />
                  </div>
                  <span className="instagram-112">Pertamina</span>
                </div>
                <span className="energy-company">
                  Perusahaan energi terbesar Indonesia dengan program magang
                  unggulan.
                </span>
                <div className="label">
                  <span className="open-jobs-113">18 Lowongan</span>
                </div>
              </div>
              <div className="card-114">
                <div className="icon-text-115">
                  <div className="icon-bg-116">
                    <div className="icon-117" />
                  </div>
                  <span className="instagram-118">
                    Telkom
                    <br />
                    Indonesia
                  </span>
                </div>
                <span className="elit-velit-mauris">
                  Pemimpin telekomunikasi nasional, membuka kesempatan magang
                  digital.
                </span>
                <div className="label-119">
                  <span className="open-jobs-11a">12 Lowongan</span>
                </div>
              </div>
              <div className="card-11b">
                <div className="icon-text-11c">
                  <div className="icon-bg-11d">
                    <div className="icon-11e" />
                  </div>
                  <span className="instagram-11f">
                    Bank
                    <br />
                    Indonesia
                  </span>
                </div>
                <span className="elit-velit-mauris-120">
                  Bank sentral Indonesia, menyediakan pengalaman magang
                  berkualitas.
                </span>
                <div className="label-121">
                  <span className="open-jobs-122">9 Lowongan</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <style jsx>{`
        .main-container {
          position: relative;
          width: 1568px;
          height: 3689px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
        }

        .desktop {
          position: relative;
          width: 1440px;
          height: 3525px;
          margin: 100px 0 0 64px;
          background: #ffffff;
          overflow: hidden auto;
        }

        .jobs-1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
          position: absolute;
          width: 1440px;
          height: 3525px;
          top: 0;
          left: 0;
          background: #ffffff;
          z-index: 1;
          overflow: hidden;
          border-radius: 8px;
        }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 60px;
          position: relative;
          width: 1440px;
          height: 322px;
          padding: 0 166px 40px 166px;
          background: rgba(0, 0, 0, 0.2)
            url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/gxtFTANp4D.png)
            no-repeat center;
          background-size: cover;
          z-index: 2;
        }

        .magang {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          width: 222px;
          height: 42px;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 60px;
          font-weight: 700;
          line-height: 42px;
          text-align: center;
          white-space: nowrap;
          z-index: 20;
        }

        .side-bar-cars-banner {
          display: flex;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          width: 1440px;
          padding: 60px 72px 120px 72px;
          z-index: 21;
        }

        .side-bar-banner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 314px;
          height: 1887px;
          z-index: 22;
        }

        .side-bar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          width: 314px;
          height: 1403px;
          padding: 40px 20px 40px 20px;
          background: #ebf5f4;
          z-index: 23;
          overflow: hidden;
          border-radius: 20px;
        }

        .text-input {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 265px;
          z-index: 24;
        }

        .cari-posisi-magang {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 14px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 14px;
          text-align: left;
          white-space: nowrap;
          z-index: 25;
        }

        .input {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 12px;
          position: relative;
          width: 265px;
          height: 40px;
          padding: 14px 12px 14px 12px;
          background: #ffffff;
          z-index: 26;
          overflow: hidden;
          border-radius: 12px;
        }

        .search {
          flex-shrink: 0;
          position: relative;
          width: 20px;
          height: 20px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/EEWOsdV2hD.png)
            no-repeat center;
          background-size: cover;
          z-index: 27;
          overflow: hidden;
        }

        .cari-posisi-atau-perusahaan {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          width: 209px;
          height: 11px;
          color: #6c757d;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 11px;
          text-align: left;
          white-space: nowrap;
          z-index: 28;
        }

        .text-input-5 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 265px;
          z-index: 29;
        }

        .lokasi {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 14px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 14px;
          text-align: left;
          white-space: nowrap;
          z-index: 30;
        }

        .input-6 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 265px;
          height: 40px;
          padding: 14px 12px 14px 12px;
          background: #ffffff;
          z-index: 31;
          overflow: hidden;
          border-radius: 12px;
        }

        .frame {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 12px;
          position: relative;
          width: 99px;
          z-index: 32;
        }

        .map-pin {
          flex-shrink: 0;
          position: relative;
          width: 20px;
          height: 20px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/nVoNJ60MHB.png)
            no-repeat center;
          background-size: cover;
          z-index: 33;
          overflow: hidden;
        }

        .pilih-kota {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 11px;
          color: #6c757d;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 11px;
          text-align: left;
          white-space: nowrap;
          z-index: 34;
        }

        .chevron-down {
          flex-shrink: 0;
          position: relative;
          width: 20px;
          height: 20px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/HoFJQ6kaAo.png)
            no-repeat center;
          background-size: cover;
          z-index: 35;
          overflow: hidden;
        }

        .text-check-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 266px;
          z-index: 36;
        }

        .kategori {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 14px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 14px;
          text-align: left;
          white-space: nowrap;
          z-index: 37;
        }

        .check-text-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 12px;
          position: relative;
          width: 266px;
          z-index: 38;
        }

        .check-text-badge-7, .check-text-badge-8, .check-text-badge-c, .check-text-badge-10, .check-text-badge-14 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 266px;
          z-index: 39;
        }

        .checkbox-text, .checkbox-text-9, .checkbox-text-d, .checkbox-text-11, .checkbox-text-15 {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 8px;
          position: relative;
          z-index: 40;
        }

        .rectangle, .rectangle-a, .rectangle-e, .rectangle-12, .rectangle-16 {
          flex-shrink: 0;
          position: relative;
          width: 16px;
          height: 16px;
          border: 1px solid #6c757d;
          z-index: 41;
          border-radius: 4px;
        }

        .fakultas-hukum, .fakultas-ekonomi, .fakultas-keguruan-ilmu, .fakultas-pertanian, .fakultas-ilmu-komputer {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 19px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 19px;
          text-align: left;
          white-space: nowrap;
          z-index: 42;
        }

        .badge, .badge-b, .badge-f, .badge-13, .badge-17 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 34px;
          height: 20px;
          padding: 4px 8px 4px 8px;
          background: #ffffff;
          z-index: 43;
          border-radius: 12px;
        }

        .text-f, .text-11, .text-13, .text-15, .text-17 {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 12px;
          color: #6c757d;
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 12px;
          text-align: left;
          white-space: nowrap;
          z-index: 44;
        }

        .button-25 {
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          height: 40px;
          padding: 14px 20px 14px 20px;
          background: #258bb0;
          z-index: 87;
          overflow: hidden;
          border-radius: 8px;
          cursor: pointer;
        }

        .button-25:hover {
          background: #1f7a9a;
        }

        .register-26 {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 11px;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          line-height: 11px;
          text-align: left;
          text-transform: capitalize;
          white-space: nowrap;
          z-index: 88;
        }

        .frame-73 {
          flex-shrink: 0;
          position: relative;
          width: 314px;
          height: 460px;
          font-size: 0px;
          z-index: 195;
        }

        .we-are-hiring {
          display: block;
          position: relative;
          height: 22px;
          margin: 36.732px 0 0 28.801px;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 32px;
          font-weight: 700;
          line-height: 22px;
          text-align: left;
          text-transform: uppercase;
          white-space: nowrap;
          z-index: 197;
        }

        .apply-today {
          display: block;
          position: relative;
          height: 17px;
          margin: 23.566px 0 0 28.801px;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 24px;
          font-weight: 500;
          line-height: 17px;
          text-align: left;
          white-space: nowrap;
          z-index: 198;
        }

        .img {
          position: absolute;
          width: 314px;
          height: 460px;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.118)
            url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/5ZCXxdcJRA.png)
            no-repeat center;
          background-size: cover;
          z-index: 196;
          border-radius: 12px;
        }

        .cards {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex-wrap: nowrap;
          flex-grow: 1;
          flex-shrink: 0;
          flex-basis: 0;
          gap: 40px;
          position: relative;
          min-width: 0;
          z-index: 199;
        }

        .text-button-74 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 966px;
          z-index: 200;
        }

        .showing-results {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 14px;
          color: #6c757d;
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 500;
          line-height: 14px;
          text-align: left;
          white-space: nowrap;
          z-index: 201;
        }

        .button-75 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 180px;
          height: 40px;
          padding: 12px 12px 12px 12px;
          border: 1.5px solid #6c757d;
          z-index: 202;
          overflow: hidden;
          border-radius: 6px;
          cursor: pointer;
        }

        .terbaru-76 {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 14px;
          color: #6c757d;
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 500;
          line-height: 14px;
          text-align: left;
          white-space: nowrap;
          z-index: 203;
        }

        .chevron-down-77 {
          flex-shrink: 0;
          position: relative;
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/obn5FfrXW9.png)
            no-repeat center;
          background-size: cover;
          z-index: 204;
          overflow: hidden;
        }

        .cards-78 {
          display: flex;
          flex-direction: column;
          align-items: center;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          z-index: 205;
        }

        .card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 28px;
          position: relative;
          padding: 40px 40px 40px 40px;
          background: #ffffff;
          z-index: 206;
          border-radius: 20px;
          box-shadow: 0 3px 8px 0 rgba(48, 150, 137, 0.08);
        }

        .text-badge-icon {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          z-index: 207;
        }

        .badge-icon {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          z-index: 208;
        }

        .badge-79 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          width: 106px;
          height: 28px;
          padding: 8px 8px 8px 8px;
          background: rgba(48, 150, 137, 0.1);
          z-index: 209;
          border-radius: 8px;
        }

        .time-ago {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 11px;
          color: #258bb0;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 11px;
          text-align: left;
          white-space: nowrap;
          z-index: 210;
        }

        .icon {
          flex-shrink: 0;
          position: relative;
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/7NTFtKeHhL.png)
            no-repeat center;
          background-size: 100% 100%;
          z-index: 211;
        }

        .logo-text {
          display: flex;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 602px;
          z-index: 212;
        }

        .logo-7a {
          flex-shrink: 0;
          position: relative;
          width: 40px;
          height: 40px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/U9mHecMgRc.png)
            no-repeat center;
          background-size: cover;
          z-index: 213;
          overflow: hidden;
        }

        .text-7b {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 542px;
          z-index: 214;
        }

        .job-title {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 20px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 28px;
          font-weight: 600;
          line-height: 20px;
          text-align: left;
          white-space: nowrap;
          z-index: 215;
        }

        .company-name {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 11px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 11px;
          text-align: left;
          white-space: nowrap;
          z-index: 216;
        }

        .icons-text-button {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          z-index: 217;
        }

        .icons-text {
          display: flex;
          align-items: flex-end;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          width: 564px;
          z-index: 218;
        }

        .icon-text, .icon-text-7c, .icon-text-7d, .icon-text-7f {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 12px;
          position: relative;
          z-index: 219;
        }

        .briefcase {
          flex-shrink: 0;
          position: relative;
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/8qCa9jj3p0.png)
            no-repeat center;
          background-size: cover;
          z-index: 220;
          overflow: hidden;
        }

        .job-category, .job-type, .salary-amount, .job-location {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 11px;
          color: #6c757d;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          line-height: 11px;
          text-align: left;
          white-space: nowrap;
          z-index: 221;
        }

        .clock {
          flex-shrink: 0;
          position: relative;
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/6fgtnxqcnK.png)
            no-repeat center;
          background-size: cover;
          z-index: 223;
          overflow: hidden;
        }

        .salary-range-7e {
          flex-shrink: 0;
          position: relative;
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/WsryX8kMDu.png)
            no-repeat center;
          background-size: 100% 100%;
          z-index: 226;
        }

        .location {
          flex-shrink: 0;
          position: relative;
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/AgTOd1hmV4.png)
            no-repeat center;
          background-size: cover;
          z-index: 229;
          overflow: hidden;
        }

        .button-80 {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          width: 145px;
          height: 40px;
          padding: 14px 20px 14px 20px;
          background: #258bb0;
          z-index: 231;
          overflow: hidden;
          border-radius: 8px;
          text-decoration: none;
        }

        .button-80:hover {
          background: #1f7a9a;
        }

        .register-81 {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 11px;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          line-height: 11px;
          text-align: left;
          text-transform: capitalize;
          white-space: nowrap;
          z-index: 232;
        }

        .top-company {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 60px;
          position: relative;
          width: 1440px;
          padding: 60px 0 120px 0;
          background: #ebf5f4;
          z-index: 379;
        }

        .text-108 {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 40px;
          position: relative;
          width: 497px;
          z-index: 380;
        }

        .top-company-109 {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          width: 497px;
          height: 35px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 50px;
          font-weight: 700;
          line-height: 35px;
          text-align: center;
          white-space: nowrap;
          z-index: 381;
        }

        .trusted-company {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          width: 487px;
          height: 11px;
          color: #000000;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 11px;
          text-align: center;
          white-space: nowrap;
          z-index: 382;
        }

        .cards-10a {
          display: flex;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          width: 1296px;
          z-index: 383;
        }

        .card-10b, .card-10f, .card-114, .card-11b {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 306px;
          height: 360px;
          padding: 48px 0 48px 0;
          background: #ffffff;
          z-index: 384;
          border-radius: 20px;
          box-shadow: 0 3px 8px 0 rgba(48, 150, 137, 0.05);
        }

        .icon-text-10c, .icon-text-110, .icon-text-115, .icon-text-11c {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          z-index: 385;
        }

        .icon-bg, .icon-bg-111, .icon-bg-116, .icon-bg-11d {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          width: 60px;
          height: 60px;
          padding: 6px 6px 6px 6px;
          background: #000000;
          z-index: 386;
          border-radius: 8px;
          box-shadow: 0 2px 4px 0 rgba(48, 150, 137, 0.15);
        }

        .icon-10d, .logos, .icon-117, .icon-11e {
          flex-shrink: 0;
          position: relative;
          width: 40px;
          height: 40px;
          background-size: cover;
          z-index: 387;
          overflow: hidden;
        }

        .icon-10d {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/dRVLSWBtKM.png) no-repeat center;
        }

        .logos {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/Z4bYdAeVzF.png) no-repeat center;
        }

        .icon-117 {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/92MMK4jPTr.png) no-repeat center;
        }

        .icon-11e {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/BBz9FyGSsZ.png) no-repeat center;
        }

        .instagram, .instagram-112 {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 17px;
          color: #000000;
          font-family: Inter, var(--default-font-family);
          font-size: 24px;
          font-weight: 600;
          line-height: 17px;
          text-align: left;
          white-space: nowrap;
          z-index: 388;
        }

        .instagram-118, .instagram-11f {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          width: 113px;
          height: 46px;
          color: #000000;
          font-family: Inter, var(--default-font-family);
          font-size: 24px;
          font-weight: 600;
          line-height: 29.045px;
          text-align: center;
          z-index: 404;
        }

        .transportation-innovation, .energy-company, .elit-velit-mauris, .elit-velit-mauris-120 {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          width: 230px;
          height: 67px;
          color: rgba(0, 0, 0, 0.8);
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          text-align: center;
          text-overflow: ellipsis;
          z-index: 389;
          overflow: hidden;
        }

        .open-jobs, .label, .label-119, .label-121 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          padding: 8px 12px 8px 12px;
          background: rgba(48, 150, 137, 0.1);
          z-index: 390;
          border-radius: 12px;
        }

        .open-jobs-10e, .open-jobs-113, .open-jobs-11a, .open-jobs-122 {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 12px;
          color: #258bb0;
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 12px;
          text-align: left;
          white-space: nowrap;
          z-index: 391;
        }
      `}</style>
    </div>
  );
}
