const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./Routes/Routes')
// const path = require('path')

// static files
// app.use(express.static(path.join(__dirname, './client/build')));

// app.get("*", function ( req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// middleware
const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://dbShilpa:Jack1234@atlascluster.fdb0nzq.mongodb.net/todoList?retryWrites=true')
mongoose.connection.once('open',()=>{
    console.log('connected to data base')})
app.use(bodyParser.json())
app.use(cors())

app.use(routes)

// listen port
app.listen(port,()=>{
    console.log('listenig to port 3001')
})


/**
 * server connection
 * creating routes
 * connecting to db
 */
