import "./index.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa6";
import Sidebar from "../Sidebar"
import { useState } from "react";


const Header = () => {
  const [openNav,setOpenNav] = useState(false);

  return (
    <header className="header">
        <div className="desktop-left-part">
            <h1 className="page-heading">Upload CSV</h1>
        </div>
      <div className="left-part">
        <HiOutlineBars3 className="icon" onClick={() => {setOpenNav(true)}} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.9902 12.6291L19.7848 9.44685C19.4943 8.735 18.7951 8.23336 17.9787 8.23336C17.1081 8.23336 16.3707 8.80392 16.1202 9.59152L9.99098 14.6481C9.67551 14.4286 9.29214 14.3 8.87872 14.3C8.36808 14.3 7.90328 14.4963 7.55566 14.8175L0.121365 11.1829C1.00521 4.86344 6.43234 0 12.9954 0C20.051 0 25.7938 5.62091 25.9902 12.6291ZM6.99929 16.7717L0 13.3498C0.185401 20.3678 5.93266 26 12.9954 26C19.6871 26 25.1979 20.944 25.9161 14.4437L25.7557 14.7565L19.4134 11.504C19.0571 11.891 18.5462 12.1334 17.9787 12.1334C17.5037 12.1334 17.0683 11.9635 16.73 11.6812L10.8023 16.5715C10.649 17.4955 9.84616 18.2 8.87872 18.2C7.98246 18.2 7.22743 17.5953 6.99929 16.7717Z"
            fill="#605BFF"
          />
        </svg>
        <p className="company-name">Base</p>
        <Sidebar className="mobile-view mobile-view-nav" openNav={openNav} setOpenNav={setOpenNav} />
      </div>
      <div className="right-part">
        <FaRegBell className="icon" />
        <img src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1706547906/Mask_Group_kcrumt.png" alt="profile photo" className="profile-photo"/>
      </div>
    </header>
  );
};

export default Header;
