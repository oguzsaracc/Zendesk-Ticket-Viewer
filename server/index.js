// server - index.js

// Defining the consts.                 // *const: the identifier cannot be reassigned*  
const express = require("express");		// *express: a back end web framework for Node.js *
const axios = require("axios");		    // *axios:  is a library that for to create HTTP requests that are present externally*

const PORT = process.env.PORT || 3001;

// Express in this case for the create a simple web server for us runs on port 3001. (server)
const app = express();

// Exposing the GET function. Also, part of Express. We are 'get'ting the request with HTTPs verb.
app.get("/api", async (req, res) => {
  const resp = await axios.get(
    "https://zccoguzsarac.zendesk.com/api/v2/tickets",
    {
      auth: {
        username: "",
        password: "",
      },
    }
  );
  res.json(resp.data.tickets);
});

// app.listen function is using for to bind and listen the connections on the spec. host and port.
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`); // It will show us that, connection succeed.
});
