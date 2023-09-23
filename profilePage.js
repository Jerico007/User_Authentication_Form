

//if token is null redirect to index page
if(localStorage.getItem("token") === null)
{
    window.open(window.location.origin,"_self");
}

let logoutBtn = document.getElementById("logout");
let userDetails = document.getElementsByClassName("user-details")[0];
{/* <p>Full Name : Your Name</p>
<p>Email : Your Email</p>
<p>Token : Your Token</p>
<p>Password : Your password</p> */}

userDetails.innerHTML = `
<p>Full Name : ${localStorage.getItem("name")}</p>
<p>Email : ${localStorage.getItem("email")}</p>
<p>Token : ${localStorage.getItem("token")}</p>
<p>Password : ${localStorage.getItem("password")}</p>
`

//Adding event to logout button
logoutBtn.addEventListener("click",()=>{
    localStorage.clear();
    window.open(window.location.origin,"_self");
})

