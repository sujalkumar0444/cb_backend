const express=require('express');
const app=express();
const { PORT } = require('./config');
const bodyParser=require('body-parser');
const cors=require('cors');

const {databaseconnect}=require('./dbconfig');

databaseconnect();

app.use(cors({origin: '*'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit : '50mb'}));

app.get('/',(req,res)=>{
    res.send("Welcome to the server");
})





app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      error: {
        message: err.message || 'Internal Server Error'
      }
    });
  });
  
app.listen(PORT || 8800,()=>{
    console.log(`Server is running on port ${PORT}`);
});
