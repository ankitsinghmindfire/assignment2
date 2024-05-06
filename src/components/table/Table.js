import { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = (theme) => ({
  tableRoot: {
    backgroundColor: "#f0f0f0",
  },
});

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

const columnsData = [
  { name: "Version" },
  { name: "Status" },
  { name: "Last Action Date" },
  { name: "Last Action By" },
];

const ExpandableRowTable = ({ classes }) => {
  const [data, setData] = useState([]);
  const [rowsData, setRowsData] = useState([]);

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "#FF0000",
          },
        },
        ".tss-1vd39vz-MUIDataTableBodyCell-stackedCommon": {
          color: "#ff0000",
        },
      },
    });

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3000/data");
      const rowsData = await axios.get("http://localhost:3000/rows");
      setRowsData(rowsData?.data);
      setData(data?.data);
    };

    getData();
  }, []);

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
          data={rowsData}
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

  return (
    <MuiThemeProvider theme={getMuiTheme}>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
        classes={{ root: classes.tableRoot }}
      />
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(ExpandableRowTable);
