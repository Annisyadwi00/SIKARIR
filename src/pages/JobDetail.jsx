import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JobDetail() {
  const { id } = useParams();

  const jobData = {
    id: 1,
    title: "Human Capital Business Partner Internship",
    company: "PT Bank Mandiri (Persero) Tbk",
    category: "Psikologi",
    type: "Full time",
    salary: "Rp. 1.000.000",
    location: "Jakarta Selatan",
    timeAgo: "10 menit lalu",
    logo: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/U9mHecMgRc.png",
    description: "Kami mencari mahasiswa yang bersemangat untuk bergabung dalam program magang Human Capital Business Partner di PT Bank Mandiri. Posisi ini memberikan kesempatan untuk belajar dan berkontribusi dalam berbagai aspek manajemen sumber daya manusia.",
    requirements: [
      "Mahasiswa aktif jurusan Psikologi, Manajemen SDM, atau bidang terkait",
      "Semester 6 atau lebih tinggi",
      "IPK minimal 3.00",
      "Memiliki kemampuan komunikasi yang baik",
      "Mampu bekerja dalam tim",
      "Menguasai Microsoft Office (Word, Excel, PowerPoint)",
      "Memiliki minat dalam bidang Human Resources"
    ],
    responsibilities: [
      "Membantu dalam proses rekrutmen dan seleksi karyawan",
      "Mendukung kegiatan training dan development",
      "Membantu dalam administrasi HR",
      "Melakukan analisis data HR",
      "Membantu dalam employee engagement activities",
      "Mendukung proses performance management"
    ],
    benefits: [
      "Uang saku bulanan Rp. 1.000.000",
      "Sertifikat magang",
      "Pengalaman kerja di perusahaan BUMN terkemuka",
      "Mentoring dari profesional berpengalaman",
      "Networking opportunities",
      "Flexible working hours"
    ],
    applicationDeadline: "31 Januari 2025",
    startDate: "1 Februari 2025",
    duration: "3 bulan"
  };

  return (
    <div className="main-container">
      <div className="desktop">
        <div className="job-detail-page">
          <div className="hero">
            <Header />
            <span className="page-title">Detail Lowongan</span>
          </div>
          
          <div className="job-detail-content">
            <div className="job-detail-main">
              <div className="job-header">
                <div className="job-badge">
                  <span className="time-ago">{jobData.timeAgo}</span>
                </div>
                <div className="bookmark-icon" />
              </div>
              
              <div className="job-info">
                <div className="company-logo">
                  <img src={jobData.logo} alt={jobData.company} />
                </div>
                <div className="job-details">
                  <h1 className="job-title">{jobData.title}</h1>
                  <p className="company-name">{jobData.company}</p>
                </div>
              </div>

              <div className="job-meta">
                <div className="job-tags">
                  <div className="job-tag">
                    <div className="briefcase-icon" />
                    <span>{jobData.category}</span>
                  </div>
                  <div className="job-tag">
                    <div className="clock-icon" />
                    <span>{jobData.type}</span>
                  </div>
                  <div className="job-tag">
                    <div className="salary-icon" />
                    <span>{jobData.salary}</span>
                  </div>
                  <div className="job-tag">
                    <div className="location-icon" />
                    <span>{jobData.location}</span>
                  </div>
                </div>
              </div>

              <div className="job-description">
                <h2 className="section-title">Deskripsi Pekerjaan</h2>
                <p className="description-text">{jobData.description}</p>
              </div>

              <div className="job-requirements">
                <h2 className="section-title">Persyaratan</h2>
                <ul className="requirements-list">
                  {jobData.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="job-responsibilities">
                <h2 className="section-title">Tanggung Jawab</h2>
                <ul className="responsibilities-list">
                  {jobData.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="job-benefits">
                <h2 className="section-title">Benefit</h2>
                <ul className="benefits-list">
                  {jobData.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="job-sidebar">
              <div className="application-card">
                <h3 className="card-title">Informasi Lamaran</h3>
                <div className="info-item">
                  <span className="info-label">Batas Lamaran:</span>
                  <span className="info-value">{jobData.applicationDeadline}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Mulai Magang:</span>
                  <span className="info-value">{jobData.startDate}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Durasi:</span>
                  <span className="info-value">{jobData.duration}</span>
                </div>
                <button className="apply-btn">
                  Lamar Sekarang
                </button>
                <button className="save-btn">
                  Simpan Lowongan
                </button>
              </div>

              <div className="company-card">
                <h3 className="card-title">Tentang Perusahaan</h3>
                <div className="company-info">
                  <div className="company-logo-large">
                    <img src={jobData.logo} alt={jobData.company} />
                  </div>
                  <div className="company-details">
                    <h4 className="company-name-large">{jobData.company}</h4>
                    <p className="company-description">
                      PT Bank Mandiri (Persero) Tbk adalah bank terbesar di Indonesia dalam hal aset, kredit, dan deposit. 
                      Bank ini menyediakan berbagai layanan perbankan untuk nasabah korporat, komersial, UKM, dan ritel.
                    </p>
                    <div className="company-stats">
                      <div className="stat-item">
                        <span className="stat-label">Industri:</span>
                        <span className="stat-value">Perbankan</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Ukuran:</span>
                        <span className="stat-value">10,000+ karyawan</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Lokasi:</span>
                        <span className="stat-value">Jakarta, Indonesia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="similar-jobs">
                <h3 className="card-title">Lowongan Serupa</h3>
                <div className="similar-job-item">
                  <div className="similar-job-info">
                    <h4 className="similar-job-title">HR Intern</h4>
                    <p className="similar-job-company">PT BCA Tbk</p>
                    <span className="similar-job-location">Jakarta Pusat</span>
                  </div>
                  <Link to="/job/2" className="similar-job-link">Lihat</Link>
                </div>
                <div className="similar-job-item">
                  <div className="similar-job-info">
                    <h4 className="similar-job-title">People Development Intern</h4>
                    <p className="similar-job-company">PT Telkom Indonesia</p>
                    <span className="similar-job-location">Jakarta Selatan</span>
                  </div>
                  <Link to="/job/3" className="similar-job-link">Lihat</Link>
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

        .job-detail-page {
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

        .job-detail-content {
          display: flex;
          align-items: flex-start;
          width: 100%;
          max-width: 1440px;
          padding: 60px 72px 120px 72px;
          gap: 40px;
        }

        .job-detail-main {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .job-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .job-badge {
          background: rgba(48, 150, 137, 0.1);
          padding: 8px;
          border-radius: 8px;
        }

        .time-ago {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #258bb0;
        }

        .bookmark-icon {
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/7NTFtKeHhL.png) no-repeat center;
          background-size: 100% 100%;
          cursor: pointer;
        }

        .job-info {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .company-logo {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          overflow: hidden;
        }

        .company-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .job-details {
          flex: 1;
        }

        .job-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 36px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .company-name {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          color: #6c757d;
          margin: 0;
        }

        .job-meta {
          padding: 24px 0;
          border-top: 1px solid #e9ecef;
          border-bottom: 1px solid #e9ecef;
        }

        .job-tags {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .job-tag {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .briefcase-icon, .clock-icon, .salary-icon, .location-icon {
          width: 24px;
          height: 24px;
          background-size: cover;
        }

        .briefcase-icon {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/8qCa9jj3p0.png) no-repeat center;
        }

        .clock-icon {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/6fgtnxqcnK.png) no-repeat center;
        }

        .salary-icon {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/WsryX8kMDu.png) no-repeat center;
          background-size: 100% 100%;
        }

        .location-icon {
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/AgTOd1hmV4.png) no-repeat center;
        }

        .job-tag span {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          color: #000000;
        }

        .section-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 24px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 20px;
        }

        .description-text {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          line-height: 1.6;
          color: #333333;
          margin: 0;
        }

        .requirements-list, .responsibilities-list, .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .requirements-list li, .responsibilities-list li, .benefits-list li {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          line-height: 1.6;
          color: #333333;
          margin-bottom: 12px;
          padding-left: 24px;
          position: relative;
        }

        .requirements-list li::before, .responsibilities-list li::before, .benefits-list li::before {
          content: '•';
          color: #258bb0;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .job-sidebar {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .application-card, .company-card, .similar-jobs {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 3px 8px rgba(48, 150, 137, 0.08);
        }

        .card-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 24px;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f8f9fa;
        }

        .info-item:last-of-type {
          border-bottom: none;
          margin-bottom: 24px;
        }

        .info-label {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          color: #6c757d;
        }

        .info-value {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          font-weight: 600;
          color: #000000;
        }

        .apply-btn, .save-btn {
          width: 100%;
          padding: 16px 24px;
          border-radius: 12px;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 12px;
        }

        .apply-btn {
          background: #258bb0;
          color: #ffffff;
          border: none;
        }

        .apply-btn:hover {
          background: #1f7a9a;
        }

        .save-btn {
          background: transparent;
          color: #258bb0;
          border: 2px solid #258bb0;
        }

        .save-btn:hover {
          background: #258bb0;
          color: #ffffff;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .company-logo-large {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          overflow: hidden;
          align-self: center;
        }

        .company-logo-large img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .company-name-large {
          font-family: Figtree, var(--default-font-family);
          font-size: 18px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 12px;
          text-align: center;
        }

        .company-description {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          line-height: 1.5;
          color: #6c757d;
          margin-bottom: 20px;
          text-align: center;
        }

        .company-stats {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-label {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          color: #6c757d;
        }

        .stat-value {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          font-weight: 600;
          color: #000000;
        }

        .similar-job-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid #f8f9fa;
        }

        .similar-job-item:last-child {
          border-bottom: none;
        }

        .similar-job-info {
          flex: 1;
        }

        .similar-job-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 4px;
        }

        .similar-job-company {
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          color: #6c757d;
          margin-bottom: 4px;
        }

        .similar-job-location {
          font-family: Figtree, var(--default-font-family);
          font-size: 12px;
          color: #6c757d;
        }

        .similar-job-link {
          color: #258bb0;
          text-decoration: none;
          font-family: Figtree, var(--default-font-family);
          font-size: 14px;
          font-weight: 600;
        }

        .similar-job-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .job-detail-content {
            flex-direction: column;
            padding: 40px 20px;
          }

          .job-title {
            font-size: 28px;
          }

          .job-tags {
            gap: 16px;
          }

          .job-tag {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
