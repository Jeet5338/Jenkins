// const greeting:string = 'Hello';

// var num:number[] = [1, 2, 3];

import express, {Application, Request, Response, NextFunction} from 'express';
import { RequestParamHandler } from 'express-serve-static-core';

var admin = express();

admin.get('/', function (req, res) {
    console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
    res.send('Admin Homepage');
});

var secret = express();
secret.get('/', function (req, res) {
    console.log(secret.mountpath); // /secr*t
    res.send('Admin Secret');
});

admin.use('/secr*t', secret);

// import router from './router';

var router = require('./router');

const app : Application = express();
const newRouter = express.Router();

newRouter.param(function (param, option) {
    return function (req, res, next, val) {
        if (val == option) {
            next();
        }
        else {
            res.sendStatus(403);
        }
    }
});

// newRouter.param('id', 1337);

newRouter.get('/user/:id', function (req, res) {
    res.send('OK');
});


app.get('/', (req : Request, res : Response) => {
    res.send('<h1>Hellow...</h1>');
});

app.get('/ex', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    // res.send("Huii");
    /*

    */
    next()
}, function (req, res) {
    res.send('Hello from B!')
})

app.use('/dashboard', router);

app.disable('trust proxy');
var tmp = app.get('trust proxy');
console.log(tmp);

app.use(['/adm*n', '/manager'], admin);
app.use(newRouter);

app.listen(5000, () => console.log("Server started on PORT 5000."));

