//document.write("Escrevendo na tela");

    function Exemplo(){
    document.getElementById("mensagem").innerText ="Escrevendo na Tela";

    document.getElementById("numero").value = "teste";

    console.log(document.getElementById("mensagem").innerText); 

    let numero = document.getElementById("numero").value;
    console.log(numero); 
    }

    function Trocar(){
        let numero =document.getElementById("numero").value;

        if(numero<20){ // teste
            //resposta verdadeira
            document.getElementById("mensagem").innerText= "Menor que 20";

        }
        else if(numero == 20){
            document.getElementById("mensagem").innerText= "Igual a 20";
        }
        else{

            //resposta falsa
            document.getElementById("mensagem").innerText= "Maior que 20"
        }
    }
