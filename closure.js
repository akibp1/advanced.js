function stopWatch (){
    let count = 0;
    return function(){
        count++
        return count;

    }
}
console.log(count);
// const clock1 = stopWatch()
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());
// console.log(clock1());

// const clock2 = stopWatch();
// console.log(clock2());
// console.log(clock2());
// console.log(clock1());

//closer hosche kno akta function thake jody kno ar akta function k call kori 
//ba return kori taile se akta closed invaironment toiri kore fale 
//tarpor ai vitorer jai function take return korteche ba call kortache se jody tar baire kno
//kno variable k accace kore tokhon 

//kno akta function ar vitore jody onno akta function thake oi scond function ta ke 
//jody amra return kori ba vitore  use kori taile akta closed invaironment toire kore 
//abog  interner variable take akta reference rakhe dai takei closure bole..
