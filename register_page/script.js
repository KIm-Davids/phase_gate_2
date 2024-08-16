const form  = document.querySelector('.form');
const submit = document.querySelector('.submit');

submit.addEventListener('click', async (e) => {
    console.log("hello")
})

form.addEventListener('submit', async(e) => {
    e.preventDefault();
        const firstName =  document.getElementById("firstName").value
        const lastName =  document.getElementById("lastName").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

    try{
        const response  = await fetch("http://localhost:8080/api/v1/user/register",
            {method:"POST", headers: {
                "content-Type" : "application/json"
                },
                body:JSON.stringify({firstName:firstName, lastName:lastName, email:email, password:password})
            });

        if(response.ok) {
            const result = await response.text();
            alert('success');
            console.log(result);
        }
        else{
        const err = await response.text();
        alert(err)
        console.log(err);
        }
    } catch (error){
        alert(error.message);
    }

})