require('./models/User');
require('./models/Track');
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var authRoute= require('./routes/authRoute');
var trackRoute= require('./routes/trackRoute');
var requireAuth = require('./middlewares/requireAuth');

app.use(bodyParser.json());
app.use(authRoute);
app.use(trackRoute);




var mongoURL="mongodb://robbin:mkItqFZqsQN5pcWj@cluster0-shard-00-00.qpmln.mongodb.net:27017,cluster0-shard-00-01.qpmln.mongodb.net:27017,cluster0-shard-00-02.qpmln.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qqfv6a-shard-0&authSource=admin&w=majority&retryWrites=true&w=majority";

if (!mongoURL) {
  throw new Error(
    `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
  );
}

mongoose.connect(mongoURL,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected',()=>{
  console.log('connected to mongo server');
});

mongoose.connection.on('error',(err)=>{
  console.log('error',err);
});


app.get('/',requireAuth,(req,res)=>{
  res.send(`your email is ${req.user.email}`);
})


app.listen('3000',()=>{
  console.log('server listening in port 3000');
});
