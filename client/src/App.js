// import: import statement is used to import binding that are exported by another module.
// BootstrapTable: is a CSS Framework.
import React from "react"; // Importing react from React Library.
import axios from "axios"; // Importing axios from Axios library.
import BootstrapTable from "react-bootstrap-table-next"; // Importing some css features from BootstrapTable.
import "./App.css";

// App function. Basically, we are get
function App() {
  const [data, setData] = React.useState([]); // useState() is a Hook that allows to state variables in functional components.
  // So, in columns; we are choosing that what we are going to display to in our project. Note that, you could do various changes in this column.
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
    // It will update the GetFindTickets with our API. We will recieve the tickets from browser.
    GetFindTickets();
  }, []);

  const GetFindTickets = () => {
    // In here, async function is used to for checking that we are not breaking the execution.
    const findTickets = async () => {
      try {
        const resp = await axios.get("/api"); // Before a function makes the function it will wait for axios.get("/api") and gets the data.
        if (resp.data) {
          setData(resp.data);
        } else {
          setData([]);
        }

        console.log(resp.data);
      } catch (err) {
        // If we catch an error, We will console log. We could check the bug and fix it.
        // Handle Error Here
        console.error(err);
      }
    };
    findTickets();
  };

  return (
    // Setting-up the table.
    <div className="App">
      <BootstrapTable keyField="id" data={data} columns={columns} />
    </div>
  );
}

export default App; // A module is a self contained unit that can expose assets to other modules using export.
