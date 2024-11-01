const express = require("express");
const userRoutes = require("./routes/user");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/api-test", userRoutes);
app.use(errorHandler);

const PORT = 1717;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
