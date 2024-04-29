import { useEffect, useState } from "react";
import ExpandableRowTable from "../components/table/Table";

const HomePage = ({}) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <ExpandableRowTable />
    </>
  );
};

export default HomePage;
