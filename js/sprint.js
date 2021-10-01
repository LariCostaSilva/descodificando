let codificacao = document.getElementById("codificacao")
let resultado = document.getElementById ("resultadofinal")
let codigos = document.getElementById("codigos")
let tipodecodigo = document.querySelector (".tipodecodigo")



function habilitaEntrada(){

    let entrada = document.getElementById("entradaPrincipal")
    let cifra = document.getElementById("Cifra")
    let base = document.getElementById("base")

    if(cifra.checked == true){
        base.checked = false
        entrada.style.display = "block"
    }
}

function desabilitaEntrada(){

    let entrada = document.getElementById("entradaPrincipal")
    let cifra = document.getElementById("Cifra")
    let base = document.getElementById("base")

      if(base.checked == true){
        cifra.checked = false
        entrada.style.display = "none"
      }
}

function criptografia(){

    let botao = document.getElementById("botao")
    let codificar = document.getElementById("codificar")
    let decodificar = document.getElementById("decodificar")

    if(codificar.checked == true){
        decodificar.checked = false
        botao.setAttribute("onclick", "criptografiaCesar()")
        botao.innerHTML = "Codificar Mensagem"
    }
}

function descriptografia(){

    let botao = document.getElementById("botao")
    let codificar = document.getElementById("codificar")
    let decodificar = document.getElementById("decodificar")

    if(decodificar.checked == true){
        codificar.checked = false
        botao.setAttribute("onclick", "descriptografiaCesar()")
        botao.innerHTML = "Decodificar Mensagem"
    }
}

//Cifra de Cesar//

function criptografiaCesar(){

    let insercao = document.getElementById("insercao")
    let resultado = document.getElementById("resultado")
    let valor = insercao.value
    let principal = document.getElementById("principal")
    let incremento = parseInt(principal.value)
    let arrayInsercao = valor.split("")
    let cifra = document.getElementById("Cifra")
    let base = document.getElementById("base")

    if(cifra.checked == true){
     
   

    for(let contador = 0; contador < arrayInsercao.length; contador++){

        if(arrayInsercao[contador] != " "){

            let maiusculo = ((arrayInsercao[contador].charCodeAt(0) - 65 +  incremento)%26)+65
            let minusculo = ((arrayInsercao[contador].charCodeAt(0) - 97 +  incremento)%26)+97

            if(arrayInsercao[contador].charCodeAt(0)>=65 && arrayInsercao[contador].charCodeAt(0)<=90){

                arrayInsercao[contador] = String.fromCharCode(maiusculo)
            }

            else if (arrayInsercao[contador].charCodeAt(0)>=97 && arrayInsercao[contador].charCodeAt(0)<=122){

                    arrayInsercao[contador] = String.fromCharCode(minusculo)
            }
        }    
    }

    resultado.value = arrayInsercao.join("")
}

else if(base.checked == true){
    resultado.value = window.btoa(valor) 
}  
}


function descriptografiaCesar(){

    let insercao = document.getElementById("insercao")
    let resultado = document.getElementById("resultado")
    let valor = insercao.value
    let principal = document.getElementById("principal")
    let incremento = parseInt(principal.value)
    let arrayInsercao = valor.split("")

    let cifra = document.getElementById("Cifra")
    let base = document.getElementById("base")

    if(cifra.checked == true){
     

    for(let contador = 0; contador < arrayInsercao.length; contador++){

        if(arrayInsercao[contador] != " "){

            let maiusculo = ((arrayInsercao[contador].charCodeAt(0) - 65 -  incremento)%26)+65
            let minusculo = ((arrayInsercao[contador].charCodeAt(0) - 97 -  incremento)%26)+97

            if(arrayInsercao[contador].charCodeAt(0)>=65 && arrayInsercao[contador].charCodeAt(0)<=90){

                arrayInsercao[contador] = String.fromCharCode(maiusculo)
            }

            else if (arrayInsercao[contador].charCodeAt(0)>=97 && arrayInsercao[contador].charCodeAt(0)<=122){

                    arrayInsercao[contador] = String.fromCharCode(minusculo)
            }
        }    
    }

    resultado.value = arrayInsercao.join("")
}

else if(base.checked == true){
    resultado.value = window.atob(valor) 
}  
}







