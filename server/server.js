
const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(cors())// cors is meant for frontend to talk to backend
app.use(express.json())

const recipeRouter = require('./routes/recipes')
app.use('/recipes', recipeRouter)

// apply middleware
// set up routes
// start server



app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  