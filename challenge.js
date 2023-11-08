let number1 = Number(prompt('Digite o primeiro número: '))

let number2 = Number(prompt('Digite o segundo número'))

alert(`A soma dos dois números: ${number1 + number2}`)

alert(`A subtração dos dois números: ${number1 - number2}`)

alert(`A multiplicação dos dois números: ${number1 * number2}`)

alert(`A divisão dos dois números: ${number1 / number2}`)

alert(`O resto da divisão dos dois números: ${number1 % number2}`)

if(number1 % number2 == 0) {
  alert(`O número é par`)
} else {
  alert(`O número é ímpar`)
}

if(number1 == number2) {
  alert('Os números inseridos são iguais')
} else {
  alert(`Os números inseridos são diferentes`)
}