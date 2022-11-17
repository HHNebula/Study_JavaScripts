const animals = ["dog", "cat", "bird", "fish", "lizard"];

for (let i = 0; i < animals.length; i++) {
    console.log(`${i}번 동물 : ${animals[i]}`)
}

for (let i of animals) {
    console.log(i);
}

const cars = ["Avante", "Sonata", "Granger", "Tussan", "Santafe"]
for (let car of cars) {
    console.log(`${car}`)
}

cars.forEach((element) => { console.log(element); });

let carConsolelog = car => console.log(car);

cars.forEach(carConsolelog);

// << !! ------------------------------- !! >>

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Arrow Function
let arrowFunction = element => console.log(element)

array1.forEach(arrowFunction);

// Nomal Function
function nomalFunction(element) {
    console.log(element);
}

array1.forEach(nomalFunction);