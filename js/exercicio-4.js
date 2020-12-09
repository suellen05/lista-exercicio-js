function Teste(){
    let numero = document.getElementById("numero").value;

            if(numero>=18){
                
                document.getElementById("mensagem").innerText= "Maior";

            }
/*
            else if(numero == 18){
                document.getElementById("mensagem").innerText= "Maior";
            }
*/
            else{

                
                document.getElementById("mensagem").innerText= "Menor";
            }
}