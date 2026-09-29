function analizarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingresa tres números válidos.");
    }
    else if (num1 === num2 && num2 === num3) {
        alert(`¡Los tres números son iguales!\nValor: ${num1}`);
    }
    else {
        const lista = [num1, num2, num3];
        const menorAMayor = [...lista].sort((a, b) => a - b);
        const mayorAMenor = [...lista].sort((a, b) => b - a);

        const menor = menorAMayor[0];
        const centro = menorAMayor[1];
        const mayor = menorAMayor[2];

        alert(
            `--- RESULTADOS ---\n` +
            `• Mayor: ${mayor}\n` +
            `• Centro: ${centro}\n` +
            `• Menor: ${menor}\n\n` +
            `• Orden de mayor a menor: ${mayorAMenor.join(', ')}\n` +
            `• Orden de menor a mayor: ${menorAMayor.join(', ')}`
        );
    }
}