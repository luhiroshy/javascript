let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Escolha uma operação matemática: \n+(soma) \n-(subtração) \n*(multiplicação) \n/(Divisão) \n>");
let resultado;

if (operacao === "+") {
    resultado = n1 + n2;
} else if (operacao === "-") {
    resultado = n1 - n2;
} else if (operacao === "*") {
    resultado = n1 * n2;
} else if (operacao === "/") {
    resultado = n1 / n2;
}

console.log("o resultado é: " + resultado);
