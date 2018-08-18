function parOuImpar (){
    var valor = document.getElementById("numero");
    if ((valor.value % 2)==0){
        alert("O numero "+valor.value+" é par!");
    }else{
        alert("O numero "+valor.value+" é impar!");
    }
}