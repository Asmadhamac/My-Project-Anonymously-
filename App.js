const express = require("express");
const dotenv = require("dotenv");

const app = express();

const postRoutes = require("./Routes/postRoutes");
const replyRoutes = require("./Routes/replyRoutes");

dotenv.config({ path: "./.env" });
require("./server");

app.use(express.json());
app.use("/post", postRoutes);
app.use("/reply", replyRoutes);

const port = 2000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
