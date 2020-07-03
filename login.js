const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const logoutbut = document.getElementById("out");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

 var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
if(password.match(decimal)) 
{ 
    if (username === "user" && password === "Password@1") {
       
        document.getElementById("main-holder").style.opacity = "0";
        document.getElementById("data-entry").style.display = "block";
        document.getElementById("out").style.opacity = "1";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}
else
{ 
alert('Wrong...!')
//return false;
}

})

logoutbut.addEventListener("click", (e) => {
    e.preventDefault();
   
    
        document.getElementById("main-holder").style.opacity = "1";
        document.getElementById("data-entry").style.display = "none";
        document.getElementById("out").style.opacity = "0";
    
})

/*function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}*/