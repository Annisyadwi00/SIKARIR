import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
    alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Alamat",
      content: "Jl. HS. Ronggowaluyo, Telukjambe Timur, Karawang, Jawa Barat 41361"
    },
    {
      icon: "📞",
      title: "Telepon",
      content: "+62 267 8641 177"
    },
    {
      icon: "✉️",
      title: "Email",
      content: "sikarir@unsika.ac.id"
    },
    {
      icon: "🕒",
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 16:00 WIB"
    }
  ];

  const faqData = [
    {
      question: "Bagaimana cara mendaftar di platform SIKARIR?",
      answer: "Anda dapat mendaftar dengan mengklik tombol 'Register' di halaman utama, kemudian mengisi formulir pendaftaran dengan data lengkap Anda."
    },
    {
      question: "Apakah ada biaya untuk menggunakan platform ini?",
      answer: "Tidak, platform SIKARIR sepenuhnya gratis untuk digunakan oleh mahasiswa UNSIKA."
    },
    {
      question: "Bagaimana proses seleksi magang?",
      answer: "Setiap perusahaan memiliki proses seleksi yang berbeda. Umumnya meliputi seleksi berkas, tes tertulis, dan wawancara."
    },
    {
      question: "Berapa lama durasi program magang?",
      answer: "Durasi magang bervariasi tergantung perusahaan dan program yang dipilih, umumnya berkisar antara 2-6 bulan."
    },
    {
      question: "Apakah mendapat sertifikat setelah magang?",
      answer: "Ya, setiap mahasiswa yang menyelesaikan program magang akan mendapatkan sertifikat dari perusahaan tempat magang."
    }
  ];

  return (
    <div className="main-container">
      <div className="desktop">
        <div className="contact-page">
          <div className="hero">
            <Header />
            <span className="page-title">Hubungi Kami</span>
          </div>
          
          <div className="contact-content">
            <section className="contact-intro">
              <div className="intro-content">
                <h1 className="intro-title">Kami Siap Membantu Anda</h1>
                <p className="intro-description">
                  Punya pertanyaan tentang program magang atau butuh bantuan menggunakan platform? 
                  Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui berbagai cara di bawah ini.
                </p>
              </div>
            </section>

            <section className="contact-info-section">
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="info-icon">{info.icon}</div>
                    <h3 className="info-title">{info.title}</h3>
                    <p className="info-content">{info.content}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="contact-form-section">
              <div className="form-container">
                <div className="form-header">
                  <h2 className="form-title">Kirim Pesan</h2>
                  <p className="form-subtitle">
                    Isi formulir di bawah ini dan kami akan merespons dalam 1x24 jam
                  </p>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Nama Lengkap</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Masukkan nama lengkap Anda"
                        value={formData.name}
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
                        placeholder="Masukkan email Anda"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Subjek</label>
                    <select
                      name="subject"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih subjek pesan</option>
                      <option value="pertanyaan-umum">Pertanyaan Umum</option>
                      <option value="bantuan-teknis">Bantuan Teknis</option>
                      <option value="kemitraan">Kemitraan Perusahaan</option>
                      <option value="keluhan">Keluhan</option>
                      <option value="saran">Saran & Masukan</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Pesan</label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Tulis pesan Anda di sini..."
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Kirim Pesan
                  </button>
                </form>
              </div>

              <div className="map-container">
                <div className="map-header">
                  <h3 className="map-title">Lokasi Kami</h3>
                  <p className="map-subtitle">Universitas Singaperbangsa Karawang</p>
                </div>
                <div className="map-placeholder">
                  <div className="map-content">
                    <div className="map-icon">🗺️</div>
                    <h4>Peta Lokasi</h4>
                    <p>Jl. HS. Ronggowaluyo, Telukjambe Timur, Karawang, Jawa Barat 41361</p>
                    <button className="map-button">Buka di Google Maps</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="faq-section">
              <div className="section-header">
                <h2 className="section-title">Pertanyaan yang Sering Diajukan</h2>
                <p className="section-subtitle">
                  Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
                </p>
              </div>
              
              <div className="faq-list">
                {faqData.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <div className="faq-question">
                      <h3>{faq.question}</h3>
                      <span className="faq-toggle">+</span>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="support-section">
              <div className="support-content">
                <h2 className="support-title">Butuh Bantuan Lebih Lanjut?</h2>
                <p className="support-description">
                  Tim support kami siap membantu Anda 24/7. Hubungi kami melalui berbagai channel yang tersedia.
                </p>
                <div className="support-channels">
                  <div className="support-channel">
                    <div className="channel-icon">💬</div>
                    <h4>Live Chat</h4>
                    <p>Chat langsung dengan tim support</p>
                    <button className="channel-button">Mulai Chat</button>
                  </div>
                  <div className="support-channel">
                    <div className="channel-icon">📱</div>
                    <h4>WhatsApp</h4>
                    <p>Hubungi via WhatsApp</p>
                    <button className="channel-button">+62 812-3456-7890</button>
                  </div>
                  <div className="support-channel">
                    <div className="channel-icon">📧</div>
                    <h4>Email Support</h4>
                    <p>Kirim email untuk bantuan</p>
                    <button className="channel-button">support@sikarir.ac.id</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <Footer />
        </div>
      </div>

      <style jsx>{`
        .main-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: rgba(255, 255, 255, 0.05);
        }

        .desktop {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          overflow: hidden auto;
        }

        .contact-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          min-height: 100vh;
        }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-wrap: nowrap;
          flex-shrink: 0;
          gap: 60px;
          position: relative;
          width: 100%;
          height: 322px;
          padding: 0 166px 40px 166px;
          background: rgba(0, 0, 0, 0.2)
            url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/gxtFTANp4D.png)
            no-repeat center;
          background-size: cover;
          z-index: 2;
        }

        .page-title {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-shrink: 0;
          flex-basis: auto;
          position: relative;
          color: #ffffff;
          font-family: Figtree, var(--default-font-family);
          font-size: 60px;
          font-weight: 700;
          line-height: 42px;
          text-align: center;
          white-space: nowrap;
          z-index: 20;
        }

        .contact-content {
          width: 100%;
          max-width: 1200px;
          padding: 0 40px;
        }

        .contact-intro {
          padding: 80px 0 60px;
          text-align: center;
        }

        .intro-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 48px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .intro-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          line-height: 1.6;
          color: #6c757d;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-info-section {
          padding: 60px 0;
        }

        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .contact-info-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px 32px;
          text-align: center;
          box-shadow: 0 3px 8px rgba(48, 150, 137, 0.08);
        }

        .info-icon {
          font-size: 48px;
          margin-bottom: 24px;
        }

        .info-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 12px;
        }

        .info-content {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #6c757d;
          line-height: 1.5;
          margin: 0;
        }

        .contact-form-section {
          padding: 60px 0;
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        .form-container {
          flex: 1;
          background: #ffffff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 3px 8px rgba(48, 150, 137, 0.08);
        }

        .form-header {
          margin-bottom: 40px;
        }

        .form-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 32px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 12px;
        }

        .form-subtitle {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #6c757d;
          line-height: 1.5;
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: flex;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .form-label {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          color: #000000;
        }

        .form-input, .form-textarea {
          padding: 16px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #000000;
          background: #ffffff;
          transition: border-color 0.3s ease;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #258bb0;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #6c757d;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          padding: 16px 32px;
          background: #258bb0;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background: #1f7a9a;
        }

        .map-container {
          flex: 1;
          max-width: 500px;
        }

        .map-header {
          margin-bottom: 24px;
        }

        .map-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 24px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 8px;
        }

        .map-subtitle {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #6c757d;
          margin: 0;
        }

        .map-placeholder {
          background: linear-gradient(135deg, #258bb0 0%, #1f7a9a 100%);
          border-radius: 20px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-content {
          text-align: center;
          color: #ffffff;
          padding: 40px;
        }

        .map-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .map-content h4 {
          font-family: Figtree, var(--default-font-family);
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .map-content p {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 24px;
          opacity: 0.9;
        }

        .map-button {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 12px 24px;
          border-radius: 8px;
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .map-button:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .faq-section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 42px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 2px 4px rgba(48, 150, 137, 0.05);
          overflow: hidden;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .faq-question:hover {
          background: #f8f9fa;
        }

        .faq-question h3 {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          margin: 0;
          flex: 1;
        }

        .faq-toggle {
          font-size: 24px;
          color: #258bb0;
          font-weight: bold;
        }

        .faq-answer {
          padding: 0 32px 24px;
          border-top: 1px solid #f8f9fa;
        }

        .faq-answer p {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #6c757d;
          line-height: 1.6;
          margin: 16px 0 0;
        }

        .support-section {
          padding: 80px 0;
          background: #ebf5f4;
          border-radius: 20px;
          margin: 40px 0;
        }

        .support-content {
          text-align: center;
          padding: 0 40px;
        }

        .support-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 36px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 16px;
        }

        .support-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 48px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .support-channels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .support-channel {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(48, 150, 137, 0.05);
        }

        .channel-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .support-channel h4 {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 12px;
        }

        .support-channel p {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          color: #6c757d;
          margin-bottom: 20px;
        }

        .channel-button {
          background: #258bb0;
          color: #ffffff;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .channel-button:hover {
          background: #1f7a9a;
        }

        @media (max-width: 768px) {
          .contact-content {
            padding: 0 20px;
          }

          .intro-title {
            font-size: 36px;
          }

          .contact-form-section {
            flex-direction: column;
            gap: 40px;
          }

          .form-row {
            flex-direction: column;
            gap: 24px;
          }

          .section-title {
            font-size: 32px;
          }

          .support-title {
            font-size: 28px;
          }

          .support-channels {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
