const host = 'git.ucc.uwm.edu';
const http = require('http');
const ordersEndpoint = '/api/orders';

function getData(endpoint){
	return new Promise((resolve, reject) => {
        let options ={
            host: host,
            path: endpoint
        } 
        http.get(options, (res) => {

            let responseString = ''; 
        
            res.on('data', (data) => { 
                responseString += data;
            });
        
            res.on('end', () => { 
                resolve(JSON.parse(responseString)); 
            });
        }).on('error', (err) => { 
            reject(err);
            console.log(err.message);
        }) 
    })
}

function totalRevenue() {
    return new Promise((resolve, reject) =>
    getData(ordersEndpoint)
    .then( res => {
        let total = 0;
        orders.forEach(price => {
            total += price
        })  
    })
    )}

module.exports = {
getData,
totalRevenue
}