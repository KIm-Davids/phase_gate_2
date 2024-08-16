const form = document.querySelector("#form")


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('emailInput').value
    const password = document.getElementById('passwordInput').value

    try{
        console.log("1st")
        const response = await fetch("http://localhost:8080/api/v1/user/login/",
        {
            method: "PATCH",
            headers:{
            "content-Type" : "application/json"
            },
            body:JSON.stringify({email:email,password:password})
        });

        if(response.ok){
            const result = await response.text();
            alert('success')
            console.log(result)
        }
        else{
            const err = await response.text();
            alert(err)
            console.log(err)
        }
    }catch (error){
        alert(error.message);
    }
})