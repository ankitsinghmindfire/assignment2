import BasicDatePicker from "../../../components/BasicDatePicker";
import "./SubHeader.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SubHeader = ({}) => {
  return (
    <div className="flex gap-x-2 mb-16 mt-16 justify-center">
      <select id="status">
        <option value="option1">Status</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select id="contractor">
        <option value="option1">Contractor</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <input type="date" id="date1" value="12-01-2001" />
      <select id="lastAction">
        <option value="option1">Last Action By</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <input type="date" id="approved" />
    </div>
  );
};

export default SubHeader;
