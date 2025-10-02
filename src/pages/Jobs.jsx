import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Human Capital Business Partner Internship",
      company: "PT Bank Mandiri (Persero) Tbk",
      category: "Psikologi",
      type: "Full time",
      salary: "Rp. 1.000.000",
      location: "Jakarta Selatan",
      timeAgo: "10 menit lalu",
      logo: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/U9mHecMgRc.png"
    },
    {
      id: 2,
      title: "Laboratory (Sample Picker)",
      company: "PT Borneo Alumina Indonesia",
      category: "Teknik Kimia",
      type: "Full time",
      salary: "Rp. 1.000.000",
      location: "Mempawah",
      timeAgo: "12 menit lalu",
      logo: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/yLVc4E9ZSB.png"
    },
    {
      id: 3,
      title: "Corporate Communication & TJSL",
      company: "PT Jakarta Industrial Estate Pulogadung",
      category: "Akuntansi",
      type: "Full time",
      salary: "Rp. 1.000.000",
      location: "Jakarta Timur",
      timeAgo: "15 menit lalu",
      logo: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/hGSfBBi0wh.png"
    },
    {
      id: 4,
      title: "Bagian Sekretariat dan Hukum",
      company: "PT Perkebunan Nusantara I - Regional 3",
      category: "Administrasi Bisnis",
      type: "Full time",
      salary: "Rp. 1.000.000",
      location: "Semarang",
      timeAgo: "24 menit lalu",
      logo: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/1gfJRHK43q.png"
    },
    {
      id: 5,
      title: "Perencanaan & Pengembangan SDM & TI",
      company: "PT Danantara Asset Management (Persero)",
      category: "Manajemen Informatika",
      type: "Full time",
      salary: "Rp. 1.000.000",
      location: "Jakarta Utara",
      timeAgo: "26 menit lalu",
      logo: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/b92nrzNwKR.png"
    },
    {
      id: 6,
      title: "People Analytics & HCIS Development Intern",
      company: "PT Berdikari",
      category: "Ilmu Komputer",
      type: "Full time",
      salary: "Rp. 1.000.000",
      location: "Jakarta Selatan",
      timeAgo: "30 menit lalu",
      logo: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/3U5wXP1gjd.png"
    }
  ];

  const categories = [
    { name: "Fakultas Hukum", count: 10 },
    { name: "Fakultas Ekonomi", count: 10 },
    { name: "Fakultas Keguruan & Ilmu", count: 10 },
    { name: "Fakultas Pertanian", count: 10 },
    { name: "Fakultas Ilmu Komputer", count: 10 },
    { name: "Fakultas Ilmu Sosial & Politik", count: 10 },
    { name: "Fakultas Agama Islam", count: 10 },
    { name: "Fakultas Ilmu Kesehatan", count: 10 }
  ];

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(prev => 
      prev.includes(categoryName) 
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="main-container">
      <div className="desktop">
        <div className="jobs-page">
          <div className="hero">
            <Header />
            <span className="page-title">Lowongan Magang</span>
          </div>
          
          <div className="jobs-content">
            <div className="sidebar">
              <div className="search-section">
                <h3 className="section-title">Cari Posisi Magang</h3>
                <div className="search-input">
                  <div className="search-icon" />
                  <input
                    type="text"
                    placeholder="Cari posisi atau Perusahaan"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="location-section">
                <h3 className="section-title">Lokasi</h3>
                <div className="location-input">
                  <div className="location-icon" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">Pilih Kota</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                    <option value="surabaya">Surabaya</option>
                    <option value="yogyakarta">Yogyakarta</option>
                    <option value="semarang">Semarang</option>
                  </select>
                  <div className="chevron-down" />
                </div>
              </div>

              <div className="category-section">
                <h3 className="section-title">Kategori</h3>
                <div className="category-list">
                  {categories.map((category, index) => (
                    <div key={index} className="category-item">
                      <label className="category-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedCategory.includes(category.name)}
                          onChange={() => handleCategoryChange(category.name)}
                        />
                        <span className="category-name">{category.name}</span>
                      </label>
                      <span className="category-count">{category.count}</span>
                    </div>
                  ))}
                </div>
                <button className="show-more-btn">Show more</button>
              </div>

              <div className="filter-section">
                <h3 className="section-title">Tipe Magang</h3>
                <div className="filter-list">
                  <div className="filter-item">
                    <label className="filter-checkbox">
                      <input type="checkbox" />
                      <span>Full Time</span>
                    </label>
                    <span className="filter-count">10</span>
                  </div>
                  <div className="filter-item">
                    <label className="filter-checkbox">
                      <input type="checkbox" />
                      <span>Part Time</span>
                    </label>
                    <span className="filter-count">10</span>
                  </div>
                  <div className="filter-item">
                    <label className="filter-checkbox">
                      <input type="checkbox" />
                      <span>Freelance</span>
                    </label>
                    <span className="filter-count">10</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="jobs-list">
              <div className="jobs-header">
                <span className="results-count">Menampilkan {jobs.length} dari {jobs.length} hasil</span>
                <div className="sort-dropdown">
                  <span>Terbaru</span>
                  <div className="chevron-down" />
                </div>
              </div>

              <div className="jobs-grid">
                {jobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-header">
                      <div className="job-badge">
                        <span className="time-ago">{job.timeAgo}</span>
                      </div>
                      <div className="bookmark-icon" />
                    </div>
                    
                    <div className="job-info">
                      <div className="company-logo">
                        <img src={job.logo} alt={job.company} />
                      </div>
                      <div className="job-details">
                        <h3 className="job-title">{job.title}</h3>
                        <p className="company-name">{job.company}</p>
                      </div>
                    </div>

                    <div className="job-meta">
                      <div className="job-tags">
                        <div className="job-tag">
                          <div className="briefcase-icon" />
                          <span>{job.category}</span>
                        </div>
                        <div className="job-tag">
                          <div className="clock-icon" />
                          <span>{job.type}</span>
                        </div>
                        <div className="job-tag">
                          <div className="salary-icon" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="job-tag">
                          <div className="location-icon" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Link to={`/job/${job.id}`} className="detail-btn">
                        Detail Magang
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination">
                <div className="pagination-info">
                  <div className="page-numbers">
                    <button className="page-btn active">1</button>
                    <button className="page-btn">2</button>
                  </div>
                </div>
                <button className="next-btn">
                  <span>Selanjutnya</span>
                  <div className="chevron-right" />
                </button>
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

        .jobs-page {
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

        .jobs-content {
          display: flex;
          align-items: flex-start;
          width: 100%;
          max-width: 1440px;
          padding: 60px 72px 120px 72px;
          gap: 24px;
        }

        .sidebar {
          width: 314px;
          background: #ebf5f4;
          border-radius: 20px;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .section-title {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 20px;
        }

        .search-section, .location-section, .category-section, .filter-section {
          display: flex;
          flex-direction: column;
        }

        .search-input, .location-input {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 12px;
          background: #ffffff;
          border-radius: 12px;
        }

        .search-icon {
          width: 20px;
          height: 20px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/EEWOsdV2hD.png) no-repeat center;
          background-size: cover;
        }

        .location-icon {
          width: 20px;
          height: 20px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/nVoNJ60MHB.png) no-repeat center;
          background-size: cover;
        }

        .search-input input, .location-input select {
          flex: 1;
          border: none;
          outline: none;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #000000;
          background: transparent;
        }

        .search-input input::placeholder {
          color: #6c757d;
        }

        .chevron-down {
          width: 20px;
          height: 20px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/HoFJQ6kaAo.png) no-repeat center;
          background-size: cover;
        }

        .category-list, .filter-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .category-item, .filter-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .category-checkbox, .filter-checkbox {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .category-checkbox input, .filter-checkbox input {
          width: 16px;
          height: 16px;
          accent-color: #258bb0;
        }

        .category-name, .filter-checkbox span {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #000000;
        }

        .category-count, .filter-count {
          background: #ffffff;
          padding: 4px 8px;
          border-radius: 12px;
          font-family: Inter, var(--default-font-family);
          font-size: 16px;
          color: #6c757d;
        }

        .show-more-btn {
          background: #258bb0;
          color: #ffffff;
          border: none;
          padding: 14px 20px;
          border-radius: 8px;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 12px;
        }

        .show-more-btn:hover {
          background: #1f7a9a;
        }

        .jobs-list {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .jobs-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .results-count {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 500;
          color: #6c757d;
        }

        .sort-dropdown {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 1.5px solid #6c757d;
          border-radius: 6px;
          cursor: pointer;
        }

        .sort-dropdown span {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 500;
          color: #6c757d;
        }

        .jobs-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .job-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 3px 8px rgba(48, 150, 137, 0.08);
          display: flex;
          flex-direction: column;
          gap: 28px;
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
          width: 40px;
          height: 40px;
          border-radius: 8px;
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
          font-size: 28px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .company-name {
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          color: #000000;
          margin: 0;
        }

        .job-meta {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .job-tags {
          display: flex;
          align-items: center;
          gap: 24px;
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
          color: #6c757d;
        }

        .detail-btn {
          background: #258bb0;
          color: #ffffff;
          padding: 14px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-family: Figtree, var(--default-font-family);
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .detail-btn:hover {
          background: #1f7a9a;
        }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pagination-info {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .page-numbers {
          display: flex;
          gap: 24px;
        }

        .page-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: 2px solid #6c757d;
          background: transparent;
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 600;
          color: #6c757d;
          cursor: pointer;
        }

        .page-btn.active {
          background: #258bb0;
          border-color: #258bb0;
          color: #ffffff;
        }

        .next-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 15px 16px;
          border: 2px solid #6c757d;
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
        }

        .next-btn span {
          font-family: Figtree, var(--default-font-family);
          font-size: 20px;
          font-weight: 500;
          color: #6c757d;
        }

        .chevron-right {
          width: 24px;
          height: 24px;
          background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-10-02/OMfwuKKi9f.png) no-repeat center;
          background-size: cover;
        }

        @media (max-width: 768px) {
          .jobs-content {
            flex-direction: column;
            padding: 40px 20px;
          }

          .sidebar {
            width: 100%;
          }

          .job-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .job-tags {
            flex-wrap: wrap;
            gap: 16px;
          }

          .pagination {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
