var exp = new Expression ("x");
exp = exp(-3);
exp = exp("+x");

console.log(exp);
// var x = 5;


// var expr = new Expression("x");
// expr = expr.subtract(3);
// expr = expr.add("x");

// console.log(expr.toString());
// // 2x - 3
// var eq = new Equation(expr, 4);

// console.log(eq.toString());
// // 2x - 3 = 4
// var x = eq.solveFor("x");

// console.log("x = " + x.toString());
// x = 7/2

// var expr = new Expression("x");
// expr = expr.multiply(2);
// expr = expr.multiply("x");
// expr = expr.add("y");
// expr = expr.add(new Fraction(1, 3));

// console.log(expr.toString());

// var answer1 = expr.eval({x: 2});
// var answer2 = expr.eval({x: 2, y: new Fraction(3, 4)});

// console.log(answer1.toString());
// console.log(answer2.toString());




// function multiply2(a,b){
//     var c = [ ( (a[0]*b[0]) + (a[1]*b[1]) ) , ( (a[2]*b[0]) + (a[3]*b[1]) ) ];
//     return c;
// }

// function inverse(a){
//     var det = (1/((a[0]*a[3]) - (a[2]*a[1])));
//     var result = [(det*a[3]) , (-(det*a[1])) , (-(det*a[2])) , (det*a[0])] ;
//     return result;
// }

// function main(a,b,c,d,x,y){
                
// var A = [
//     a , b,
//     c , d
// ];
// var B = [
//     x,
//     y
// ];

// var result = multiply2( inverse(A) , B );
// return "x = " + String(result[0]) + "y = " + String(result[1]);
// }

// function start(){
// var oneOne = document.getElementById("oneOne");
// var oneTwo = document.getElementById("oneTwo");
// var oneThree = document.getElementById("oneThree");
// var twoOne = document.getElementById("twoOne");
// var twoTwo = document.getElementById("twoTwo");
// var twoThree = document.getElementById("twoThree");

// var one_one = Number(oneOne.value);
// var one_two = Number(oneTwo.value);
// var one_three = Number(oneThree.value);
// var two_one = Number(twoOne.value);
// var two_two = Number(twoTwo.value);
// var two_three = Number(twoThree.value);

// var final = main( one_one , one_two , two_one , two_two , one_three , two_three );

// var workArea = document.getElementById("final");
// workArea.innerHTML = final ;
// }

