let expenses = [
    {
        title: "Lunch",
        amount: 200,
        category: "Food"
    },
    {
        title: "Uber",
        amount: 150,
        category: "Travel"
    },
    {
        title: "Movie",
        amount: 300,
        category: "Entertainment"
    }
];


const savedExpenses =
    localStorage.getItem("expenses");

if (savedExpenses) {
    expenses = JSON.parse(savedExpenses);
}


const expenseContainer =
    document.getElementById("expenseContainer");

const titleInput =
    document.getElementById("titleInput");

const amountInput =
    document.getElementById("amountInput");

const categoryInput =
    document.getElementById("categoryInput");

const addBtn =
    document.getElementById("addBtn");


function saveExpenses() {
    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}


function renderExpenses() {
    expenseContainer.innerHTML = "";
    expenses.forEach((expense, index) => {
        expenseContainer.innerHTML += `
            <div class="card p-3 mb-3">
                <h3>${expense.title}</h3>
                <p>₹${expense.amount}</p>
                <p>${expense.category}</p>
                <button
                    class="btn btn-danger"
                    onclick="deleteExpense(${index})">
                    Delete
                </button>
            </div>
        `;
    });
}


function deleteExpense(index) {
    expenses.splice(index, 1);
    saveExpenses();
    renderExpenses();
}


addBtn.addEventListener("click", () => {

    const title =
        titleInput.value.trim();

    const amount =
        Number(amountInput.value);

    const category =
        categoryInput.value.trim();


    if (title === "") {
        alert("Please enter expense title.");
        return;
    }

    if (amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }


    if (category === "") {
        alert("Please enter category.");
        return;
    }
    expenses.push({
        title: title,
        amount: amount,
        category: category
    });

    saveExpenses();

    renderExpenses();
    titleInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";
});

renderExpenses();