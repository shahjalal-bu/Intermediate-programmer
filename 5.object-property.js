const students = [
    {id:21, name:"Omar Sunny"},
    {id:22, name:"Shakib khan"},
    {id:23, name:"Amit Hasan"},
    {id:24, name:"Deepjol"}
]

//make an array of name property

const names = students.map(s => s.name)
const ids = students.map(s => s.id)
const ft = students.filter(s => s.id>=23)
const ftfind = students.find(s => s.id>=23)
console.log(names);
console.log(ids);
console.log(ft);
console.log(ftfind);