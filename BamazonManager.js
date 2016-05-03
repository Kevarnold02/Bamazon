//require MySQL
var mysql = require('mysql');
//require prompt
var prompt = require('prompt');

	customerOrder = [];

	// managerOptions = [];

//connect to mySQL database
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Bamazon',
  multipleStatements : true
});

// connection.connect();
// //database query, manager view
// connection.query('SELECT * FROM Products', function(err, results) {
//   if (err) throw err;
 
//   for (var i = 0; i < results.length; i++) {
//   	console.log('Product ID: ', results[i].ItemID);
//   	console.log('Product Name: ', results[i].ProductName);
//   	console.log('Price: ', results[i].Price);
//   	console.log('Department: ', results[i].DepartmentName);
//   	console.log('Current Stock Quantity: ', results[i].StockQuantity);
//   	console.log("----------------------------------------------------");
//   }
//   customerPurchase();
// });

// function customerPurchase(){
// 	var productInfo = {
// 		properties: {
// 			Manager_Options: {description: 'Press 1 if you would like to view all products for sale, Press 2 to view low inventory, Press 3 to update stock quantity, press 4 to add a new product to sell'}
// 		},
// 	};

	console.log('Press 1 if you would like to view all products for sale, Press 2 to view low inventory, Press 3 to update stock quantity, press 4 to add a new product to sell');

	prompt.start();
		var managerOptions = {
			properties:{
				option: {message: 'Please enter which option (1-4) you would like to use at this time.'}
			},
		};

		function managerSelection () {
			prompt.get(managerOptions, function(err, res){
				switch(res.option) {
					case '1':
					viewInventory();
					break;
					case '2':
					lowStockQty();
					break;
					case '3':
					addToInventory();
					break;
					case '4':
					addNewProduct();
					break;
					default:
					console.log('Please make sure you enter your option #1-#4, thank you!');
					managerSelection();
				}
			});
		}
		managerSelection()

		function viewInventory() {
			connection.connect();
			connection.query('SELECT * FROM Products', function(err, results) {
				if (err) throw err;

				 for (var i = 0; i < results.length; i++) {
				  	console.log('Product ID: ', results[i].ItemID);
				  	console.log('Product Name: ', results[i].ProductName);
				  	console.log('Price: ', results[i].Price);
				  	// console.log('Department: ', results[i].DepartmentName);
				  	console.log('Current Stock Quantity: ', results[i].StockQuantity);
				  	console.log("----------------------------------------------------");
				  }
			});
			connection.end();
		}

		// prompt.get(productInfo, function (err, res){
		// 	var purchase = {
		// 		Manager_Options: res.Manager_Options
		// 	};
		// 	// customerOrder.push(purchase);
		// 	//show
		// 	connection.query('SELECT * FROM Products WHERE ItemID=?', customerOrder[0].ItemID, function(err, res){
		// 		if (res[0].StockQuantity >= customerOrder[0].Quantity) {
		// 			console.log('Your total comes to: '+ (customerOrder[0].Quantity*res[0].Price));
		// 			stockLeft = res[0].StockQuantity - customerOrder[0].Quantity;
		// 			//update stock quantity based on item purchased
		// 			connection.query('UPDATE Products SET StockQuantity ='+ stockLeft + ' WHERE ItemID ='+ customerOrder[0].ItemID, function(err, res){
		// 				console.log(err);
		// 				console.log("Your order has been processed. Thank you for shopping Bamazon!");
		// 				connection.end();
		// 			});
		// 		} else {
		// 			console.log("We are currently out of stock. Please check back soon!");
		// 			connection.end();
		// 		}
		// 	});
		// })
// }