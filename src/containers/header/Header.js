import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoCaretDownSharp } from "react-icons/io5";

import dummyImage from "../../assets/icons/download.png";
import "./Header.css";

const Header = ({}) => {
  const [show, setShow] = useState(false);
  const headerItems = [
    { id: "h1", name: "Dashboard", to: "/" },
    { id: "h2", name: "Manage", to: "/" },
    { id: "h3", name: "My Approval", to: "/" },
    { id: "h4", name: "Upload", to: "/" },
  ];
  return (
    <div className="flex justify-evenly gap-x-4 items-center p-4 shadow-md">
      <div className="flex gap-x-8">
        <div className="w-16 h-16">
          <img src={dummyImage} alt="" />
        </div>
        <p className="w-20 font-bold">Contractor Invoice Portal</p>
        <div className="border-2 border-neutral-400"></div>
      </div>
      <ul className="flex gap-x-16">
        {headerItems.map((item) => (
          <li key={item?.id} className="text-blue-800 hover:text-sky-500">
            <a href={item?.to}>{item?.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-2 ml--5">
        <a href="">Admin</a>
        <div
          className="flex bg-slate-200 hover:text-sky-500"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <CgProfile size={36} />
          <span className="mt-2 rounded-lg">
            <IoCaretDownSharp size={18} />
          </span>
          {show && (
            <div className="bg-slate-200 p-2 mt-6 absolute text-blue-800 rounded-lg w-28">
              <p className="hover:text-sky-500">My Account</p>
              <p className="hover:text-sky-500">Profile</p>
              <p className="hover:text-sky-500">Sign Out</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
