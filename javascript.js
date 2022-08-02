//scroll to top functionality
const arrowUp= document.querySelector("#arrow-up");

//arrow to top functionality
// arrowUp.addEventListener("click",() => {
//     window.arrowTo({
//        top:0,
//        left:0,
//        behavior:"smooth",
//     });
// });

// Select nav links
const navLink = document.querySelectorAll(".nav-link");


// Nav resume-menu selections
const resume = document.querySelector("#resume-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//resume menu function
// resume.addEventListener("click",() =>{
//     ul.classlist.toggle("show");
// });

//close resume menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// post call
// var name=document.getElementById('name').value;
//   var email=document.getElementById('email').value;
//   var msg=document.getElementById('message').value;
function submitForm(){
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var msg=document.getElementById('message').value;
  var obj=Object.assign({},{'name':name,'email':email,'message':msg});

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mvoyppkg", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.send(JSON.stringify(obj));
    xhr.onload = function() {
    // window.location.reload();
    }

}
