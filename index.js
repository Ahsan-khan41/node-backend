const http = require("http");
const { app } = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const propertyRoutes = require("./routes/property.routes");

app.use(propertyRoutes);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
