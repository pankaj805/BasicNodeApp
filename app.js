import express from 'express';
import bodyParser from 'body-parser';
import {MongoHelper} from 'pkmongo'; 

import user from './routes/user';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header('Access-Control-Allow-Headers', 'Content-Type');
       next();
});

MongoHelper.initialize('mongodb://localhost:27017/test');

app.get('/',(req,res,next)=>{
    res.data = {
        'text':'Hello PK!'
    };
    next();
})

app.use('/user',user);

app.use( (req, res, next) => {
        if (!res.data) {
            res.status(404).send({
                status:false,
                response:'404 Not Found!'
            });
            return;
        }
        res.status(200).send({ 
                status: true, 
                response: res.data 
        });
    });


module.exports = app;