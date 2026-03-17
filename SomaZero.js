let soma = 0;
let n = Number(prompt("Digite um número ou digite 0 pra que pare a soma: \n"));

while (n !== 0){
    soma += n;
    n = Number(prompt("Digite o próximo número: "));
}

console.log("A soma total dos números digitados é: " + soma);
