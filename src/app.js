const express = require('express');
const cors = require('cors');

//app
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const logger = require('../src/providers/log-provider');
// handlers
app.use(function(err, req, res, next) {
    logger.error(`ERROR ${req.method} ${req.url}: ${err}`);
    
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
});

//routes
const authentication_handler = require('./services/auth-service')
const index = require('./routes/index');
const revendedorRoutes = require('./routes/dealer-routes')
const autenticacaoRoutes = require('./routes/auth-routes')
const orderRoutes = require('./routes/order-routes')

app.use('/dealer', revendedorRoutes);
app.use('/', index)
app.use('/auth',autenticacaoRoutes)
app.use('/order', authentication_handler.isAuthenticated, orderRoutes)


module.exports = app;
