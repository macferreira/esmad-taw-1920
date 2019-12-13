const num = +prompt("Digite um número?")

showMultiplicationNumber(num);

function showMultiplicationNumber(num = 1) {
    let result = ''
    for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}\n`;
    }
    alert(result)
}
