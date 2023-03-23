const { json } = require("express");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

function add(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
      return "Error: Please enter valid numbers.";
    }
    else{
      return n2 + n1;
    }
  }


function subtract(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    return "Error: Please enter valid numbers.";
  } else {
    n1 = Number(n1);
    n2 = Number(n2);
    if (n1 > n2) {
      let temp = n1;
      n1 = n2;
      n2 = temp;
    }
    return n2 - n1;
  }
}

function multiply(n1, n2) {
  return n1 * n2;
}

function division(n1, n2) {
  return n1 * n2;
}

app.get("/", (req, res) => {
  try {
    console.log(req.query.n1);
    const n1 = parseFloat(req.query.n1);
    console.log(n1);
  } catch (error) {
    console.log(error);
  }
});

app.get("/add", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const result = add(n1, n2);
    res.status(200).send(`<h1>Sum of ${n1} and ${n2} is ${result}</h1>`);
  } catch (error) {
    res.status(500).send(`Unknwon server error occurred. Error: ${error}`);
    console.log(`Server error occurred: ${error}`);
  }
});

app.get("/subtract", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const result = subtract(n1, n2);
    res.status(200).send(`<h1>Difference of ${n1} and ${n2} is ${result}</h1>`);
  } catch (error) {
    res.status(500).send(`Unknwon server error occurred. Error: ${error}`);
    console.log(`Server error occurred: ${error}`);
  }
});

app.get("/multiply", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const result = multiply(n1, n2);
    res
      .status(200)
      .send(`<h1>Multiplication of ${n1} and ${n2} is ${result}</h1>`);
  } catch (error) {
    res.status(500).send(`Unknwon server error occurred. Error: ${error}`);
    console.log(`Server error occurred: ${error}`);
  }
});

app.get("/division", (req, res) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const result = multiply(n1, n2);
    res.status(200).send(`<h1>Division of ${n1} and ${n2} is ${result}</h1>`);
  } catch (error) {
    res.status(500).send(`Unknwon server error occurred. Error: ${error}`);
    console.log(`Server error occurred: ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
