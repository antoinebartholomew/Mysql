CREATE DATABASE bamazon;


USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,

  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,

  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("2018 911 Turbo S", "Convt", 9.25, 3);
# Mysql
