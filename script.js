const person = [
    prompt("Qual o seu nome"), 
    prompt("Quantos anos você tem?"), 
    prompt("Qual linguagem de programação você está estudando?"),
]

alert(`Olá ${person[0]}, você tem ${person[1]} anos e já está aprendendo ${person[2]}`)

const like = prompt(`Você gosta de estudar ${person[2]}? Responda com o número 1 - SIM ou 2 - NÃO`);

if (like == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")

}else if(like == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")

}else{
    alert("não entendi!")
}