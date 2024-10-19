let display = document.getElementById("display")

let value1 = ""
let value2 = ""
let symbol = ""

function Digit(num){
  display.innerHTML += num
  value1 += num
}

function Operator(num2){
  display.innerHTML += num2
  value2 = value1
  value1 = ""
  symbol = num2
}
function clearResult(){
  display.innerHTML=""
  value1 = ""
  value2 = ""
}

function calculate(symbol) {
if (symbol === '+') {
  result = Number(value2) + Number(value1)
  display.innerHTML = result
}

else if (symbol === '/'){
  result = Number(value2) / Number(value1)
  display.innerHTML = result
  value1 = reslt
}

else if (symbol === '*'){
  result = Number(value2) * Number(value1)
  display.innerHTML = result
  value1 = result
}

else if (symbol === '-'){
  result = Number(value2) - Number(value1)
  display.innerHTML = result
  value1 = result
}
}