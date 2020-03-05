                    //map
const numbers = [2, 4, 3, 5, 6, 7, 9]
// const output = [];
// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

/**map array upor use kora jai jeta k + - * / jai kori na kno
 ar output hisebe seta akta array dibe*/

const result = numbers.map(function(element, index){
    return element * element, index;
})
//shortcut's
const square = element => element * element;

//const square = x => x * x;

//const result = numbers.map(x => x * x);


//console.log(result);
                        //filter
/**filter hosche array moddhe je jinis  gula ase sekhan thake je
 * sorto puron korbe oigula k output dibe
 */
const bigger = numbers.filter( x => x > 5);

console.log(bigger);
 