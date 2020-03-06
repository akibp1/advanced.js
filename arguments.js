function add (num1, num2){
    console.log([...arguments]);
    for (let i = 0; i < arguments.length; i++){
        const element = arguments[i];
        const sum = element + element;
        console.log(sum);
    }

}
const result = add(2, 5, 7, 3);
