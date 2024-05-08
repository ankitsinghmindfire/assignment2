import Checkbox from "@mui/material/Checkbox";

const columnsData = [
  { name: "Select Row" },
  { name: "Version" },
  { name: "Status" },
  { name: "Last Action Date" },
  { name: "Next Action Date" },
  { name: "Last Action By" },
  { name: "Pending Tasks & Actions" },
];

const NestedTable = ({ data }) => {
  return (
    <div className="pl-48 bg-zinc-400">
      <table className="">
        <thead className="">
          <tr className="border-b-2 rounded">
            {columnsData.map((item) => (
              <th key={item?.name} className="p-5">
                {item?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mb-10">
          {data.map((rowData) => (
            <tr key={rowData?.id} className="bg-white rounded-md p-5">
              <td className="p-5">
                <Checkbox />
              </td>
              <td className="p-5">{rowData?.id}</td>
              <td className="p-5">{rowData?.status}</td>
              <td className="p-5">{rowData?.approvedDate}</td>
              <td className="p-5">{rowData?.nextAction}</td>
              <td className="p-5">{rowData?.approvedBy}</td>
              <td className="p-5">{rowData?.pendingTasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NestedTable;
