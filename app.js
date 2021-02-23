const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { json } = require('body-parser');

const port = 9000;

const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended:false});
app.use(jsonParser);
app.use(urlEncodedParser);
const apiRouter = require('./api/apiRouter');

app.use('/api',apiRouter);
app.use(cors());
app.get('/',(request,response)=>{
    response.send(`<h2>Welcome to express Server of Employee Portal!</h2>`);
}); 
app.listen(port,()=>{
    console.log('server has started at'+port);
});