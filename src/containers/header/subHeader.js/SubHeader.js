import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";

import "./SubHeader.css";

const SubHeader = ({}) => {
  return (
    <div className="flex gap-x-8 pl-16 pb-8 pt-8 bg-zinc-400 mt-4 rounded-lg">
      <button className="border-2 border-slate-100 rounded-lg p-1 bg-slate-200 hover:text-sky-500">
        <IoIosMenu size={36} />
      </button>
      <button className="border-2 border-slate-100 rounded-lg p-1 bg-slate-200 hover:text-sky-500">
        <CgMenuGridO size={36} />
      </button>
      <select
        id="status"
        className="p-2 border-none bg-zinc-400 focus:border-none"
      >
        <option value="option1">Status</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select id="contractor" className="p-2 border-none bg-zinc-400">
        <option value="option1">Contractor</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <input type="date" id="date1" className="p-2 bg-zinc-400 border-none" />
      <select id="lastAction" className="p-2 border-none bg-zinc-400">
        <option value="option1">Last Action By</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <input
        type="date"
        id="approved"
        className="p-2 border-none active:border-none bg-zinc-400"
      />
    </div>
  );
};

export default SubHeader;
