import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    major: '',
    semester: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up attempt:', formData);
  };

  return (
    <div className="main-container">
      <div className="desktop">
        <div className="signup-page">
          <div className="hero">
            <Header />
            <span className="page-title">Daftar</span>
          </div>

          <div className="signup-content">
            <div className="signup-image">
              <div className="image-content">
                <h2 className="image-title">Bergabunglah dengan Kami!</h2>
                <p className="image-subtitle">
                  Daftarkan diri Anda dan temukan peluang magang terbaik untuk mengembangkan karir dan pengalaman profesional.
                </p>
              </div>
              <div className="image-overlay"></div>
            </div>

            <div className="signup-form-container">
              <div className="form-header">
                <h1 className="form-title">Buat Akun Baru</h1>
                <p className="form-subtitle">Lengkapi data diri Anda untuk mendaftar di portal magang UNSIKA</p>
              </div>

              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Nama Lengkap</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-input"
                      placeholder="Masukkan nama lengkap"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="Masukkan email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-input"
                      placeholder="Masukkan password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Konfirmasi Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-input"
                      placeholder="Konfirmasi password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Universitas</label>
                    <select
                      name="university"
                      className="form-input"
                      value={formData.university}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih Universitas</option>
                      <option value="unsika">Universitas Singaperbangsa Karawang</option>
                      <option value="ui">Universitas Indonesia</option>
                      <option value="ugm">Universitas Gadjah Mada</option>
                      <option value="itb">Institut Teknologi Bandung</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Jurusan</label>
                    <select
                      name="major"
                      className="form-input"
                      value={formData.major}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih Jurusan</option>
                      <option value="teknik-informatika">Teknik Informatika</option>
                      <option value="sistem-informasi">Sistem Informasi</option>
                      <option value="manajemen">Manajemen</option>
                      <option value="akuntansi">Akuntansi</option>
                      <option value="hukum">Hukum</option>
                      <option value="psikologi">Psikologi</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Semester</label>
                    <select
                      name="semester"
                      className="form-input"
                      value={formData.semester}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih Semester</option>
                      {Array.from({ length: 8 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          Semester {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">No. Telepon</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="Masukkan no. telepon"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    Saya setuju dengan <Link to="/terms" className="terms-link">Syarat & Ketentuan</Link> dan <Link to="/privacy" className="privacy-link">Kebijakan Privasi</Link>
                  </label>
                </div>

                <button type="submit" className="signup-button">Daftar Sekarang</button>

                <div className="form-footer">
                  <p className="footer-text">Sudah punya akun? <Link to="/login" className="login-link">Masuk sekarang</Link></p>
                </div>
              </form>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <style jsx>{`
        .main-container { width: 100%; min-height: 100vh; background: #fff; }
        .desktop { width: 100%; min-height: 100vh; background: #fff; }
        .signup-page { display: flex; flex-direction: column; align-items: center; width: 100%; }
        .hero { display: flex; flex-direction: column; align-items: center; width: 100%; height: 322px; padding: 0 166px 40px 166px; background: rgba(0,0,0,0.2) url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/gxtFTANp4D.png) no-repeat center; background-size: cover; }
        .page-title { color: #fff; font-size: 60px; font-weight: 700; }
        .signup-content { display: flex; justify-content: center; max-width: 1400px; padding: 80px 40px; gap: 80px; }
        .signup-image { flex: 1; max-width: 500px; height: 700px; background: linear-gradient(135deg,#258bb0 0%,#1f7a9a 100%); border-radius: 20px; position: relative; overflow: hidden; }
        .image-title { font-size: 36px; font-weight: 700; color: #fff; margin-bottom: 24px; text-align: center; }
        .image-subtitle { font-size: 18px; font-weight: 400; color: #fff; opacity: 0.9; text-align: center; }
        .image-overlay { position: absolute; top:0; left:0; right:0; bottom:0; }
        .signup-form-container { flex:1; max-width:700px; padding:60px 40px; background:#fff; border-radius:20px; box-shadow:0 10px 30px rgba(48,150,137,0.1); }
        .form-title { font-size: 32px; font-weight:700; color:#000; margin-bottom:16px; text-align:center; }
        .form-subtitle { font-size:16px; color:#6c757d; text-align:center; margin-bottom:40px; }
        .form-group { display:flex; flex-direction:column; margin-bottom:16px; }
        .form-label { font-size:16px; font-weight:600; color:#000; margin-bottom:8px; }
        .form-input { padding:16px 20px; border:2px solid #e9ecef; border-radius:12px; font-size:16px; color:#000; }
        .form-options { margin:8px 0; font-size:14px; color:#6c757d; display:flex; align-items:center; gap:8px; }
        .checkbox-container input { width:16px; height:16px; accent-color:#258bb0; margin-right:8px; }
        .terms-link, .privacy-link { color:#258bb0; text-decoration:none; }
        .signup-button { padding:16px; background:#258bb0; color:#fff; border:none; border-radius:12px; font-size:16px; font-weight:600; cursor:pointer; }
        .signup-button:hover { background:#1f7a9a; }
        .form-footer { text-align:center; margin-top:24px; }
        .login-link { color:#258bb0; text-decoration:none; font-weight:600; }
        @media (max-width:768px) {
          .signup-content { flex-direction:column; padding:40px 20px; gap:40px; }
          .signup-form-container { padding:40px 24px; }
          .page-title { font-size:48px; }
          .image-title { font-size:28px; }
          .image-subtitle { font-size:16px; }
        }
      `}</style>
    </div>
  );
}
