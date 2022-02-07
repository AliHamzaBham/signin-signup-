const container = document.querySelector('#container');
//Buttons(Sign in / ign up)
const signUpBtn = document.querySelector('#signup-btn')
const loginBtn = document.querySelector('#login-btn');
//headings(Create account / Login Account)
const heading = document.querySelector('#heading');
// social para
const googlePara = document.querySelector('#google-para');
const facebookPara = document.querySelector('#facebook-para'); 
//Inputs
const nameInputs = document.querySelectorAll('.name-inputs');
const form = document.querySelector('form'); 
//Button
const submit = document.querySelector('#submit'); 


signUpBtn.addEventListener('click' , () => {
    // alert("Hello");
    loginBtn.style.backgroundColor = "#F9F9F9";
    loginBtn.style.borderBottom = "1px solid #CDCDCD";
    loginBtn.style.borderLeft = "1px solid #CDCDCD";

    signUpBtn.style.backgroundColor = "transparent";
    signUpBtn.style.border = "none"; 

    heading.textContent = "Create your account";

    googlePara.textContent = "Sign up with Google";
    facebookPara.textContent = "Sign up with Facebbok";
    //Inputs
    for(let i = 0; i<2; i++){
        nameInputs[i].style.display = "block";
    }

    //Button
    submit.textContent = "Sign Up";

    container.style.height = "840px";
}); 

loginBtn.addEventListener('click' , () => {
    // alert("Hello");
    signUpBtn.style.backgroundColor = "#F9F9F9";
    signUpBtn.style.borderBottom = "1px solid #CDCDCD";
    signUpBtn.style.borderRight = "1px solid #CDCDCD";

    loginBtn.style.backgroundColor = "transparent";
    loginBtn.style.border = "none";
 
    heading.textContent = "Sign in to your account";

    googlePara.textContent = "Sign in with Google";
    facebookPara.textContent = "Sign in with Facebbok";
    //Inputs
    for(let i = 0; i<2; i++){
        nameInputs[i].style.display = "none";
    }

    //Button 
    submit.textContent = "Log In"; 

    container.style.height = "700px";
}); 

 