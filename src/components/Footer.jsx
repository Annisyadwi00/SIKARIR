import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="text-icons">
        <div className="logo-text-icon">
          <div className="logo-123">
            <div className="check-124" />
            <span className="sikarir">SIKARIR </span>
          </div>
          <span className="portal-magang-unsika">
            Portal Magang UNSIKA adalah platform untuk menghubungkan
            mahasiswa dengan peluang magang dari berbagai perusahaan dan
            instansi mitra.
          </span>
        </div>
        <div className="text-125">
          <span className="informasi">Informasi</span>
          <div className="text-126">
            <Link to="/about" className="tentang-web">Tentang Web</Link>
            <span className="tim-kami">Tim Kami</span>
            <span className="mitra-perusahaan">Mitra Perusahaan</span>
            <span className="untuk-mahasiswa">Untuk Mahasiswa</span>
            <span className="untuk-perusahaan">Untuk Perusahaan</span>
          </div>
        </div>
        <div className="text-127">
          <span className="kategori-magang">Kategori Magang</span>
          <div className="text-128">
            <span className="fakultas-hukum-129">Fakultas Hukum</span>
            <span className="fakultas-ekonomi-12a">
              Fakultas Ekonomi
            </span>
            <span className="fakultas-teknik">Fakultas Teknik</span>
            <span className="fakultas-ilmu-komputer-12b">
              Fakultas Ilmu Komputer
            </span>
            <span className="lainnya">Lainnya</span>
          </div>
        </div>
        <div className="text-input-button">
          <span className="kabar-magang">Kabar Magang</span>
          <span className="informasi-lowongan-magang">
            Dapatkan informasi lowongan magang terbaru langsung ke email
            Anda.
          </span>
          <div className="input-12c">
            <span className="email-address">Email Address</span>
          </div>
          <div className="button-12d">
            <span className="subscribe-now">Subscribe now</span>
          </div>
        </div>
      </div>
      <div className="text-12e">
        <span className="all-rights-reserved">
          © 2025 Portal Magang UNSIKA. All Rights Reserved.
        </span>
        <div className="text-12f">
          <span className="privacy-policy">Privacy Policy</span>
          <span className="terms-conditions">Terms & Conditions</span>
        </div>
      </div>

      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 80px;
          position: relative;
          width: 100%;
          padding: 100px 202px 60px 202px;
          background: #000000;
          z-index: 416;
          overflow: hidden;
        }

        .text-icons {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 1296px;
          z-index: 417;
        }

        .logo-text-icon {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 40px;
          position: relative;
          width: 377px;
          z-index: 418;
        }

        .logo-123 {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          width: 116px;
          z-index: 419;
        }

        .check-124 {
          flex-shrink: 0;
          position: relative;
          width: 28px;
          height: 28px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/LwYGnGD1Qe.png)
            no-repeat center;
          background-size: cover;
          z-index: 420;
          overflow: hidden;
        }

        .sikarir {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 15px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 15px;
          text-align: left;
          white-space: nowrap;
          z-index: 421;
        }

        .portal-magang-unsika {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          align-self: stretch;
          flex-shrink: 0;
          position: relative;
          width: 377px;
          min-width: 0;
          height: 78px;
          color: rgba(255, 255, 255, 0.8);
          font-family: Lexend, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 32px;
          text-align: left;
          text-overflow: ellipsis;
          z-index: 422;
          overflow: hidden;
        }

        .text-125 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          width: 128px;
          z-index: 423;
        }

        .informasi {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 24px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          z-index: 424;
          overflow: hidden;
        }

        .text-126 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 16px;
          position: relative;
          min-width: 0;
          z-index: 425;
        }

        .tentang-web, .tim-kami, .mitra-perusahaan, .untuk-mahasiswa, .untuk-perusahaan {
          flex-shrink: 0;
          position: relative;
          height: 12px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 12px;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          z-index: 426;
          overflow: hidden;
          text-decoration: none;
          cursor: pointer;
        }

        .tentang-web:hover, .tim-kami:hover, .mitra-perusahaan:hover, .untuk-mahasiswa:hover, .untuk-perusahaan:hover {
          opacity: 0.8;
        }

        .text-127 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 24px;
          position: relative;
          width: 177px;
          z-index: 431;
        }

        .kategori-magang {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 24px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          z-index: 432;
          overflow: hidden;
        }

        .text-128 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 16px;
          position: relative;
          z-index: 433;
        }

        .fakultas-hukum-129, .fakultas-ekonomi-12a, .fakultas-teknik, .fakultas-ilmu-komputer-12b, .lainnya {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 12px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 12px;
          text-align: left;
          white-space: nowrap;
          z-index: 434;
          cursor: pointer;
        }

        .fakultas-hukum-129:hover, .fakultas-ekonomi-12a:hover, .fakultas-teknik:hover, .fakultas-ilmu-komputer-12b:hover, .lainnya:hover {
          opacity: 0.8;
        }

        .text-input-button {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 16px;
          position: relative;
          width: 306px;
          z-index: 439;
        }

        .kabar-magang {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 24px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          z-index: 440;
          overflow: hidden;
        }

        .informasi-lowongan-magang {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          align-self: stretch;
          flex-shrink: 0;
          position: relative;
          width: 306px;
          height: 26px;
          color: rgba(255, 255, 255, 0.8);
          font-family: Inter, var(--default-font-family);
          font-size: 14px;
          font-weight: 400;
          line-height: 16px;
          text-align: left;
          text-overflow: ellipsis;
          z-index: 441;
          overflow: hidden;
        }

        .input-12c {
          flex-shrink: 0;
          position: relative;
          width: 306px;
          height: 50px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          z-index: 442;
          overflow: hidden;
          border-radius: 12px;
        }

        .email-address {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          position: absolute;
          height: 10px;
          top: 19px;
          left: 20px;
          color: rgba(255, 255, 255, 0.6);
          font-family: Inter, var(--default-font-family);
          font-size: 14px;
          font-weight: 400;
          line-height: 10px;
          text-align: left;
          white-space: nowrap;
          z-index: 443;
        }

        .button-12d {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          width: 306px;
          height: 50px;
          padding: 15px 40px 15px 40px;
          background: #258bb0;
          z-index: 444;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
        }

        .button-12d:hover {
          background: #1f7a9a;
        }

        .subscribe-now {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 19px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          text-align: left;
          white-space: nowrap;
          z-index: 445;
        }

        .text-12e {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 1296px;
          z-index: 446;
        }

        .all-rights-reserved {
          flex-shrink: 0;
          position: relative;
          height: 10px;
          color: rgba(255, 255, 255, 0.5);
          font-family: Inter, var(--default-font-family);
          font-size: 14px;
          font-weight: 400;
          line-height: 10px;
          text-align: left;
          white-space: nowrap;
          z-index: 447;
        }

        .text-12f {
          display: flex;
          align-items: flex-end;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 272px;
          z-index: 448;
        }

        .privacy-policy, .terms-conditions {
          flex-shrink: 0;
          position: relative;
          height: 12px;
          color: #ffffff;
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          font-weight: 400;
          line-height: 12px;
          text-align: left;
          text-decoration: underline;
          white-space: nowrap;
          z-index: 449;
          cursor: pointer;
        }

        .privacy-policy:hover, .terms-conditions:hover {
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}
