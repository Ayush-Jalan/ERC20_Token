const routes= require('next-routes')();

routes
.add('Fruit/Transfer')
.add('/Fruit/transaction')
.add('/Gold/transfer')
.add('/Gold/transaction')
.add('/Stone/transfer')
.add('/Stone/transaction')
.add('/Wood/transfer')
.add('/Wood/transaction')

module.exports = routes;
