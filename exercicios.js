// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaRetangulo = Number(prompt("altura:"))
  const larguraRetangulo = Number(prompt("largura:"))
  const areaRetangulo = alturaRetangulo * larguraRetangulo
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Ano atual:"))
  const anoDeNascimento = Number(prompt("Ano de nascimento:"))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura*altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?") 
  const idade = Number(prompt("Qual sua idade?"))
  const email = prompt("Qual seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite uma de suas cores favoritas:")
  const cor2 = prompt("Digite outra cor:")
  const cor3 = prompt("Digite mais uma cor:")
  const array = [cor1, cor2, cor3]

  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringToUp = string.toUpperCase()

  return stringToUp
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoTotal = custo
  const valorIngressoEspetaculo = valorIngresso
  const calculaIngressosEspetaculo = custoTotal / valorIngressoEspetaculo

  return calculaIngressosEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const arrayPrimeiroElemento = array

  return arrayPrimeiroElemento[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const arrayUltimoElemento = array
  return array[arrayUltimoElemento.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const UltimoElemento = array[array.length-1]

  array[0] = UltimoElemento
  array[array.length-1] = primeiroElemento

  return array

}

// // EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const string1um = string1.toUpperCase()
  const string2dois = string2.toUpperCase()

  return string1um === string2dois

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"))
  const anoRg = Number(prompt("Digite o ano de emissão do RG:"))
  const idade = anoAtual - anoNascimento 
  const tempoRg = anoAtual - anoRg

  const deveRenovar5 = tempoRg >= 5
  const pessoaPossuiAte20Anos = idade <= 20

  const deveRenovar10 = tempoRg >= 10
  const pessoaPossui20A50Anos = idade > 20 && idade <= 50

  const deveRenovar15 = tempoRg >= 15
  const pessoaPossuiMaisDe50 = idade > 50

  console.log(pessoaPossuiAte20Anos && deveRenovar5 || pessoaPossui20A50Anos && deveRenovar10 || pessoaPossuiMaisDe50 && deveRenovar15)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 = ano % 400 === 0
  const multiplo4 = ano % 4 === 0
  const multiplo100 = ano % 100 === 0

  return multiplo400 || multiplo4 && !multiplo100 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const question = prompt("Você tem mais de 18 anos? Sim ou não?")
  const question2 = prompt("Você possui ensino médio completo? Sim ou não?")
  const question3 = prompt("Você possui disponibilidade exclsiva durante os horários do curso? Sim ou não?")

  console.log(question === "sim" && question2 === "sim" && question3 === "sim")
}