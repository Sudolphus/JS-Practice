const subtractor = function(num1, num2) {
	document.write(num1 - num2);
}

subtractor(4,6);

const multiply = function(number1, number2) {
	document.write(number1 * number2);
}

multiply(2,3);

const multByThree = function(numOne, numTwo, numThree) {
	alert(numOne * numTwo * numThree);
}

multByThree(1,2,3);

const divide = function(num1, num2) {
	alert(num1/num2);
}

divide(4,2);

const remainder = function(num1, num2) {
	document.write(num1%num2);
}

remainder(5,3);

const age = prompt("Enter your age");
const name = prompt("Enter your name");
const food = prompt("Enter your favorite food");

const sentence = function () {
	alert ("My name is" + name + " and I am " + age + " years old. My favorite food is " + food);
}
sentence();