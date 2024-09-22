form = document.querySelector('form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        try {
            let expenseType = document.getElementById('expenseType').value
            const totalExpenseAmount = document.getElementById('totalExpensesAmount').value
            const description = document.getElementById('description').value
            const date = document.getElementById('date').value

            fetch('http://localhost:8080/api/v1/expenses/add-expense', {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    expenseType: expenseType,
                    totalExpenseAmount: totalExpenseAmount,
                    description: description,
                    localDateTime:date
                })
            })
                .then(response => response.json())
                .then(data => {
                    // document.getElementById('dateOfExpense').innerHTML = `DATE: ${data.localTime}`
                    console.log("Successfully sent to the back", data)
                    if (data.successful) {
                        // fetchToFillTheChart()
                        fetchTheTotalAmount()
                        location.reload()
                    }
                })
                .catch(error => {
                    console.error("Couldn't send to the back !", error)
                })
        } catch (error) {
            console.error(error)
        }

    })
function fetchTheTotalAmount() {

    try {
        fetch('http://localhost:8080/api/v1/expenses/get-total-expense', {
            method: "GET",
            headers: {"content-type": "application/json"}
        })
            .then(response => response.json())
            .then(data => {
                console.log("Data from the backend", data)
                if (data.successful) {
                    document.getElementById('totalExpenseAmount').innerHTML = `Total Expenses: <span style="color: red; background-color: white"> -$${data.data.amount}</span>`
                }
            })
    } catch (error) {
        console.error(error => {
            console.log("An error occurred in retrieving values from the backend")
        })
    }
}

fetchTheTotalAmount()

document.addEventListener('DOMContentLoaded', () => {
    fetchExpenses();
});

async function fetchExpenses(){
    try{
        const response = await fetch('http://localhost:8080/api/v1/expenses/get-all-expenses', {
            method: "GET",
            headers: {'content-type':'application/json'}
            })
        const data = await response.json()
    //     expenses.forEach(addRow);
    // }catch(error){
    //     console.error('Error fetching expenses:', error)
    // }

        if(Array.isArray(data.data)){
            data.data.forEach(addRow)
        }else{
            console.error('Expense is not an array', data.data)
        }
    }catch(error){
        console.error('Error fetching expenses', error)
    }
}

function addRow(expense){
    const tableBody = document.getElementById('table-body')
    const row = document.createElement('tr')

    const cellExpenseType = document.createElement('td')
    cellExpenseType.textContent = expense.expenseType;
    row.appendChild(cellExpenseType)

    const cellDescription = document.createElement('td')
    cellDescription.textContent = expense.description;
    row.appendChild(cellDescription)

    const cellAmount = document.createElement('td')
    cellAmount.textContent = `$${expense.totalExpenses.toFixed(2)}`;
    row.appendChild(cellAmount)

    tableBody.appendChild(row)


}