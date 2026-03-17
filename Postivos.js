let positivos = 0;

for (let i = 1; i <= 5; i++) {
    let n = Number(prompt("Digite o " +i+ "º número:"));
    
    if (n > 0) {
        positivos++
    }
}

console.log("Você digitou 5 números, e " +positivos+ " deles são positivos.");
