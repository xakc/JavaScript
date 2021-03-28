const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('Hello WebSites world!')
});

app.get('/apply', function(req,res){

    res.send("Hello here, tell me about it!")

    }
)

app.listen(3000,()=>console.log('Listening ...... ;) ..... :) ..... :|'));