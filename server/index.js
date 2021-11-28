// Defining the consts.
// *const: the identifier cannot be reassigned*
const express = require("express"); // *express: a back end web framework for Node.js *
const axios = require("axios"); // *axios:  is a library that for to create HTTP requests that are present externally*
const PORT = process.env.PORT || 3001; // Port 3000 was used by client. So, for the server it will listen port 3001.

// Express in this case for the create a simple web server for us runs on port 3001. (server)
const app = express();

// OAuth2 grant information defining.
const ZENDESK_URL = "https://zccoguzsarac.zendesk.com";
const CLIENT_ID = "ticketviewer";
const CLIENT_SECRET =
  "ec8a608009cde1d82431f36bd1b56f03fc39141708bd1623dbca892902da02b6";
const GRANT_TYPE = "authorization_code";
const REDIRECT_URI = "http://localhost:3000/";
const SCOPE = "tickets:read";

// Consuming requests from frontend.
app.get("/api/:code", async (req, res) => {
  let grant_info = {
    grant_type: GRANT_TYPE,
    code: req.params.code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    scope: SCOPE,
  };

  // Getting access token from zendesk
  const findAccesToken = await axios.post(
    `${ZENDESK_URL}/oauth/tokens`,
    grant_info
  );

  // Exposing the GET function. Also, part of Express. We are 'get'ting the request with HTTPs verb.
  const resp = await axios.get(`${ZENDESK_URL}/api/v2/tickets`, {
    headers: {
      Authorization: "Bearer " + findAccesToken.data.access_token,
    },
  });

  res.json(resp.data.tickets);
});

// app.listen function is using for to bind and listen the connections on the spec. host and port.
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`); // It will show us that, connection succeed.
});
