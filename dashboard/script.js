async function fetchData() {
    try {
        const response = await fetch('http://localhost:8080/get-profit', {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data from the backend', data);
                // const expensesList = document.getElementById('expenses-list');
                // const expenseItem = document.createElement('div');
                // expenseItem.textContent = `Description: ${data.}, Amount: $${data.amount}`;
                // expensesList.appendChild(expenseItem);
            })
            .catch(error => console.log('Error fetching values: ', error))
    }catch(error){
        console.error("Error fetching data", error)
    }
}

// const backEndData = await fetch("http://localhost:8085/api/v1/profitAmount/get-profit");

// const fetchData = async (url) => {
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`Error: ${response.status}`)
//         }
//         const data = await response.json();
//         displayData(data.result)
//         console.log(data.result)
//     }catch(error){
//         console.log(error)
//     }
// };

// fetchData(backEndData)
//
// const movieContainer = document.querySelector('.dashboardElement')
//
// const displayData = (dataFromBackEnd) => {
//
//     dataFromBackEnd.forEach((dataAcquired) => {
//         const {expenseType,totalExpenses, description, localDateTime} = dataAcquired
//         const divTag = document.createElement('div')
//         divTag.classList.add('movieBox')
//         const details = {divTag, expenseType, totalExpenses, description, localDateTime}
//         createInnerHtml(details)
//         movieContainer.appendChild(divTag)
//     })
// }
//
// function createInnerHtml(details){
//     const {divTag, expenseType, totalExpenses, description, localDateTime} = details;
//     divTag.innerHTML = `
//                 <p class="data">
//                     <p>${expenseType}</p>
//                     <p>${totalExpenses}</p>
//                     <p>${description}</p>
//                     <p>${localDateTime}</p>
//     `;
// }

//
// const responseData = await backEndData.json()
//
// if(backEndData.ok){
//     console.log(responseData);
//     document.getElementsByClassName("viewButtons").innerHTML = `Expenses: ${responseData responseData}`
// }