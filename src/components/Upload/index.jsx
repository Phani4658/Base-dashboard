import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import UploadedItem from "../UploadedItem";
import "./index.css";
import { FiUpload } from "react-icons/fi";

const sampleData = [
  {
    id: 1,
    link: "timesonline.co.uk",
    prefix: "QB0GaK7",
    selectTags: [
      "Technology",
      "Fashion",
      "Food",
      "Travel",
      "Sports",
      "Music",
      "Art",
      "Health",
      "Education",
      "Finance",
    ],
    selectedTags: [],
  },
  {
    id: 2,
    link: "timesonline.co.uk",
    prefix: "QB0GaK7",
    selectTags: [
      "Technology",
      "Fashion",
      "Food",
      "Travel",
      "Sports",
      "Music",
      "Art",
      "Health",
      "Education",
      "Finance",
    ],
    selectedTags: [],
  },
  {
    id: 3,
    link: "timesonline.co.uk",
    prefix: "QB0GaK7",
    selectTags: [
      "Technology",
      "Fashion",
      "Food",
      "Travel",
      "Sports",
      "Music",
      "Art",
      "Health",
      "Education",
      "Finance",
    ],
    selectedTags: [],
  },
];

const Upload = () => {
  const [data, setData] = useState(sampleData);

  const addTags = (tagName, id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, selectedTags: [...item.selectedTags, tagName] };
        }
        return item;
      });
    });
  };

  const removeTag = (tagName, id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, selectedTags: item.selectedTags.filter((tag) => tag !== tagName) };
        }
        return item;
      });
    });
  };

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
          <div className="uploads-container">
            <h2 className="uploads-container-heading">Uploads</h2>
            <div className="uploaded-items-container desktop-view">
              <div className="uploaded-headings-part">
                <h3 className="uploaded-section-headings">Sl No.</h3>
                <h3 className="uploaded-section-headings">Links</h3>
                <h3 className="uploaded-section-headings">Prefix</h3>
                <h3 className="uploaded-section-headings">Add Tags</h3>
                <h3 className="uploaded-section-headings">Selected Tags</h3>
              </div>
              <ul>
                {data.map((dataItem) => (
                  <div className="uploaded-item-mobile-view" key={data.id}>
                    <p className="uploaded-item-card-heading mobile-heading mobile-view">
                      {dataItem.id < 10 ? `0${dataItem.id}` : dataItem.id}
                    </p>
                    <UploadedItem data={dataItem} removeTag={removeTag} addTags={addTags} />
                  </div>
                ))}
              </ul>
            </div>
            <div className="uploaded-items-container uploaded-items-container-mobile mobile-view">
              <div className="sl-no-container">
                <h3 className="uploaded-section-headings">Sl No</h3>
                <ul className="sl-nos">
                  {data.map((dataItem) => (
                    <p
                      className="uploaded-item-card-heading mobile-heading"
                      key={dataItem.id}
                    >
                      {dataItem.id < 10 ? `0${dataItem.id}` : dataItem.id}
                    </p>
                  ))}
                </ul>
              </div>
              <div className="uploaded-card-container-mobile">
                <div className="uploaded-headings-part uploaded-headings-part-mobile">
                  <h3 className="uploaded-section-headings">Links</h3>
                  <h3 className="uploaded-section-headings">Prefix</h3>
                  <h3 className="uploaded-section-headings">Add Tags</h3>
                  <h3 className="uploaded-section-headings">Selected Tags</h3>
                </div>
                <ul className="uploaded-mobile-cards-container">
                  {data.map((sampleData) => (
                    <UploadedItem
                      data={sampleData}
                      key={data.id}
                      addTags={addTags}
                      removeTag = {removeTag}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Upload;
