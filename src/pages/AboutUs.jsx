import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Dr. Ahmad Susanto",
      position: "Project Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Memimpin pengembangan platform dengan visi menghubungkan mahasiswa dengan peluang magang terbaik."
    },
    {
      name: "Sari Dewi, M.Kom",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Bertanggung jawab atas pengembangan teknis dan inovasi platform SIKARIR."
    },
    {
      name: "Budi Hartono, S.E",
      position: "Partnership Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Mengelola kemitraan dengan perusahaan dan memastikan kualitas program magang."
    },
    {
      name: "Lisa Pratiwi, M.Psi",
      position: "Student Success Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Mendampingi mahasiswa dalam proses pencarian dan pelaksanaan magang."
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Mahasiswa Terdaftar",
      description: "Mahasiswa aktif yang telah bergabung dengan platform"
    },
    {
      number: "150+",
      label: "Perusahaan Mitra",
      description: "Perusahaan terpercaya yang menyediakan program magang"
    },
    {
      number: "300+",
      label: "Magang Berhasil",
      description: "Program magang yang telah berhasil diselesaikan"
    },
    {
      number: "95%",
      label: "Tingkat Kepuasan",
      description: "Tingkat kepuasan mahasiswa terhadap program magang"
    }
  ];

  return (
    <div className="main-container">
      <div className="desktop">
        <div className="about-page">
          <div className="hero">
            <Header />
            <span className="page-title">Tentang Kami</span>
          </div>
          
          <div className="about-content">
            <section className="intro-section">
              <div className="intro-content">
                <div className="intro-text">
                  <h1 className="intro-title">Portal Magang UNSIKA</h1>
                  <p className="intro-description">
                    SIKARIR adalah platform digital yang menghubungkan mahasiswa Universitas Singaperbangsa Karawang 
                    dengan peluang magang terbaik dari berbagai perusahaan dan instansi mitra. Kami berkomitmen untuk 
                    memfasilitasi pengembangan karir dan pengalaman profesional mahasiswa melalui program magang berkualitas.
                  </p>
                  <p className="intro-description">
                    Dengan dukungan teknologi modern dan jaringan mitra yang luas, kami memastikan setiap mahasiswa 
                    mendapatkan kesempatan untuk mengembangkan keterampilan, memperluas wawasan, dan membangun fondasi 
                    karir yang kuat sejak dini.
                  </p>
                </div>
                <div className="intro-image">
                  <div className="image-placeholder">
                    <h3>Visi & Misi</h3>
                    <div className="vision-mission">
                      <div className="vision">
                        <h4>Visi</h4>
                        <p>Menjadi platform terdepan dalam menghubungkan mahasiswa dengan peluang magang berkualitas tinggi.</p>
                      </div>
                      <div className="mission">
                        <h4>Misi</h4>
                        <ul>
                          <li>Menyediakan akses mudah ke program magang berkualitas</li>
                          <li>Membangun kemitraan strategis dengan industri</li>
                          <li>Mendampingi mahasiswa dalam pengembangan karir</li>
                          <li>Meningkatkan kualitas SDM melalui pengalaman praktis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="achievements-section">
              <div className="section-header">
                <h2 className="section-title">Pencapaian Kami</h2>
                <p className="section-subtitle">
                  Angka-angka yang menunjukkan komitmen kami dalam memberikan layanan terbaik
                </p>
              </div>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-number">{achievement.number}</div>
                    <h3 className="achievement-label">{achievement.label}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="values-section">
              <div className="section-header">
                <h2 className="section-title">Nilai-Nilai Kami</h2>
                <p className="section-subtitle">
                  Prinsip-prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
                </p>
              </div>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-icon">🎯</div>
                  <h3 className="value-title">Kualitas</h3>
                  <p className="value-description">
                    Kami berkomitmen menyediakan program magang berkualitas tinggi yang memberikan pengalaman berharga bagi mahasiswa.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🤝</div>
                  <h3 className="value-title">Kemitraan</h3>
                  <p className="value-description">
                    Membangun hubungan yang kuat dengan perusahaan mitra untuk menciptakan peluang terbaik bagi mahasiswa.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">💡</div>
                  <h3 className="value-title">Inovasi</h3>
                  <p className="value-description">
                    Terus berinovasi dalam mengembangkan platform dan layanan untuk memberikan pengalaman terbaik.
                  </p>
                </div>
                <div className="value-card">
                  <div className="value-icon">🌟</div>
                  <h3 className="value-title">Integritas</h3>
                  <p className="value-description">
                    Menjaga transparansi dan kejujuran dalam setiap proses untuk membangun kepercayaan semua pihak.
                  </p>
                </div>
              </div>
            </section>

            <section className="team-section">
              <div className="section-header">
                <h2 className="section-title">Tim Kami</h2>
                <p className="section-subtitle">
                  Profesional berpengalaman yang berdedikasi untuk kesuksesan mahasiswa
                </p>
              </div>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-card">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                      <p className="member-description">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="cta-section">
              <div className="cta-content">
                <h2 className="cta-title">Siap Memulai Perjalanan Magang Anda?</h2>
                <p className="cta-description">
                  Bergabunglah dengan ribuan mahasiswa lainnya yang telah menemukan peluang magang terbaik melalui platform kami.
                </p>
                <div className="cta-buttons">
                  <button className="cta-primary">Daftar Sekarang</button>
                  <button className="cta-secondary">Lihat Lowongan</button>
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

        .about-page {
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

        .about-content {
          width: 100%;
          max-width: 1200px;
          padding: 0 40px;
        }

        .intro-section {
          padding: 80px 0;
        }

        .intro-content {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .intro-text {
          flex: 1;
        }

        .intro-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 48px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 32px;
          line-height: 1.2;
        }

        .intro-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          line-height: 1.6;
          color: #333333;
          margin-bottom: 24px;
        }

        .intro-image {
          flex: 1;
        }

        .image-placeholder {
          background: linear-gradient(135deg, #258bb0 0%, #1f7a9a 100%);
          border-radius: 20px;
          padding: 40px;
          color: #ffffff;
        }

        .image-placeholder h3 {
          font-family: Figtree, var(--default-font-family);
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
          text-align: center;
        }

        .vision-mission {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .vision, .mission {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 24px;
        }

        .vision h4, .mission h4 {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .vision p, .mission ul {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          line-height: 1.5;
          margin: 0;
        }

        .mission ul {
          padding-left: 20px;
        }

        .mission li {
          margin-bottom: 8px;
        }

        .achievements-section, .values-section, .team-section {
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

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
        }

        .achievement-card {
          text-align: center;
          padding: 40px 24px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 3px 8px rgba(48, 150, 137, 0.08);
        }

        .achievement-number {
          font-family: Figtree, var(--default-font-family);
          font-size: 48px;
          font-weight: 700;
          color: #258bb0;
          margin-bottom: 16px;
        }

        .achievement-label {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 12px;
        }

        .achievement-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          color: #6c757d;
          line-height: 1.5;
          margin: 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .value-card {
          padding: 40px 32px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 3px 8px rgba(48, 150, 137, 0.08);
          text-align: center;
        }

        .value-icon {
          font-size: 48px;
          margin-bottom: 24px;
        }

        .value-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 24px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 16px;
        }

        .value-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .team-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 3px 8px rgba(48, 150, 137, 0.08);
          text-align: center;
        }

        .member-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 24px;
        }

        .member-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member-name {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 8px;
        }

        .member-position {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #258bb0;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .member-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          color: #6c757d;
          line-height: 1.5;
          margin: 0;
        }

        .cta-section {
          padding: 80px 0;
          background: #ebf5f4;
          border-radius: 20px;
          margin: 40px 0;
        }

        .cta-content {
          text-align: center;
          padding: 0 40px;
        }

        .cta-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 36px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 16px;
        }

        .cta-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .cta-primary, .cta-secondary {
          padding: 16px 32px;
          border-radius: 12px;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-primary {
          background: #258bb0;
          color: #ffffff;
          border: none;
        }

        .cta-primary:hover {
          background: #1f7a9a;
        }

        .cta-secondary {
          background: transparent;
          color: #258bb0;
          border: 2px solid #258bb0;
        }

        .cta-secondary:hover {
          background: #258bb0;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .about-content {
            padding: 0 20px;
          }

          .intro-content {
            flex-direction: column;
            gap: 40px;
          }

          .intro-title {
            font-size: 36px;
          }

          .section-title {
            font-size: 32px;
          }

          .achievements-grid, .values-grid, .team-grid {
            grid-template-columns: 1fr;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-primary, .cta-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
