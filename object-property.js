const student = [
    {id:23, name:'sani'},
    {id:29, name:'sani'},
    {id:14, name:'sathy'},
    {id:19, name:'dipjol'},
]
const s_name = [];
for (let i = 0; i < student.length; i++){
    const element = student[i];
    const num = element.name;
    s_name.push(num);
}

console.log(s_name);
const ids = student.map(s =>s.id);
console.log(ids);
const bigger = student.filter(s => s.id>22);
console.log(bigger);