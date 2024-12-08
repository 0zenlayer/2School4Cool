function validateLogin(){
    const email = document.getElementById('inputEmail3').value.trim(); 
    const password = document.getElementById('inputPassword3').value.trim(); 

    if  (email&&password){
        window.location.href = 'homepage.html';
    } else {
        alert("Please input email and password.");
    }
}