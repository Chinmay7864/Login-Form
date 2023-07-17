const title = document.getElementById('title');
const namefield = document.getElementById('namefield');
const loginBtn = document.getElementById('login-button');
const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick= () => {
    title.innerHTML = "Sign Up";
    namefield.style.display = "block";
};

loginBtn.onclick = () => {
    title.innerHTML = "Login";
    namefield.style.display = "none";
}