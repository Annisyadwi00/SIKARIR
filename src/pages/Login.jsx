import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="main-container">
      <div className="desktop">
        <div className="login-page">
          <div className="hero">
            <Header />
            <span className="page-title">Login</span>
          </div>

          <div className="login-content">
            <div className="login-form-container">
              <div className="form-header">
                <h1 className="form-title">Masuk ke Akun Anda</h1>
                <p className="form-subtitle">
                  Silakan masuk untuk melanjutkan ke portal magang UNSIKA
                </p>
              </div>

              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Masukkan email Anda"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Masukkan password Anda"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    Ingat saya
                  </label>
                  <Link to="/forgot-password" className="forgot-link">Lupa password?</Link>
                </div>

                <button type="submit" className="login-button">Masuk</button>

                <div className="form-footer">
                  <p>Belum punya akun? <Link to="/signup" className="signup-link">Daftar sekarang</Link></p>
                </div>
              </form>
            </div>

            <div className="login-image">
              <div className="image-content">
                <h2 className="image-title">Selamat Datang Kembali!</h2>
                <p className="image-subtitle">
                  Temukan peluang magang terbaik untuk mengembangkan karir Anda bersama mitra perusahaan terpercaya.
                </p>
              </div>
              <div className="image-overlay"></div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <style jsx>{`
        .main-container { width: 100%; min-height: 100vh; background: #fff; }
        .desktop { width: 100%; min-height: 100vh; background: #fff; }
        .login-page { display: flex; flex-direction: column; align-items: center; width: 100%; }
        .hero { display: flex; flex-direction: column; align-items: center; width: 100%; height: 322px; padding: 0 166px 40px 166px; background: rgba(0,0,0,0.2) url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/gxtFTANp4D.png) no-repeat center; background-size: cover; }
        .page-title { color: #fff; font-size: 60px; font-weight: 700; }
        .login-content { display: flex; justify-content: center; max-width: 1200px; padding: 80px 40px; gap: 80px; }
        .login-form-container { flex: 1; max-width: 500px; padding: 60px 40px; background: #fff; border-radius: 20px; box-shadow: 0 10px 30px rgba(48,150,137,0.1); }
        .form-title { font-size: 32px; font-weight:700; color:#000; margin-bottom:16px; text-align:center; }
        .form-subtitle { font-size:16px; color:#6c757d; text-align:center; margin-bottom:40px; }
        .form-group { display:flex; flex-direction:column; margin-bottom:16px; }
        .form-label { font-size:16px; font-weight:600; color:#000; margin-bottom:8px; }
        .form-input { padding:16px 20px; border:2px solid #e9ecef; border-radius:12px; font-size:16px; color:#000; }
        .form-options { display:flex; justify-content:space-between; align-items:center; margin:8px 0; font-size:14px; color:#6c757d; }
        .checkbox-container { display:flex; align-items:center; gap:8px; cursor:pointer; }
        .checkbox-container input { width:16px; height:16px; accent-color:#258bb0; }
        .forgot-link { color:#258bb0; text-decoration:none; }
        .forgot-link:hover { text-decoration:underline; }
        .login-button { padding:16px; background:#258bb0; color:#fff; border:none; border-radius:12px; font-size:16px; font-weight:600; cursor:pointer; }
        .login-button:hover { background:#1f7a9a; }
        .form-footer { text-align:center; margin-top:24px; }
        .signup-link { color:#258bb0; text-decoration:none; font-weight:600; }
        .login-image { flex:1; max-width:500px; height:600px; background: linear-gradient(135deg,#258bb0 0%,#1f7a9a 100%); border-radius:20px; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center; }
        .image-title { font-size:36px; font-weight:700; color:#fff; margin-bottom:24px; text-align:center; }
        .image-subtitle { font-size:18px; font-weight:400; color:#fff; opacity:0.9; text-align:center; }
        .image-overlay { position:absolute; top:0; left:0; right:0; bottom:0; }

        @media (max-width:768px) {
          .login-content { flex-direction:column; padding:40px 20px; gap:40px; }
          .login-form-container { padding:40px 24px; }
          .page-title { font-size:48px; }
          .image-title { font-size:28px; }
          .image-subtitle { font-size:16px; }
          .login-image { height:300px; }
        }
      `}</style>
    </div>
  );
}
