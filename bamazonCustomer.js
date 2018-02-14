var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    queryAllProducts();
    start();
});
// first display all of the items available for sale. Include the ids, names, and prices of products for sale.
function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function queryAllProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + "|  " + res[i].quantity);
    }
    console.log("-----------------------------------");
  });
}

function start(){
    inquirer
    .prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "ID of the product they would like to buy?",
        choices: ["POST", "BID"]
    }).then (function(answer){
        if (answer.postOrBid.toUpperCase() === "POST") {
            postAuction();
        }
        else {
            bidAuction();
        }
    })
}

function postAuction() {
    inquirer
    .prompt([
        {
            name: "product",
            type: "input",
            message: "What is the item you would like to submit?"
        },
        {
            name: "department",
            type: "input",
            message: "What type of car would you like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units would you like to buy?"
        },
        {
            name: "price",
            type: "input",
            message: "What would you like your starting price to be?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then (function(answers){
        connection.query(
            "INSERT INTO products SET ?",
            {
                  product_name: answer.product,
                department_name: answer.department,
                price: answer.price,
                quantity: answer.quantity
            },
            function (err) {
                if (err) throw err;
                console.log("Your auction was created successfully!");
                // re-prompt the user for if they want to bid or post
                start();
            }
        );
    })
}
