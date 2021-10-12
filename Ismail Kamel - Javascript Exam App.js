const jsemodule = require('./Ismail Kamel - JavaScript Exam Module');
const ordersEndpoint = 'api/orders'

function getOrders(){
    jsemodule.getData(ordersEndpoint)
    .then (res => {
        console.log(res);
    })
    .catch (err =>
        console.log(err.message))
}

function getTotalrev(){
    jsemodule.totalRevenue()
    .then(res => {
        console.log('The total revenue is ', total);
    }).catch(function(err){
        console.log(err.message);
        })
    }


getOrders();
getTotalrev();