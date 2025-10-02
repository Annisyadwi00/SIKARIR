import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="logo">
        <div className="check" />
        <span className="si-karir">SIKARIR</span>
      </div>
      <nav className="menu">
        <Link to="/" className={`text ${isActive('/') ? 'active' : ''}`}>
          <span className="home">Home</span>
        </Link>
        <Link to="/jobs" className={`text-2 ${isActive('/jobs') ? 'active' : ''}`}>
          <span className="lowongan">Lowongan</span>
        </Link>
        <Link to="/about" className={`text-3 ${isActive('/about') ? 'active' : ''}`}>
          <span className="tentang-kami">Tentang Kami</span>
        </Link>
        <Link to="/contact" className={`text-4 ${isActive('/contact') ? 'active' : ''}`}>
          <span className="hub-kami">Hub kami</span>
        </Link>
      </nav>
      <div className="buttons">
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="button">
          <span className="register">Register</span>
        </Link>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: nowrap;
          flex-shrink: 0;
          position: relative;
          width: 1296px;
          padding: 20px 0 20px 0;
          z-index: 3;
        }

        .logo {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          width: 162px;
          z-index: 4;
        }

        .check {
          flex-shrink: 0;
          position: relative;
          width: 28px;
          height: 28px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/yatfbPpRZZ.png)
            no-repeat center;
          background-size: cover;
          z-index: 5;
          overflow: hidden;
        }

        .si-karir {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          width: 102px;
          height: 14px;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          line-height: 14px;
          text-align: left;
          white-space: nowrap;
          z-index: 6;
        }

        .menu {
          display: flex;
          align-items: flex-start;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 443px;
          z-index: 7;
        }

        .text, .text-2, .text-3, .text-4 {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          padding: 8px 12px 8px 12px;
          text-decoration: none;
          z-index: 8;
        }

        .text {
          width: 69px;
        }

        .text-2 {
          width: 100px;
        }

        .text-3 {
          width: 122px;
        }

        .text-4 {
          width: 92px;
        }

        .home, .lowongan, .tentang-kami, .hub-kami {
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          height: 11px;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 500;
          line-height: 11px;
          text-align: left;
          white-space: nowrap;
          opacity: 0.6;
          z-index: 9;
        }

        .text.active .home,
        .text-2.active .lowongan,
        .text-3.active .tentang-kami,
        .text-4.active .hub-kami {
          font-weight: 600;
          opacity: 1;
        }

        .buttons {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 20px;
          position: relative;
          width: 162px;
          z-index: 16;
        }

        .login {
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
          white-space: nowrap;
          text-decoration: none;
          z-index: 17;
        }

        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 10px;
          position: relative;
          width: 101px;
          height: 40px;
          padding: 14px 20px 14px 20px;
          background: #258bb0;
          z-index: 18;
          overflow: hidden;
          border-radius: 8px;
          text-decoration: none;
        }

        .register {
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
          z-index: 19;
        }
      `}</style>
    </header>
  );
}
