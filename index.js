let btn = document.querySelector("#btn")
let err = document.querySelectorAll(".err")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    err[0].textContent = ''
    err[1].textContent = ''
    let email = document.querySelector("#email").value;
    let pwd = document.querySelector("#password").value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailFlag = false;
    pwdFlag = false;
    
    if(!regex.test(email)){
        err[0].textContent = "Make sure email is more than 3 characters and has @ and a ."
        return;
    }
    if(pwd.length < 8){
        err[1].textContent = "Make sure password is more than 8 characters."
        return;
    }

    err[1].classList.add("success")
    err[1].textContent = "All good to go!"
    setTimeout(() => {
        if (confirm("Are you sure you want to submit?")) {
            alert("Successful signup!");
        }
    }, 0); 
})
