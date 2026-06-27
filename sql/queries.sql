-- Total Sales
SELECT SUM(Sales)
FROM sales_data;

-- Sales by Category
SELECT Category, SUM(Sales)
FROM sales_data
GROUP BY Category;

-- Sales by Region
SELECT Region, SUM(Sales)
FROM sales_data
GROUP BY Region;

-- Average Sales
SELECT AVG(Sales)
FROM sales_data;

-- Highest Sale
SELECT MAX(Sales)
FROM sales_data;