import { useState, useEffect } from "react";
import axios from "axios";
import MainTableRow from "./MainTableRow";

const columns = [
  { name: "Select Row" },
  { name: "Series" },
  { name: "Description" },
  {
    name: "Number of versions",
  },
  {
    name: "Last action date",
  },
];

const CollapsibleTable = ({}) => {
  const [data, setData] = useState([]);
  const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3000/data");
      const rowsData = await axios.get("http://localhost:3000/rows");
      console.log(rowsData?.data);
      setRowsData(rowsData?.data);
      setData(data?.data);
    };

    getData();
  }, []);

  return (
    <div className="w-full">
      <table className="table-auto">
        <thead className="border-b-2">
          {columns.map((item) => (
            <th key={item?.name} className="p-5">
              {item?.name}
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((item, index) => {
            let nestedArrayItemIndex;
            nestedArrayItemIndex = rowsData?.indexOf(rowsData[index]);
            return (
              <MainTableRow
                item={item}
                key={item?.id}
                data={rowsData[index]}
                indexValue={index}
                nestedArrayIndex={nestedArrayItemIndex}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CollapsibleTable;
