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
                                                                                                        /*EXERCICIOS DE ALTERNATIVAS*/ 
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
                                                                                                                        /*EXERCICIOS DE ALTERNATIVAS*/ 
        }
        else{
            document.getElementById("jesus").textContent = "Errado!";
           
        }
    }
    else{
        document.getElementById("jesus").textContent = "Tem que escolher alguma!!";
    }    
}
                                                                                                                    /*EXERCICIOS DE ALTERNATIVAS*/ 

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
}                                                                                                                   /*EXERCICIOS DE ALTERNATIVAS*/ 
 /*AQUI COMEÇA A CALCULADORA*/ 



function josefa1(){
  
    fernanda.value = parseInt(aran1.value) + parseInt(aran2.value);

}
function multiplicacao(){
    fernanda.value = parseInt(aran1.value) * parseInt(aran2.value);
    
}

function divisao(){
    if(aran2.value == 0){
        alert("Não pode dividir por zero!!!");
        aran1.value = 0;
    }
    else{
    fernanda.value = parseInt(aran1.value) / parseInt(aran2.value);
    }
}


function josefa2(){
  
    fernanda.value = parseInt(aran3.value) + parseInt(aran4.value);

}
function multiplicacao(){
    fernanda.value = parseInt(aran3.value) * parseInt(aran4.value);
    
}

function divisao(){
    if(aran2.value == 0){
        alert("Não pode dividir por zero!!!");
        aran3.value = 0;
    }
    else{
    fernanda.value = parseInt(aran1.value) / parseInt(aran2.value);
    }
}

function josefa3(){
  
    fernanda.value = parseInt(aran1.value) + parseInt(aran2.value);

}
function multiplicacao(){
    fernanda.value = parseInt(aran1.value) * parseInt(aran2.value);
    
}

function divisao(){
    if(aran2.value == 0){
        alert("Não pode dividir por zero!!!");
        aran1.value = 0;
    }
    else{
    fernanda.value = parseInt(aran1.value) / parseInt(aran2.value);
    }
}