//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let years = 20

if (years >= 18){
    console.log("Você tem 18 anos, então está liberado o acesso")
}else{
    console.log("Você ainda é menor de idade, então acesso negado")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true

let yearsOld = 20
let humano = true

if (yearsOld >= 18 && humano === true){
    console.log("Parabéns, você é um humano maior de idade")
}else{
    console.log("Você é um humano, porém ainda é menor de idade")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let month = "Dezembro"

if(month === "Janeiro" || month === "Dezembro"){
    console.log("Você faz aniversário em Janeiro ou Dezembro")
}else{
    console.log("Você não faz aniversario nem em Janeiro nem em Dezembro")
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let myName = "Lidiane"

if(myName . substring(0,1) === 'R'|| myName . substring(0,1) === 'r'){
    console.log("Seu nome começa com R")
}else{
    console.log("Seu nome não começa com R")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let lestName = "Paiva"
lestName.length

if(lestName.substring(0,1) == "E"|| lestName.length === 6){
    console.log("O seu sobrenome possui as condições exigidas")
}else{
    console.log("O seu sobrenome não possui as condições exigidas")
}


