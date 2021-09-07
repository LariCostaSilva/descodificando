var codificacao = document.getElementById("codificacao");
var codificar = document.getElementById("Codificar");
var decodificar = document.getElementById("Decodificar");
var botao = document.getElementById("botao");

codificacao.onchange = function () {
  var escolha = document.getElementById("Cifra");
  var EntradaPrincipal = document.getElementById("EntradaPrincipal");

  //Quando selecionado Cifra de Cesar, mostrar a tela de inserir a numeração.
  codificacao.addEventListener ('click', function mostraCampo (){
    if (codificacao.value === 'Cesar') {
      EntradaPrincipal.style.display = "none";
      console.log("Mostrar a Entrada");

  }
   //Quando não selecionado Cifra de Cesar, não mostrar a tela de inserir a numeração.
  else {
    EntradaPrincipal.style.display = "none";
    console.log("Retira a Entrada");
  }

 

codificar.addEventListener("selecao", function () {
  //escolhendo codificar a mensagem
  document.getElementById("resultadofinal").innerHTML = "Codificar Mensagem"
})

descodificar.addEventListener("selecao", function () {
  //escolhendo descodificar a mensagem
  document.getElementById("resultadofinal").innerHTML = "Descodificar Mensagem"
})

//mostrar as terminações relacionadar ao clique no botão

botao.addEventListener("selecao", function () {
  var escolha = document.addEventListener("Cifra").value
  var formulario = document.addEventListener("formulario").value
  var EntradaPrincipal = document.addEventListener("EntradaPrincipal").value
})

if (codificar.checked) {
  if (escolha == "Cifra") {
    var resultadofinal = "";
    for (i = 0; i < formulario.length; i++) {
      var NumeroChar = formulario.charCodeAt(i)
      var traduzir = NumeroChar + parseInt(EntradaPrincipal)
      var voltar = String.fromCharCode(traduzir)
      var resultadofinal = resultadofinal + voltar
    }

    document.getElementById("Traducao").innerHTML = resultadofinal
  }

  //Trocando o tipo de tradução
  else if (escolha = "Base64") {
    var binarioBase = btoa(EntradaPrincipal)

    document.getElementById("Traducao").innerHTML = binarioBase
  }

  else {
    document.getElementById("Traducao") = "Desculpe, não reconheço o que deseja codificar!"
  }
}

//Descodificando a mensagem, adicionando o menos para isso, voltar as casas codificadas
else if (descodificar.checked) {
  if (escolha == "Cifra") {
    var resultadofinal = "";
    for (i = 0; i < formulario.length; i++) {
      var NumeroChar = formulario.charCodeAt(i)
      var traduzir = NumeroChar - parseInt(EntradaPrincipal)
      var voltar = String.fromCharCode(traduzir)
      var resultadofinal = resultadofinal + voltar
    }

    document.getElementById("Traducao").innerHTML = resultadofinal
  }

  else if (escolha == "Base64") {
    var baseBinario = atob(EntradaPrincipal)
    document.getElementById("Traducao").innerHTML = baseBinario
  }

  else {
    // Escolher alguma das duas
  }
}