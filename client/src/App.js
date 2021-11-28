// import: import statement is used to import binding that are exported by another module.
// BootstrapTable: is a CSS Framework.
import React from "react"; // Importing react from React library.
import axios from "axios"; // Importing axios from Axios library.
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import BootstrapTable from "react-bootstrap-table-next"; // Importing some css features from BootstrapTable.
import paginationFactory from "react-bootstrap-table2-paginator"; // Paginator is helping us to split the tickets display in the same page.

function App() {
  const [data, setData] = useState([]); // useState() is a Hook that allows to state variables in functional components.
  const [loggedIn, setLoggedIn] = useState(false);

  const customStyle = (cell, row, rowIndex, colIndex) => {
    if (rowIndex % 2 === 0) {
      return {
        backgroundColor: "#899499",
      };
    }
    return {
      backgroundColor: "#E5E4E2",
    };
  };

  // So, in columns; we are choosing that what we are going to display to in our project. Note that, you could do various changes in this column.
  const columns = [
    {
      dataField: "id",
      text: "Ticket ID",
      style: (cell, row, rowIndex, colIndex) =>
        customStyle(cell, row, rowIndex, colIndex),
    },
    {
      dataField: "subject",
      text: "Subject",
      style: (cell, row, rowIndex, colIndex) =>
        customStyle(cell, row, rowIndex, colIndex),
    },
    {
      dataField: "created_at",
      text: "Created At",
      style: (cell, row, rowIndex, colIndex) =>
        customStyle(cell, row, rowIndex, colIndex),
    },
    {
      dataField: "status",
      text: "Status",
      style: (cell, row, rowIndex, colIndex) =>
        customStyle(cell, row, rowIndex, colIndex),
    },
  ];

  const expandRow = {
    renderer: (row) => (
      <div>
        <p>Ticket Details</p>
        <p>{row.description}</p>
      </div>
    ),
  };

  useEffect(() => {
    // It will update the GetFindTickets with our API. We will recieve the tickets from browser.
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      setLoggedIn(true);
      GetFindTickets(code);
    }
  }, []);

  const GetFindTickets = (code) => {
    // In here, async function is used to for checking that we are not breaking the execution.
    const findTickets = async () => {
      try {
        const resp = await axios.get("/api/" + code); // Before a function makes the function it will wait for axios.get("/api") and gets the data.
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
    // Setting-up the table, header and pagination.
    <div className="App text-center container-fluid">
      {!loggedIn ? (
        <>
          <img
            alt="Zendesk"
            className="mb-4"
            src="https://d1eipm3vz40hy0.cloudfront.net/images/social/twitter-zendesk.jpg"
            width="150"
          ></img>
          <h1 className="h3 mb-3 font-weight-normal">Sign in with Zendesk</h1>
          <CustomButton
            variant="primary"
            size="lg"
            href="https://zccoguzsarac.zendesk.com/oauth/authorizations/new?response_type=code&redirect_uri=http://localhost:3000/&client_id=ticketviewer&scope=tickets:read"
            label="Sign In"
          ></CustomButton>
        </>
      ) : (
        <>
          <NavBar />
          <div className="container">
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={data}
              caption={<Header label="Zendesk Ticket Viewer" />}
              columns={columns}
              pagination={paginationFactory()}
              bordered={false}
              expandRow={expandRow}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App; // A module is a self contained unit that can expose assets to other modules using export.
