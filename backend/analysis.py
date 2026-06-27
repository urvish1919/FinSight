import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("../dataset/sales_data.csv")

# Total Sales
print("Total Sales:", df["Sales"].sum())

# Category Analysis
category_sales = df.groupby("Category")["Sales"].sum()

print("\nCategory Sales:")
print(category_sales)

# Region Analysis
region_sales = df.groupby("Region")["Sales"].sum()

print("\nRegion Sales:")
print(region_sales)

# Category Chart
plt.figure(figsize=(8,5))
category_sales.plot(kind="bar")

plt.title("Sales by Category")
plt.xlabel("Category")
plt.ylabel("Sales")

plt.tight_layout()
plt.savefig("../charts/category_sales.png")

# Region Chart
plt.figure(figsize=(8,5))
region_sales.plot(kind="bar")

plt.title("Sales by Region")
plt.xlabel("Region")
plt.ylabel("Sales")

plt.tight_layout()
plt.savefig("../charts/region_sales.png")

plt.show()