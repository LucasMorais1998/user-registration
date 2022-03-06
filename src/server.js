const express = require('express');
const routes = require('./routes');
require('dotenv').config();

require('./database');

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`App ${process.env.PROJECT_NAME} - Server is running on port ${port} 🚀`);
});
