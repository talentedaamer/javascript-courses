import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

// CONSTANTS
// con not overwrite
// can not initialize without value

// LET AND VAR
console.log('>> var defined later >>', testVar);
var testVar = 'Hello';

console.log('>> let defined later >>', testLet); // should give error, but code is compiles into js and same error is shown
let testLet = 'Hello';

// REST PARAMETER
function listAllFruits(...fruitList) {
   fruitList.forEach(f => {
     console.log('>> fruit >>', f);
   });
}
listAllFruits('apple', 'banana', 'peach');
// rest parameter should be last in the parameters
// function listAllFruits(like, dislike, ...fruitList)

// DESCTUCTURING
let fruits = ['apple', 'banana', 'cherry', 'peach'];
const [apple, banana] = fruits;
console.log('>> destructuring fruits >>', apple + ' - ' + banana );

const [a, ...allFruits] = fruits;
console.log('>> destructuring fruits >>', 'i like ' + a + ' but not ' + allFruits  );

// default value
let [ a=1, b=2 ] = [1];
console.log('>> destructuring default value >>', 'a -> ' + a + ' b -> ' + b );