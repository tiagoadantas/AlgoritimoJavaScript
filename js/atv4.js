function touch(){
    var userName = prompt("Olá! Qual seu nome?");
    
    if(userName){
    document.getElementById("rockIMG").src="img/rock_happy.png";
    alert("Prazer "+userName+"!");
    
    }
    
}