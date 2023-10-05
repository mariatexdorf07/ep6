function funcaoResposta(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');
    if(respostaUsuario){
        if(respostaUsuario.value === respostaCorreta){
            document.getElementById("retorno").textContent = "Correto!";
            
        }
        else{
            document.getElementById("retorno").textContent = "Errado!";
           
        }
    }
    else{
        document.getElementById("retorno").textContent = "Tem que escolher alguma!!";
    }    
}

function funcaoResposta2(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta2"]:checked');
    if(respostaUsuario){
        if(respostaUsuario.value === respostaCorreta){
            document.getElementById("maria").textContent = "Correto!";
            
        }
        else{
            document.getElementById("maria").textContent = "Errado!";
           
        }
    }
    else{
        document.getElementById("maria").textContent = "Tem que escolher alguma!!";
    }    
}

function funcaoResposta3(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta3"]:checked');
    if(respostaUsuario){
        if(respostaUsuario.value === respostaCorreta){
            document.getElementById("jesus").textContent = "Correto!";
            
        }
        else{
            document.getElementById("jesus").textContent = "Errado!";
           
        }
    }
    else{
        document.getElementById("jesus").textContent = "Tem que escolher alguma!!";
    }    
}


function funcaoResposta4(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta4"]:checked');
    if(respostaUsuario){
        if(respostaUsuario.value === respostaCorreta){
            document.getElementById("banana").textContent = "Correto!";
            
            
        }
        else{
            document.getElementById("banana").textContent = "Errado!";
           
        }
    }
    else{
        document.getElementById("banana").textContent = "Tem que escolher alguma!!";
    }    
}