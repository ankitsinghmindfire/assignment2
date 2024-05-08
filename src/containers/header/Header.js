import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoCaretDownSharp } from "react-icons/io5";
import dummyImage from "../../assets/icons/download.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const headerItems = [
    { id: "h1", name: "Dashboard", to: "/" },
    { id: "h2", name: "Manage", to: "/" },
    { id: "h3", name: "My Approval", to: "/" },
    { id: "h4", name: "Upload", to: "/" },
  ];
  return (
    <div className="flex justify-around items-center p-1 shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="flex items-center">
        <div className="w-16 h-16 mr-4">
          <img src={dummyImage} alt="" />
        </div>
        <div className="bg-blue-950 p-1 rounded">
          <p className="w-20 text-white font-bold">Contractor Invoice Portal</p>
        </div>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {showMenu && (
          <ul className="absolute mt-10 py-2 px-4 bg-white shadow-md rounded-md right-[0%]">
            {headerItems.map((item) => (
              <li key={item?.id} className="text-blue-800 hover:text-sky-500">
                <a href={item?.to}>{item?.name}</a>
              </li>
            ))}
            <li className="text-blue-800 hover:text-sky-500">
              <a href="">Admin</a>
            </li>
          </ul>
        )}
      </div>
      <div className="hidden md:flex md:items-center">
        <ul className="flex gap-x-8">
          {headerItems.map((item) => (
            <li
              key={item?.id}
              className="text-white bg-blue-950 p-1 rounded hover:text-sky-500"
            >
              <a href={item?.to}>{item?.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-2 ml--5">
        <a href="" className="mt-1 mr-2">
          Admin
        </a>
        <div
          className="flex bg-slate-200 hover:text-sky-500 rounded"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <CgProfile size={36} />
          <span className="mt-2 rounded-lg">
            <IoCaretDownSharp size={18} />
          </span>
          {showMenu && (
            <div className="p-2 mt-6 absolute text-white bg-blue-950 rounded-lg w-28">
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
