import React from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  const columns = [
    {
      dataField: "id",
      text: "Ticket ID",
    },
    {
      dataField: "subject",
      text: "Subject",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "priority",
      text: "Priority",
    },
  ];

  React.useEffect(() => {
    GetFindTickets();
  }, []);

  const GetFindTickets = () => {
    const findTickets = async () => {
      try {
        const resp = await axios.get("/api");
        if (resp.data) {
          setData(resp.data);
        } else {
          setData([]);
        }

        console.log(resp.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    findTickets();
  };

  return (
    <div className="App">
      <BootstrapTable keyField="id" data={data} columns={columns} />
    </div>
  );
}

export default App;
