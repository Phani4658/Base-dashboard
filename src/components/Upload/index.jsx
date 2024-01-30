import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.css";
import { FiUpload } from "react-icons/fi";

const Upload = () => {
  return (
    <>
      <section className="sidebar-content">
        <section className="sidebar-container">
          <Sidebar />
        </section>
        <section className="header-page-content">
          <Header />
          <section className="page-content">
            <h1 className="page-heading mobile-view">Upload CSV</h1>
            <div className="form-container">
              <form className="csv-upload-form">
                <div className="csv-file-upload">
                  <img
                    className="excel-icon"
                    src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png"
                    alt="microsoft-excel-2019--v1"
                  />
                  <p className="upload-text">
                    Upload your excel sheet <span>here</span>
                  </p>
                  <input type="file" className="file-input" />
                </div>
                <button className="sign-in-button upload-button">
                  <FiUpload />
                  Upload
                </button>
              </form>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Upload;
