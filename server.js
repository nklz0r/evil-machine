const express = require('express');
const app = express();

module.exports = app;


const PORT = process.env.PORT || 4001;

//middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

//middware for parsing request bodies here:
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mount existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api', apiRouter);


if (!module.parent) { 
  
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
