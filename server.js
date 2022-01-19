const express = require('express');
const log = require('./logger');

const app = express();

app.get('/',(req,res) => {
     res.send("Happy logger");
     
     log.debug('First message logged with pino logger');

     log.info('Informational message');

     log.warn('A warning message');
 
     log.error('Something went wrong');

     const customObject = {
      username: 'user1'
     };
     log.debug({customObject: customObject}, 'Debug message with custom objects');
});

app.listen(2000, () => console.log("App is  listening"));