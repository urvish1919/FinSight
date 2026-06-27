import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Read dataset
df = pd.read_csv("../dataset/sales_data.csv")

# Month numbers
df["Month"] = np.arange(1, len(df) + 1)

X = df[["Month"]]
y = df["Sales"]

# Train model
model = LinearRegression()
model.fit(X, y)

# Predict next month
next_month = pd.DataFrame(
    {"Month": [len(df) + 1]}
)

prediction = model.predict(next_month)

print("Predicted Next Month Sales:")
print(round(prediction[0], 2))

# Graph
plt.figure(figsize=(8,5))

plt.scatter(df["Month"], y)

plt.plot(
    df["Month"],
    model.predict(X)
)

plt.title("Sales Forecast")
plt.xlabel("Month")
plt.ylabel("Sales")

plt.savefig("../charts/forecast.png")

print("Forecast graph saved.")