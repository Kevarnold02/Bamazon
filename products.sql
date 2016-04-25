CREATE DATABASE Bamazon;
use Bamazon;

CREATE TABLE Products (ItemID int AUTO_INCREMENT, ProductName varchar(60) NOT NULL, DepartmentName varchar(75) NOT NULL, Price int NOT NULL, StockQuantity int NOT NULL, PRIMARY KEY(ItemID));

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('name', 'department', 'price', 'stock');
