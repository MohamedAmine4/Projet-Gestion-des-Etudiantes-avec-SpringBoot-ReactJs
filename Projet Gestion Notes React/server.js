const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000'
//   }));

// Configuring CORS
// app.use(cors({
//   origin: '*',
//   methods: 'GET,PUT,POST,DELETE',
//   allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
// }));

// ... the rest of your server code
