const express = require('express');
const cors = require('cors');
const errorHandler = require('./errorHandler');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.options('*', cors());
require('dotenv/config');

const calRoute = require('./calRoute');

// =======================================  Middleware  ============================================

app.use(express.json());
app.use(errorHandler)

// ----
app.use(`/api/calculate`, calRoute);

// =======================================  Creating Server  =======================================

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
