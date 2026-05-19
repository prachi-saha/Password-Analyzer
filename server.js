const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const passwordRoutes = require("./routes/password");
app.use("/api", passwordRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});