const animals = ["dog", "cat", "bird", "fish", "lizard"];

for (let i = 0; i < animals.length; i++) {
    console.log(`${i}번 동물 : ${animals[i]}`)
}

for (let i of animals) {
    console.log(i);
}