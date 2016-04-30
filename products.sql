CREATE DATABASE Bamazon;
use Bamazon;

CREATE TABLE Products (ItemID int AUTO_INCREMENT, ProductName varchar(60) NOT NULL, DepartmentName varchar(75) NOT NULL, Price int NOT NULL, StockQuantity int NOT NULL, PRIMARY KEY(ItemID));

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('36" 4K HDTV', 'Electronics', 400, 10);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('40" 4K HDTV', 'Electronics', 550, 15);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('48" 4K HDTV', 'Electronics', 680, 18);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('55" 4K HDTV', 'Electronics', 850, 8);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('70" 4K HDTV', 'Electronics', 2000, 5);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('12" MTX Thunder 7500', 'Car_Audio', 350, 7);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('12" MTX Thunder 8500', 'Car_Audio', 550, 4);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('12" MTX Thunder 9500', 'Car_Audio', 900, 2);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('HorizonTech Arctic V8', 'E-Cig', 40, 20);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Reuleaux RX200 200W with Temp Control', 'E-Cig', 65, 10);

-- CustomerDisplay
SELECT ItemID, ProductName, DepartmentName, Price FROM Products;

