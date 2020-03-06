const nums = [1, 2, 3, 4, 5, 6, 7, 8, ];
const part = nums.slice(2, 5);

console.log(part);
console.log(nums);
//slice dia array thake akta part copy kore nawa jai 
//slice suru hobe: suru thake ses porjonto index number;

const removed = nums.splice(2, 5, 77, 99, 3);

console.log(removed);
console.log(nums);


//ar splice dia array thake akta part kate/remove kore newa hoi
//splice ar khatre kon jaiga thake suru hossche ar koita nibe seta declare korte hobe
//splice array thake kichu jinis ber kore nite pare aber sei 

//jaigai kichu input/dia ditaw pare 
//splice suru hobe kotha thake seita declare korte hobe tar pore mot koita 
// delete korbe seta bole dite hobe , tarpor kichu add korte caile comma dia seta likkhe dite 
//hobe

const together = nums.join("ami ");
console.log(together);

//join ar kaj majkhane majkhane dia jora dibe