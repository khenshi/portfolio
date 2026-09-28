    # AI Engineering Month 1 --- Review Notes

> **Scope:** Python Fluency → NumPy/Pandas/Jupyter → Essential Machine
> Learning → scikit-learn → FastAPI Model Serving → PyTorch Tensors,
> Dataset/DataLoader, and Neural Networks

Use this as a quick review sheet. Focus on understanding the **purpose**
of each concept rather than memorizing every function.

------------------------------------------------------------------------

# 1. Python Core

## 1.1 Syntax & Data Structures

Python uses indentation instead of `{}` for blocks.

``` python
age = 20

if age >= 18:
    print("Adult")
```

### Main data structures

``` python
# List — ordered, mutable
grades = [90, 85, 95]

# Tuple — ordered, usually treated as immutable
coordinate = (10, 20)

# Dictionary — key/value pairs
student = {
    "name": "John",
    "grade": 90
}

# Set — unique values
tags = {"python", "ai", "ml"}
```

**Real-world uses** - `list`: predictions, records, features - `tuple`:
fixed groups such as coordinates/shapes - `dict`: JSON/API data and
configuration - `set`: removing duplicates / membership checks

**Important:** Strings need quotes.

``` python
name = "John"
```

------------------------------------------------------------------------

## 1.2 Functions

``` python
def calculate_average(grades: list[float]) -> float:
    return sum(grades) / len(grades)
```

Default parameters:

``` python
def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}"
```

### Why functions matter

Functions make code: - reusable - easier to test - easier to maintain -
easier to separate into modules

**AI use:** preprocessing, loading models, training, evaluation,
prediction.

------------------------------------------------------------------------

## 1.3 Comprehensions

Compact way to transform/filter collections.

``` python
scores = [60, 80, 90, 50]

passing = [score for score in scores if score >= 75]
```

Transform:

``` python
adjusted = [score + 5 for score in scores]
```

Pattern:

``` python
[result for item in items if condition]
```

**Important:** Prefer a normal loop when the comprehension becomes hard
to read.

------------------------------------------------------------------------

## 1.4 Modules & Packages

A **module** is usually one `.py` file.

``` text
scores.py
```

A **package** is a directory containing related modules.

``` text
utils/
├── scores.py
└── validation.py
```

Import:

``` python
from utils.scores import average
```

**Real-world use:** separate API routes, model code, schemas,
preprocessing, utilities, etc.

------------------------------------------------------------------------

## 1.5 Classes

``` python
class MLModel:
    def __init__(self, name: str, accuracy: float):
        self.name = name
        self.accuracy = accuracy

    def is_good(self) -> bool:
        return self.accuracy >= 0.80
```

Create an instance:

``` python
model = MLModel("Classifier", 0.90)
```

### JS/TS comparison

``` text
Python self ≈ JavaScript this
Python __init__ ≈ constructor
```

Inheritance:

``` python
class Child(Parent):
    def __init__(self):
        super().__init__()
```

------------------------------------------------------------------------

## 1.6 Dataclasses

Useful for classes that mostly store structured data.

``` python
from dataclasses import dataclass

@dataclass
class Experiment:
    name: str
    accuracy: float
```

Python automatically provides useful methods such as initialization.

**Use case:** configuration, experiment metadata, structured application
data.

------------------------------------------------------------------------

## 1.7 Exceptions

Handle expected failures:

``` python
try:
    value = int("123")
except ValueError:
    print("Invalid number")
```

Raise your own:

``` python
if age < 0:
    raise ValueError("Age cannot be negative")
```

Common exceptions:

``` text
ValueError
TypeError
KeyError
FileNotFoundError
```

**Avoid:**

``` python
except:
    pass
```

It hides bugs.

------------------------------------------------------------------------

## 1.8 Type Hints

``` python
def predict(text: str) -> float:
    return 0.85
```

Collections:

``` python
def average(values: list[float]) -> float:
    ...
```

Optional value:

``` python
name: str | None = None
```

**Important:** Python type hints normally do **not** enforce types at
runtime. They improve readability, IDE support, static checking, and
framework integration.

------------------------------------------------------------------------

## 1.9 Virtual Environments

A virtual environment isolates project dependencies.

Create:

``` bash
python -m venv .venv
```

Activate on macOS/Linux:

``` bash
source .venv/bin/activate
```

Install packages:

``` bash
python -m pip install numpy pandas scikit-learn
```

Save dependencies:

``` bash
python -m pip freeze > requirements.txt
```

`.gitignore`:

``` text
.venv/
__pycache__/
```

**Important:** Activating a venv does not install dependencies. It only
switches which Python environment you are using.

------------------------------------------------------------------------

## 1.10 Files & JSON

Read file:

``` python
with open("data.txt", "r") as file:
    content = file.read()
```

JSON:

``` python
import json

with open("config.json", "r") as file:
    data = json.load(file)
```

Write JSON:

``` python
with open("result.json", "w") as file:
    json.dump(data, file)
```

### Remember

``` text
json.load()  → file → Python
json.loads() → string → Python
json.dump()  → Python → file
json.dumps() → Python → string
```

**AI use:** configuration, experiment metadata, prediction results.

------------------------------------------------------------------------

## 1.11 Async Python

``` python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)
    return "Done"

asyncio.run(fetch_data())
```

Run independent async operations together:

``` python
results = await asyncio.gather(
    fetch_a(),
    fetch_b()
)
```

**Best for:** I/O-bound work such as APIs, databases, network calls, and
LLM requests.

**Not automatically faster for:** CPU-heavy model training.

------------------------------------------------------------------------

# 2. NumPy

NumPy provides efficient multidimensional arrays.

``` python
import numpy as np

x = np.array([1, 2, 3])
```

## Important properties

``` python
x.shape
x.ndim
x.size
x.dtype
```

Matrix:

``` python
X = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
```

Shape:

``` text
(2, 3)

2 rows
3 columns
```

### Vectorized operations

``` python
x * 2
x + 5
x.mean()
x.sum()
```

Prefer vectorized operations over manually looping through every value
when possible.

### ML convention

``` text
X.shape = (samples, features)
```

Example:

``` text
(1000, 10)

1000 samples
10 features each
```

------------------------------------------------------------------------

# 3. Pandas

Pandas is useful for working with tabular data.

``` python
import pandas as pd

df = pd.read_csv("customers.csv")
```

## Inspect data

``` python
df.head()
df.tail()
df.shape
df.columns
df.dtypes
df.info()
df.describe()
```

Missing values:

``` python
df.isna().sum()
```

Select column:

``` python
df["age"]
```

Multiple columns:

``` python
df[["age", "income"]]
```

Filter:

``` python
df[df["age"] >= 18]
```

### `loc` vs `iloc`

``` python
df.loc[...]   # label-based
df.iloc[...]  # position-based
```

### DataFrame vs Series

``` text
DataFrame → table / multiple columns
Series    → usually one column
```

### ML convention

``` python
X = df.drop(columns=["target"])
y = df["target"]
```

``` text
X = input features
y = target/answer
```

------------------------------------------------------------------------

# 4. Jupyter Notebooks

Notebook files:

``` text
.ipynb
```

They contain: - code cells - Markdown cells - outputs

Good for: - exploration - visualization - experiments - learning - EDA

Use normal `.py` modules for reusable/production application code.

**Important:** Notebook cells share state. Running cells out of order
can create confusing results. Restart + Run All is a useful sanity
check.

------------------------------------------------------------------------

# 5. Machine Learning Fundamentals

## 5.1 Features and Target

Example:

``` text
hours_studied | attendance | passed
-----------------------------------
5             | 80         | 1
2             | 50         | 0
```

``` text
hours_studied + attendance = features (X)
passed                     = target (y)
```

------------------------------------------------------------------------

## 5.2 Classification vs Regression

### Classification

Predict a category.

Examples: - scam / not scam - churn / stay - fraud / legitimate - cat /
dog

### Regression

Predict a continuous quantity.

Examples: - house price - revenue - temperature - delivery time

**Important:** A target being numeric does not automatically mean
regression.

``` text
0 = legitimate
1 = scam
```

is still classification.

------------------------------------------------------------------------

# 6. Training a scikit-learn Model

Example:

``` python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)

predictions = model.predict(X_test)
```

### Meaning

``` text
fit()
→ learn patterns/parameters from training data

predict()
→ use learned patterns on new data
```

------------------------------------------------------------------------

# 7. Train / Validation / Test

Typical idea:

``` text
Training set
→ model learns

Validation set
→ tune/select models and hyperparameters

Test set
→ final unbiased evaluation
```

Example:

``` text
70% train
15% validation
15% test
```

Not a universal rule---just a common split.

## Generalization

A good model should perform well on **unseen data**, not merely memorize
training examples.

------------------------------------------------------------------------

# 8. Data Leakage

Leakage occurs when information the model should not have during
training improperly influences training/preprocessing.

Bad idea:

``` text
Entire dataset
     ↓
fit scaler
     ↓
split train/test
```

Better:

``` text
split
 ↓
fit preprocessing on training data
 ↓
apply learned preprocessing to validation/test
```

Pipelines help prevent this.

------------------------------------------------------------------------

# 9. Overfitting vs Underfitting

## Underfitting

``` text
Training performance: poor
Validation performance: poor
```

Model hasn't learned enough useful structure.

## Overfitting

``` text
Training performance: excellent
Validation performance: much worse
```

Model learned training-specific patterns/noise and generalizes poorly.

## Good fit

Training and validation performance are both reasonably strong and
close.

Ways to reduce overfitting can include: - more useful training data -
simpler model - regularization - feature selection - cross-validation

------------------------------------------------------------------------

# 10. Classification Metrics

## Confusion Matrix

``` text
              Predicted
             +         -
Actual +     TP        FN
Actual -     FP        TN
```

### Precision

Question:

> When the model predicts positive, how often is it correct?

Useful when false positives are costly.

Example: automatically blocking legitimate transactions.

### Recall

Question:

> Of all actual positives, how many did we detect?

Useful when missing positives is costly.

Example: detecting fraud or serious safety cases.

### F1 Score

Balances precision and recall.

### Accuracy

``` text
correct predictions / all predictions
```

Accuracy can be misleading for highly imbalanced datasets.

Example:

``` text
99 legitimate
1 scam
```

A model predicting everything as legitimate gets 99% accuracy while
detecting zero scams.

------------------------------------------------------------------------

# 11. Preprocessing

Real datasets often need preprocessing before training.

## Missing values

``` python
SimpleImputer(strategy="median")
```

## Categorical data

``` python
OneHotEncoder(handle_unknown="ignore")
```

Example:

``` text
Basic
Standard
Premium
```

becomes numerical encoded features.

## Scaling

``` python
StandardScaler()
```

Useful for algorithms sensitive to feature scale, including: - Logistic
Regression - KNN - SVM - neural networks

Tree models usually need scaling less.

------------------------------------------------------------------------

# 12. Pipelines

A pipeline chains preprocessing and modeling.

``` python
Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", LogisticRegression())
])
```

Conceptually:

``` text
Raw data
   ↓
Missing-value handling
   ↓
Encoding
   ↓
Scaling
   ↓
Model
```

Benefits: - consistent preprocessing - easier deployment - less leakage
risk - easier cross-validation

------------------------------------------------------------------------

# 13. ColumnTransformer

Different columns often require different preprocessing.

``` python
preprocessor = ColumnTransformer([
    ("numeric", numeric_pipeline, numeric_features),
    ("categorical", categorical_pipeline, categorical_features)
])
```

Example:

``` text
age              → numeric processing
monthly_spend    → numeric processing
plan             → categorical processing
```

------------------------------------------------------------------------

# 14. Cross-Validation

Instead of evaluating against only one validation split,
cross-validation repeatedly trains/evaluates across different folds.

For 5-fold CV:

``` text
Fold 1 → validation
Folds 2–5 → training

Fold 2 → validation
others → training

...
```

Useful for more robust model comparison, especially with limited data.

``` python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5)
```

------------------------------------------------------------------------

# 15. Parameters vs Hyperparameters

## Parameters

Learned by the model.

Examples: - regression coefficients - neural-network weights -
neural-network biases

## Hyperparameters

Chosen/configured by the developer.

Examples:

``` text
learning rate
batch size
number of epochs
tree max_depth
regularization strength
```

Search tools:

``` python
GridSearchCV(...)
RandomizedSearchCV(...)
```

For pipeline parameters:

``` python
"model__C"
```

------------------------------------------------------------------------

# 16. Churn Predictor Project

Workflow we built:

``` text
customers.csv
      ↓
Pandas / EDA
      ↓
Features X + Target y
      ↓
Train/Test Split
      ↓
Preprocessing Pipeline
      ↓
Logistic Regression
      ↓
Evaluation
      ↓
Save Model
      ↓
FastAPI
      ↓
Prediction API
```

## Saving a model

``` python
import joblib

joblib.dump(model, "models/churn_model.pkl")
```

Loading:

``` python
model = joblib.load("models/churn_model.pkl")
```

### Training vs inference

``` text
train.py
→ train model
→ save model

api.py / predict.py
→ load saved model
→ make predictions
```

**Important:** Do not retrain the model for every API request.

------------------------------------------------------------------------

# 17. FastAPI for ML Inference

Basic API:

``` python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "API running"}
```

Prediction route:

``` python
@app.post("/predict")
def predict(customer: CustomerInput):
    ...
```

### Pydantic request schema

``` python
from pydantic import BaseModel

class CustomerInput(BaseModel):
    age: int
    monthly_spend: float
    months_subscribed: int
    support_tickets: int
    plan: str
```

This is conceptually similar to a DTO in NestJS.

### Validation

``` python
from pydantic import Field

age: int = Field(ge=18, le=100)
monthly_spend: float = Field(ge=0)
```

Restrict values:

``` python
from typing import Literal

plan: Literal["Basic", "Standard", "Premium"]
```

### Response model

``` python
class PredictionResponse(BaseModel):
    prediction: Literal["stay", "churn"]
    churn_probability: float
```

Route:

``` python
@app.post("/predict", response_model=PredictionResponse)
```

### Health endpoint

``` python
@app.get("/health")
def health():
    return {"status": "ok"}
```

Useful for deployment/service monitoring.

### Safe model path

``` python
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "models" / "churn_model.pkl"
```

Avoid importing training code just to get paths.

### Important Python architecture note

Top-level code runs when a module is imported.

Use:

``` python
def train_model():
    ...

if __name__ == "__main__":
    train_model()
```

to prevent training from accidentally executing when another module
imports `train.py`.

------------------------------------------------------------------------

# 18. PyTorch --- Big Picture

PyTorch lets us build and train neural networks.

Core flow:

``` text
Data
 ↓
Tensor
 ↓
Dataset
 ↓
DataLoader
 ↓
Neural Network
 ↓
Prediction
 ↓
Loss
 ↓
Backpropagation
 ↓
Optimizer
 ↓
Updated parameters
```

We have currently covered through **Neural Network + basic ReLU**.

------------------------------------------------------------------------

# 19. PyTorch Tensors

A tensor is similar to a NumPy array but is designed for deep learning,
GPU/device computation, and automatic differentiation.

``` python
import torch

x = torch.tensor([1, 2, 3])
```

## Dimensions

Scalar:

``` python
torch.tensor(5)
```

``` text
0D
```

Vector:

``` python
torch.tensor([1, 2, 3])
```

``` text
1D
```

Matrix:

``` python
torch.tensor([
    [1, 2],
    [3, 4]
])
```

``` text
2D
```

------------------------------------------------------------------------

# 20. Tensor Shape

``` python
X = torch.tensor([
    [1, 2, 3],
    [4, 5, 6]
])

print(X.shape)
```

``` text
torch.Size([2, 3])
```

For ML:

``` text
(batch_size / samples, features)
```

Example:

``` text
[32, 10]

32 samples
10 features each
```

**Important:** When PyTorch gives a matrix multiplication error, check
tensor shapes first.

------------------------------------------------------------------------

# 21. Tensor `dtype`

Neural networks commonly use floating-point tensors:

``` python
x = torch.tensor(
    [1, 2, 3],
    dtype=torch.float32
)
```

Common:

``` text
torch.float32
```

Labels may require different types depending on the loss function being
used.

------------------------------------------------------------------------

# 22. Creating Tensors

``` python
torch.tensor([1, 2, 3])

torch.zeros(3, 4)

torch.ones(2, 3)

torch.rand(2, 3)
```

Random values are important because neural-network parameters are
typically initialized automatically before training.

------------------------------------------------------------------------

# 23. Tensor Indexing

``` python
x = torch.tensor([
    [10, 20, 30],
    [40, 50, 60]
])
```

``` python
x[1, 1]   # 50
x[0]      # first row
x[:, 0]   # first column
```

Very similar to NumPy.

------------------------------------------------------------------------

# 24. Tensor Operations

``` python
x * 2
x + 5

x.sum()
x.mean()
x.min()
x.max()
```

Operations are generally vectorized.

------------------------------------------------------------------------

# 25. Element-wise vs Matrix Multiplication

``` python
a * b
```

performs element-wise multiplication.

``` python
a @ b
```

or:

``` python
torch.matmul(a, b)
```

performs matrix multiplication/dot-product behavior depending on
dimensions.

Neural networks heavily rely on matrix multiplication.

------------------------------------------------------------------------

# 26. Reshaping

``` python
x = torch.tensor([1, 2, 3, 4, 5, 6])

x = x.reshape(2, 3)
```

Becomes:

``` text
[[1, 2, 3],
 [4, 5, 6]]
```

Same values, new arrangement.

------------------------------------------------------------------------

# 27. NumPy ↔ PyTorch

NumPy to PyTorch:

``` python
tensor = torch.from_numpy(array)
```

PyTorch to NumPy:

``` python
array = tensor.numpy()
```

Common workflow:

``` text
Pandas
 ↓
NumPy / preprocessing
 ↓
PyTorch tensors
```

------------------------------------------------------------------------

# 28. CPU / GPU / MPS

Choose device:

``` python
device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)
```

Move tensor:

``` python
x = x.to(device)
```

On supported Apple hardware:

``` python
if torch.backends.mps.is_available():
    device = torch.device("mps")
else:
    device = torch.device("cpu")
```

**Important:** Model and input tensors generally need to be on
compatible/same devices.

For small learning projects, CPU is fine.

------------------------------------------------------------------------

# 29. Dataset

A PyTorch `Dataset` represents your samples and labels.

``` python
from torch.utils.data import TensorDataset

dataset = TensorDataset(X, y)
```

Access sample:

``` python
X_sample, y_sample = dataset[0]
```

Think:

``` text
Dataset = WHAT data do I have?
```

------------------------------------------------------------------------

# 30. Custom Dataset

``` python
from torch.utils.data import Dataset

class StudentDataset(Dataset):

    def __init__(self, X, y):
        self.X = X
        self.y = y

    def __len__(self):
        return len(self.X)

    def __getitem__(self, index):
        return self.X[index], self.y[index]
```

Important methods:

``` text
__init__    → store/setup data
__len__     → number of samples
__getitem__ → retrieve one sample
```

### Real-world use

A scam-text Dataset might:

``` text
Read text
 ↓
Tokenize/vectorize
 ↓
Create tensor
 ↓
Return (input, label)
```

------------------------------------------------------------------------

# 31. DataLoader

The DataLoader feeds Dataset samples in batches.

``` python
from torch.utils.data import DataLoader

loader = DataLoader(
    dataset,
    batch_size=32,
    shuffle=True
)
```

Loop:

``` python
for X_batch, y_batch in loader:
    ...
```

Think:

``` text
Dataset    = WHAT is the data?
DataLoader = HOW is it fed to the model?
```

------------------------------------------------------------------------

# 32. Batch Size

Instead of processing the entire dataset at once:

``` text
10,000 samples
```

we might process:

``` text
32
↓
32
↓
32
↓
...
```

with:

``` python
batch_size=32
```

This is **mini-batch training**.

Benefits include manageable memory use and frequent parameter updates.

Common batch sizes:

``` text
16
32
64
128
```

There is no universally best batch size.

------------------------------------------------------------------------

# 33. Shuffling

Training:

``` python
DataLoader(
    train_dataset,
    batch_size=32,
    shuffle=True
)
```

Evaluation:

``` python
DataLoader(
    test_dataset,
    batch_size=32,
    shuffle=False
)
```

Shuffling prevents the model from repeatedly receiving training samples
in a potentially problematic fixed ordering.

------------------------------------------------------------------------

# 34. Epoch

**One epoch = one full pass through the training dataset.**

Example:

``` text
1,000 samples
batch size = 100
```

Approximately:

``` text
10 batches per epoch
```

If:

``` text
epochs = 5
```

then approximately:

``` text
50 batch iterations
```

------------------------------------------------------------------------

# 35. Neural Networks --- One Neuron

Simplified neuron:

``` text
inputs
  ↓
multiply by weights
  ↓
sum
  ↓
add bias
  ↓
output
```

Conceptually:

``` text
output = x₁w₁ + x₂w₂ + b
```

Where:

``` text
x = inputs
w = weights
b = bias
```

------------------------------------------------------------------------

# 36. Weights

Weights are learnable parameters controlling how inputs influence
outputs.

Initially, PyTorch initializes them.

During training:

``` text
prediction
 ↓
error/loss
 ↓
backpropagation
 ↓
adjust weights
 ↓
new prediction
```

**Training is largely the process of finding better parameter values.**

------------------------------------------------------------------------

# 37. Bias

Bias is another learnable parameter.

Without bias:

``` text
x₁w₁ + x₂w₂
```

With bias:

``` text
x₁w₁ + x₂w₂ + b
```

It gives the layer additional flexibility rather than forcing outputs
solely through weighted input combinations.

------------------------------------------------------------------------

# 38. Layers --- `nn.Linear`

``` python
from torch import nn

layer = nn.Linear(
    in_features=2,
    out_features=4
)
```

Meaning:

``` text
2 input features
      ↓
4 neurons
      ↓
4 outputs
```

For:

``` python
nn.Linear(2, 4)
```

parameter shapes:

``` text
weights → (4, 2)
bias    → (4,)
```

Each of the 4 neurons receives the 2 input features.

------------------------------------------------------------------------

# 39. `nn.Module`

Base class for PyTorch neural-network modules.

``` python
class NeuralNetwork(nn.Module):

    def __init__(self):
        super().__init__()
```

It gives PyTorch the machinery needed to track parameters, move models
between devices, save/load state, and more.

------------------------------------------------------------------------

# 40. `forward()`

Defines how input travels through the network.

``` python
def forward(self, x):
    x = self.layer1(x)
    x = self.layer2(x)
    return x
```

Normally call:

``` python
output = model(x)
```

rather than directly calling:

``` python
model.forward(x)
```

------------------------------------------------------------------------

# 41. First Neural Network

``` python
class NeuralNetwork(nn.Module):

    def __init__(self):
        super().__init__()

        self.layer1 = nn.Linear(2, 4)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(4, 1)

    def forward(self, x):
        x = self.layer1(x)
        x = self.relu(x)
        x = self.layer2(x)

        return x
```

Architecture:

``` text
2 input features
       ↓
Linear(2 → 4)
       ↓
ReLU
       ↓
Linear(4 → 1)
       ↓
1 output
```

------------------------------------------------------------------------

# 42. Activation Functions --- Current Introduction

A network containing only stacked linear transformations still behaves
like an overall linear transformation.

Activation functions introduce **nonlinearity**, allowing neural
networks to model more complex relationships.

## ReLU

``` text
ReLU(x) = max(0, x)
```

Examples:

``` text
-5 → 0
-1 → 0
 0 → 0
 3 → 3
 8 → 8
```

PyTorch:

``` python
relu = nn.ReLU()
```

We will study activation functions more deeply in the next lesson.

------------------------------------------------------------------------

# 43. `nn.Sequential`

A concise way to chain straightforward layers:

``` python
self.network = nn.Sequential(
    nn.Linear(2, 4),
    nn.ReLU(),
    nn.Linear(4, 1)
)
```

Then:

``` python
def forward(self, x):
    return self.network(x)
```

Useful when the model follows a simple sequential flow.

------------------------------------------------------------------------

# 44. Learnable Parameters

For:

``` text
Linear(2 → 4)
ReLU
Linear(4 → 1)
```

First layer:

``` text
4 × 2 weights = 8
4 biases      = 4
total         = 12
```

Second layer:

``` text
1 × 4 weights = 4
1 bias        = 1
total         = 5
```

Total:

``` text
17 learnable parameters
```

Inspect:

``` python
for name, parameter in model.named_parameters():
    print(name, parameter.shape)
```

ReLU has no weights or biases here.

------------------------------------------------------------------------

# 45. What Training Really Means

The architecture:

``` text
2 → 4 → 1
```

usually stays fixed during ordinary training.

The learnable parameters change.

``` text
Random/initial parameters
       ↓
Forward pass
       ↓
Prediction
       ↓
Compare with correct answer
       ↓
Loss
       ↓
Backpropagation
       ↓
Optimizer updates parameters
       ↓
Repeat
```

This is the central neural-network training process.

------------------------------------------------------------------------

# 46. Logistic Regression → Neural Network Connection

Classical logistic regression:

``` text
Features
   ↓
weighted combination
   ↓
classification
```

Neural network:

``` text
Features
   ↓
Linear layer
   ↓
Activation
   ↓
Linear layer
   ↓
...
   ↓
classification
```

The neural network can learn more complex nonlinear relationships.

**Important:** A more complex model is not automatically better. For
some datasets, a simple classical model can outperform a neural network.

------------------------------------------------------------------------

# 47. Month 1 Final Project Direction

Goal:

``` text
Truth Layer / Scam Detector
```

Baseline:

``` text
Text
 ↓
TF-IDF
 ↓
Logistic Regression
 ↓
Scam / Not Scam
```

Then PyTorch version:

``` text
Text
 ↓
Text representation
 ↓
Dataset
 ↓
DataLoader
 ↓
Neural Network
 ↓
Prediction
```

Compare:

``` text
TF-IDF + Logistic Regression
            VS
PyTorch Neural Network
```

Possible comparison metrics: - accuracy - precision - recall - F1 -
training time - inference time - implementation complexity

**Goal:** understand neural-network training. The PyTorch model does not
need to beat Logistic Regression.

------------------------------------------------------------------------

# 48. Current Learning Progress

``` text
Python Fluency                ✅
NumPy                         ✅
Pandas                        ✅
Jupyter                       ✅
Essential ML Fundamentals     ✅
scikit-learn                  ✅
Model Evaluation              ✅
Preprocessing/Pipelines       ✅
Cross-Validation              ✅
Basic FastAPI Model Serving   ✅

PyTorch:
Tensors                       ✅
Dataset / DataLoader          ✅
Neural Network / nn.Module    ✅
Basic ReLU                    ✅

Next:
Activation Functions          ⏳
Loss Functions                ⏳
Autograd / Backpropagation    ⏳
Optimizers                    ⏳
Training Loops                ⏳
Validation / Evaluation       ⏳
GPU / Device Handling         ⏳
Save / Load PyTorch Models    ⏳
Final Text Classification     ⏳
```

------------------------------------------------------------------------

# 49. High-Value Cheat Sheet

## Python

``` python
def function(x: int) -> int:
    return x * 2

items = [x * 2 for x in range(5)]

try:
    ...
except ValueError:
    ...

with open("file.txt") as file:
    ...
```

## Pandas

``` python
df = pd.read_csv("data.csv")

df.head()
df.info()
df.describe()
df.isna().sum()

X = df.drop(columns=["target"])
y = df["target"]
```

## scikit-learn

``` python
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

model.fit(X_train, y_train)

predictions = model.predict(X_test)
```

## PyTorch

``` python
tensor = torch.tensor(
    [1, 2, 3],
    dtype=torch.float32
)
```

``` python
dataset = TensorDataset(X, y)

loader = DataLoader(
    dataset,
    batch_size=32,
    shuffle=True
)
```

``` python
class NeuralNetwork(nn.Module):

    def __init__(self):
        super().__init__()

        self.network = nn.Sequential(
            nn.Linear(2, 4),
            nn.ReLU(),
            nn.Linear(4, 1)
        )

    def forward(self, x):
        return self.network(x)
```

------------------------------------------------------------------------

# 50. Concepts You Should Be Able to Explain

Before finishing Month 1, aim to explain these without relying on
memorized code:

1.  What is the difference between a feature and a target?
2.  Classification vs regression?
3.  Why separate training and test data?
4.  What is data leakage?
5.  Overfitting vs underfitting?
6.  Precision vs recall?
7.  Why use preprocessing pipelines?
8.  Parameter vs hyperparameter?
9.  What is a tensor?
10. What does tensor shape mean?
11. Dataset vs DataLoader?
12. What is a batch?
13. What is an epoch?
14. What is a neuron?
15. What are weights and biases?
16. What does `nn.Linear` do?
17. What does `forward()` do?
18. Why do neural networks need nonlinear activation functions?
19. What changes when a neural network learns?
20. Why might Logistic Regression still beat a neural network?

------------------------------------------------------------------------

# 51. Mental Model to Keep

The complete workflow we're building toward is:

``` text
RAW DATA
   ↓
CLEAN / PREPROCESS
   ↓
FEATURE REPRESENTATION
   ↓
TENSORS
   ↓
DATASET
   ↓
DATALOADER
   ↓
BATCH
   ↓
NEURAL NETWORK
   ↓
PREDICTION
   ↓
LOSS
   ↓
BACKPROPAGATION
   ↓
OPTIMIZER
   ↓
UPDATE WEIGHTS
   ↓
REPEAT ACROSS BATCHES / EPOCHS
   ↓
EVALUATE ON UNSEEN DATA
   ↓
SAVE MODEL
   ↓
SERVE / USE FOR INFERENCE
```

If you understand **why each box exists**, you are building the right
foundation for AI engineering.
