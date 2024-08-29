const nums = [];
for(let i = 0; i<10; i++){
    nums.push(Math.floor(Math.random()*10));
}

let sumatoria = 0;
nums.forEach((elemento) => sumatoria = sumatoria + elemento)
console.log("La sumatoria del arreglo es: " + sumatoria);