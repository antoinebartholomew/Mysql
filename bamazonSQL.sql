-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS bamazon;
-- Create a database called programming_db --
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

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("2014 Turbo S", "Convt", 3.25, 1);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("2012 911 Turbo S", "Coupe", 1.25, 6);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("2009 911 Turbo", "Convt", 3.25, 8);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("2006 911 Turbo", "Coupe", 5.25, 3);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("2003 Turbo", "Car", 8.25, 1);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("1999 911", "Coupe", 7.25, 6);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("2002 911", "Convt", 5.25, 8);
