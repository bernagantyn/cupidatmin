   const express = require('express');
   const mongoose = require('mongoose');

   const app = express();
   
   // Use the environment variable for the port
   const port = process.env.PORT || 3000;
   
   // Connect to the database using the environment variable
   mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('Connected to the database'))
     .catch(err => console.error('Could not connect to the database', err));
   
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   