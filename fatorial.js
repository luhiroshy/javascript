let n = Number(prompt("Digite um número: "));
let fatorial = 1;

for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    console.log("O fatorial de " + n + " é " + fatorial);
