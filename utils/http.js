import axios from "axios";

const url =
  "https://trex-e59ca-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const { data } = await axios.post(`${url}/expenses.json`, expenseData);
  return data.name;
}

export async function fetchExpenses() {
  const { data } = await axios.get(`${url}/expenses.json`);
  const expenses = [];
  for (const key in data) {
    const expense = {
      id: key,
      date: new Date(data[key].date),
      description: data[key].description,
      amount: +data[key].amount,
    };
    expenses.push(expense);
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  const { data } = await axios.put(`${url}/expenses/${id}.json`, {...expenseData});
  return data;
}
export async function deleteExpense(id) {
  const { data } = await axios.delete(`${url}/expenses/${id}.json`);
}
