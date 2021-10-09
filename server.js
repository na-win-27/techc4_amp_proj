const express = require('express')
const db = require('./database/connection')
const migrations = require('./models/migrations')
const authRoutes= require('./routes/auth')
const isLoggedIn = require('./middlewares/auth')

const app = express()

migrations()
  .then(() => { console.log('Migrations made') })
  .catch(err => {
    console.error(err)
  })

db.authenticate()
  .then(() => {
    console.log('Connected To Database')
  })
  .catch(err => {
    console.log('An error occurred' + err)
  })

  app.use(express.json());


  app.use('/auth',authRoutes);
  app.use('/',isLoggedIn,(req, res, next)=>{
    res.send("ver")
  });
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})
