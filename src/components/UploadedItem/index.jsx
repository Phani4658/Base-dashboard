import "./index.css";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const UploadedItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, addTags, removeTag } = props;
  // eslint-disable-next-line react/prop-types
  const { id, link, prefix, selectTags, selectedTags } = data;

  const [showOptions, setShowOptions] = useState(false);

  const handleSelectClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <li>
      <div className="uploaded-item-card">
        <p className="uploaded-item-card-heading desktop-view">
          {id < 10 ? `0${id}` : id}
        </p>
        <a
          className="uploaded-item-card-heading links"
          // eslint-disable-next-line react/prop-types
          href={link.startsWith('http') ? link : `https://${link}`}
          target="_blank" rel="noopener noreferrer"
        >
          {link}
        </a>
        <p className="uploaded-item-card-heading">{prefix}</p>
        <div className="select-menu">
          <div className="select-btn" onClick={handleSelectClick}>
            <span>Select Tags</span>
            <MdKeyboardArrowDown />
          </div>

          {showOptions && (
            <ul className="options-container">
              {
                // eslint-disable-next-line react/prop-types
                selectTags
                  // eslint-disable-next-line react/prop-types
                  .filter((tag) => !selectedTags.includes(tag))
                  .map((tag) => {
                    const onClickOption = () => {
                      addTags(tag, id);
                    };
                    return (
                      <li className="option" key={tag} onClick={onClickOption}>
                        {tag}
                      </li>
                    );
                  })
              }
            </ul>
          )}
        </div>
        <ul className="selected-tags">
          {
            // eslint-disable-next-line react/prop-types
            selectedTags.map((tag) => (
              <li key={tag}>
                <div className="selected-tag">
                  {tag}{" "}
                  <IoCloseOutline
                    className="close"
                    onClick={() => {
                      removeTag(tag, id);
                    }}
                  />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </li>
  );
};

export default UploadedItem;
