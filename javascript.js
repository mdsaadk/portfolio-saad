//scroll to top functionality
const arrowUp= document.querySelector("#arrow-up");

// post call
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
    
    }
}
