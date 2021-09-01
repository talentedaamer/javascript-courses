import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

// CONSTANTS
// con not overwrite
// can not initialize without value

// LET AND VAR
// console.log('>> var defined later >>', testVar);
// var testVar = 'Hello';
//
// console.log('>> let defined later >>', testLet); // should give error, but code is compiles into js and same error is shown
// let testLet = 'Hello';

// REST PARAMETER
// function listAllFruits(...fruitList) {
//    fruitList.forEach(f => {
//      console.log('>> fruit >>', f);
//    });
// }
// listAllFruits('apple', 'banana', 'peach');
// rest parameter should be last in the parameters
// function listAllFruits(like, dislike, ...fruitList)

// DESCTUCTURING
// let fruits = ['apple', 'banana', 'cherry', 'peach'];
// const [apple, banana] = fruits;
// console.log('>> destructuring fruits >>', apple + ' - ' + banana );
//
// const [a, ...allFruits] = fruits;
// console.log('>> destructuring fruits >>', 'i like ' + a + ' but not ' + allFruits  );

// default value
// let [ x=1, y=2 ] = [1];
// console.log('>> destructuring default value >>', 'x -> ' + x + ' y -> ' + y );

// destructuring objects
const carObj = { make: 'toyota', model:'revo', year: 2021};
// const { make, model, year} = carObj;
// console.log('>> destructuring object >>', make + ' - ' + model + ' - ' + year );
// destructuring without declaration
// let make, model, year;
// ({make, model, year} = carObj);
// console.log('>> destructuring object >>', make + ' - ' + model + ' - ' + year );
// assigning to new variables
// const {make: CareMake} = carObj;
// console.log('>> destructuring object >>', CareMake );
// default values
// const {make = 'toyota'} = carObj;
// console.log('>> destructuring object >>', make );
const {make: carMake = 'toyota'} = carObj;
console.log('>> destructuring object >>', carMake );

// spread operator

// typeof()

// common type conversion

// break & continue, controlling loop

