let animal = { name: "tora", species: "pomeranian" }


console.log(animal.name);
console.log();

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
    console.log(`${key} : ${animal[key]}`)
}


const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
];