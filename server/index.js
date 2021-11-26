// server/index.js

const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
