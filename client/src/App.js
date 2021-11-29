// import: import statement is used to import binding that are exported by another module.
// BootstrapTable: is a CSS Framework.
import React from "react"; // Importing react from React library.
import axios from "axios"; // Importing axios from Axios library.
import { useEffect, useState } from "react";
import "./App.css";
// Start of Components.
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import CustomTable from "./components/CustomTable";
// End of Components.
import BootstrapTable from "react-bootstrap-table-next"; // Importing some css features from BootstrapTable.
import paginationFactory from "react-bootstrap-table2-paginator"; // Paginator is helping us to split the tickets display in the same page.

function App() {
  const [data, setData] = useState([]); // useState() is a Hook that allows to state variables in functional components.
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // It will update the GetFindTickets with our API. We will recieve the tickets from browser.
    const code = new URLSearchParams(window.location.search).get("code"); // The search property contains the query string portion of the current url.

    if (code) {
      setLoggedIn(true); // We will login if succeed.
      GetFindTickets(code); // And find the tickets from the URL.
    }
  }, []);

  //
  const GetFindTickets = (code) => {
    // In here, async function is used to for checking that we are not breaking the execution.
    const findTickets = async () => {
      try {
        const resp = await axios.get("/api/" + code); // Before a function makes the function it will wait for axios.get("/api") and gets the data.
        if (resp.data) {
          // If we can get the data, we will set it.
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

  // expandRow one of the feature that asked. Basically, it is allows us to display individual ticket information by clicking any ticket.
  // Once the user clicked again, it will closed it itself. (Dropdown style)
  const expandRow = {
    renderer: (row) => (
      <div>
        <h4>
          <b>Ticket Details</b>
        </h4>
        <p>{row.description}</p>
      </div>
    ),
  };

  // Options for the design process of pagination. Some texture adding.
  const options = {
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
  };

  return (
    // Setting-up the table, header and pagination. For Sign-in page, there are button and image.
    <div className="App text-center container-fluid">
      {!loggedIn ? (
        <>
          <img
            alt="Zendesk"
            className="mb-4 mt-5"
            src="https://d1eipm3vz40hy0.cloudfront.net/images/social/twitter-zendesk.jpg"
            width="230"
          ></img>
          <h1 data-testid="headerTest" className="h2 mb-3 font-weight-normal">
            Welcome! Sign in with Zendesk
          </h1>
          <CustomButton
            variant="success"
            size="lg"
            href="https://zccoguzsarac.zendesk.com/oauth/authorizations/new?response_type=code&redirect_uri=http://localhost:3000/&client_id=ticketviewer&scope=tickets:read"
            label="Sign in"
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
              columns={CustomTable}
              pagination={paginationFactory(options)}
              bordered={true}
              expandRow={expandRow}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App; // A module is a self contained unit that can expose assets to other modules using export.
