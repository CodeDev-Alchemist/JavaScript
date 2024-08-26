const marvel_heroes = ["Thor", "IronMan", "Spider-Man"]
const dc_heroes = ['Super-Man', 'Flash','Bat-Man']

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes)

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes)
// Spread Operator: 
// const newHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(newHeroes)

const another_Arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [34, 56]]]

const my_real_array = another_Arr.flat(Infinity)
// console.log(my_real_array)

console.log(Array.isArray('Vivek'))
console.log(Array.from('Vivek'))
console.log(Array.from({name: 'Pradhan'})) //interesting


let score_1 = 100
let score_2 = 200
let score_3 = 300

console.log(Array.of(score_1, score_2, score_3))
