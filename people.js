const people = ['yoshi', 'ryu', 'chun-li', 'mario']
const age = [10, 15, 24, 8]

console.log(people);


//this is for exporting single thing
// module.exports = people

//exporting multiple things
module.exports = {
    people,
    age
}