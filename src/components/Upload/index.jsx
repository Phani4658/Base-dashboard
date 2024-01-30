import { useRef, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import UploadedItem from "../UploadedItem";
import "./index.css";
import { FiUpload } from "react-icons/fi";
import { Oval } from "react-loader-spinner";

const Upload = () => {
  const [isFileSelected, setFileSelected] = useState(false);
  const [status, setStatus] = useState("noFile");
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const fileInputRef = useRef(null);

  const onClickRemoveButton = () => {
    setFileSelected(false);
    setFile(null);
    fileInputRef.current.value = null;
  };

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
          return {
            ...item,
            selectedTags: item.selectedTags.filter((tag) => tag !== tagName),
          };
        }
        return item;
      });
    });
  };

  const onChangeFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileSelected(true);
      setFile(file);
    } else {
      setFile(null);
      setFileSelected(false);
    }
  };

  const parseCSV = (csvText) => {
    const lines = csvText.split("\n");
    const data = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");

      values[3] = values[3].substring(1);
      values[values.length - 2] = values[values.length - 2].substring(
        0,
        values[values.length - 2].length - 1
      );

      console.log(lines[i]);
      console.log(values);
      const entry = {
        id: parseInt(values[0]),
        link: values[1],
        prefix: values[2],
        selectTags: values.slice(3, -1),
        selectedTags: [],
      };

      data.push(entry);
    }

    return data;
  };

  const onClickUpload = (e) => {
    e.preventDefault();
    setStatus("Loading");
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const parsedData = parseCSV(text);
      setData(parsedData);
      setFileSelected(false);
      setFile(null);
      setStatus("NoFile");
    };
    reader.readAsText(file);
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
                    {isFileSelected ? (
                      file.name
                    ) : (
                      <>
                        Upload your excel sheet <span>here</span>
                      </>
                    )}
                  </p>
                  {isFileSelected && (
                    <span
                      className="remove-button"
                      onClick={onClickRemoveButton}
                    >
                      Remove
                    </span>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="file-input"
                    style={isFileSelected ? { zIndex: -1 } : { zIndex: 0 }}
                    onChange={onChangeFileInput}
                    disabled={isFileSelected ? true : false}
                    accept=".csv,.xls,.xlsx"
                  />
                </div>
                <button
                  disabled={isFileSelected ? false : true}
                  className="sign-in-button upload-button"
                  onClick={onClickUpload}
                >
                  {status === "Loading" ? (
                    <Oval width="24px" height="24px" color="#fff" />
                  ) : (
                    <>
                      <FiUpload />
                      Upload
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>
          {data.length > 0 && (
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
                      <UploadedItem
                        data={dataItem}
                        removeTag={removeTag}
                        addTags={addTags}
                      />
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
                        removeTag={removeTag}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Upload;
