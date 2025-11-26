const express = require('express');
const connectDatabase = require('./config/db');
const apiRoute = require('./routes/api');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/api/v1', apiRoute);

// mount routes
app.use('/api/v1', apiRoute);

async function startServer() {
    try {
        await connectDatabase();
        console.log('DB connected');
    } catch (err) {
        console.warn('DB connection failed — continuing without DB. Endpoints that rely on DB will return errors.');
        console.warn(err?.message || err);
    }

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();