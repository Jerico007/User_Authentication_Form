//To prevent back button to load sign up page
// window.history.forward();
let p2 =  document.getElementsByName("confirm-password")[0];
let p1 = document.getElementsByName("password")[0];
//To validate password
function validatePass() {
  if (p1.value != p2.value) {
    p2.setCustomValidity("Password didn't match");

  } else {
    p2.setCustomValidity("");
  }
}

//To generate token
function generateToken() {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var token = '';
  for(var i = 0; i < 16; i++) {
      token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   confirm(p1,p2);
  let elements = e.target.children;
    Array.from(elements).forEach((val) => {
      if(val.hasAttribute("name") && (val.name !== "confirm-password"))
      {
          localStorage.setItem(val.name, val.value);
          val.value = "";
      }
      if(val.name === "confirm-password")
      {
        val.value = "";
      }
    });
    localStorage.setItem("token",generateToken());
    window.open("profilePage.html","_self");
});


//To redirect tab
// function noBack() {
//     window.history.forward();
// }

function stopBack(){
  window.history.go(1);
}

window.addEventListener("load", ()=>{
  window.history.go(1);
})