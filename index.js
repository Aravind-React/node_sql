const express = require("express");
const app = express();
const employeeRoutes = require('./src/routes/employee.routes')

// Middleware to handle JSON
app.use(express.json())

app.use('/api/v1/employees', employeeRoutes);

app.listen(process.env.PORT || 2017, () => console.log("App is listening at 2017"));

