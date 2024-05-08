import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import NestedTable from "./NestedTable";

const MainTableRow = ({ item, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedRowId, setExpandedRowId] = useState(null);

  const handleRowClick = () => {
    if (expandedRowId === item.id) {
      setExpandedRowId(null);
      setIsExpanded(false);
    } else {
      setExpandedRowId(item.id);
      setIsExpanded(true);
    }
  };

  return (
    <>
      <tr
        key={item?.id}
        className="p-5 border-b-2 rounded"
        onClick={handleRowClick}
      >
        <td className="p-5">
          <Checkbox />
        </td>
        <td className="p-5">{item?.series}</td>
        <td className="p-5">{item?.description}</td>
        <td className="p-5">{item?.numberOfVersions}</td>
        <td className="p-5">{item?.lastActionDate}</td>
      </tr>
      {isExpanded && (
        <tr>
          <td colSpan="5">
            <NestedTable data={data} />
          </td>
        </tr>
      )}
    </>
  );
};

export default MainTableRow;
