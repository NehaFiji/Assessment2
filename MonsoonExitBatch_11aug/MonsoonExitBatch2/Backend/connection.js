const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://fijishibu:<fiji@1975>@cluster0.b8ey786.mongodb.net/employeeApp?retryWrites=true&w=majority&appName=Cluster0", {
    uuseNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });