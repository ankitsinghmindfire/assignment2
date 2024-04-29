import MUIDataTable from "mui-datatables";

const ExpandableRowTable = () => {
  const columns = [
    { name: "Series" },
    { name: "Description" },
    {
      name: "Number of versions",
    },
    {
      name: "Last action date",
    },
    {
      name: "Last action date",
    },
    {
      name: "Last Action by",
    },
  ];

  const data = [
    [1, "Snow", "Jon", 14, "22/10/2022", "25/12/2025"],
    [2, "Lannister", "Cersei", 31, "22/10/2022", "25/12/2025"],
    [3, "Lannister", "Jaime", 31, "22/10/2022", "25/12/2025"],
    [4, "Stark", "Arya", 11, "22/10/2022", "25/12/2025"],
    [5, "Targaryen", "Daenerys", 31, "22/10/2022", "25/12/2025"],
    [6, "Melisandre", null, 15, "22/10/2022", "25/12/2025"],
    [7, "Clifford", "Ferrara", 44, "22/10/2022", "25/12/2025"],
    [8, "Frances", "Rossini", 36, "22/10/2022", "25/12/2025"],
    [9, "Roxie", "Harvey", 65, "22/10/2022", "25/12/2025"],
  ];

  const rows = [
    [3, "Approved", "12/01/2292", "Joe Smith"],
    [2, "Rejected", "12/01/2292", "Test name"],
    [1, "Rejected", "12/01/2292", "New name"],
  ];

  const columnsData = [
    { name: "Version" },
    { name: "Status" },
    { name: "Last Action Date" },
    { name: "Last Action By" },
  ];

  const options = {
    expandableRows: true,
    search: false,
    download: false,
    print: false,
    filter: false,
    viewColumns: false,
    renderExpandableRow: () => {
      return (
        <MUIDataTable
          data={rows}
          columns={columnsData}
          options={{
            search: false,
            download: false,
            print: false,
            filter: false,
            viewColumns: false,
          }}
        />
      );
    },
  };

  return <MUIDataTable data={data} columns={columns} options={options} />;
};

export default ExpandableRowTable;
