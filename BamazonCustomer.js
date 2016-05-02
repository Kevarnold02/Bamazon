//require MySQL
var mysql = require('mysql');
//require prompt
var prompt = require('prompt');
	//customer order array
	customerOrder = [];

//connect to mySQL Bamazon database
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'Bamazon',
	multipleStatements : true
});

connection.connect();
//database query, customer view, which shows ItemID, ProductName, and Price
connection.query('SELECT * FROM Products', function(err, results) {
	if (err) throw err;
	//for loop to console.log the customer view query results
	for (var i = 0; i < results.length; i++) {
		console.log('Product ID: ', results[i].ItemID);
		console.log('Product Name: ', results[i].ProductName);
		console.log('Price: ', results[i].Price);
		console.log("----------------------------------------------------");
	}
	customerPurchase(); //customerPurchase function callback
});
//function called when program is run in node
//this function shows the ItemID and Quantity as separate prompts
function customerPurchase(){
	var productInfo = {
		properties: {
			ItemID: {description: 'Please choose the item you would like to purchase by inputting the item ID'},
			Quantity: {description: 'How many would you like to purchase at this time?'}
		},
	};
	//prompt to capture user input
	prompt.start();
		prompt.get(productInfo, function (err, res){
			var purchase = {
				ItemID: res.ItemID,
				Quantity: res.Quantity
			};
			//push users purchase to query Products table
			customerOrder.push(purchase);
			//connections used to query different MySQL views/commands
			//this query takes the order info and (if there is enough in stock to meet the order) displays the total (price*qty)
			connection.query('SELECT * FROM Products WHERE ItemID=?', customerOrder[0].ItemID, function(err, res){
				if (res[0].StockQuantity >= customerOrder[0].Quantity) {
					//calculates and displays the total cost of order
					console.log('Your total comes to: '+ (customerOrder[0].Quantity*res[0].Price));
					//calculates the remaining stock after a purchase
					stockLeft = res[0].StockQuantity - customerOrder[0].Quantity;

					//this query updates the Stock Quantity based on order qty
					connection.query('UPDATE Products SET StockQuantity ='+ stockLeft + ' WHERE ItemID ='+ customerOrder[0].ItemID, function(err, res){
						// console.log(err);
						console.log("Your order has been processed. Thank you for shopping Bamazon!");
						connection.end();
					});
				} else {
					console.log("We are currently out of stock. Please check back soon!");
					connection.end();
				}
			});
		})
}