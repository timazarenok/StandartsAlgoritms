/*const isNumbersOfNumbersDifferent = (number) => {
	const arr = Array.from(number.toString());
	if(arr.length > 10){
		return false;
	}
	const set = new Set(arr);
	return arr.length === set.size;
}

console.log(isNumbersOfNumbersDifferent(123));*/



// const CheckNumbers = (number, predicate) => {
// 	const arr = Array.from(number.toString());
// 	if(arr.length > 10){
// 		return false;
// 	}
// 	const set = new Set(arr);
// 	console.log(arr.length);
// 	console.log(set.size);
// 	return predicate(arr.length, set.size);
// }

// console.log(CheckNumbers(1123, (a, b) => a-2 === b));

// const isPolindrom = (number) => {
// 	return number.toString()
// 	.split()
// 	.reverse()
// 	.join() === number.toString();
// }

// console.log(isPolindrom(12321))

// const sumArrayK = (arr, first, last) => {
// 	let reducer = (accumulator, currentValue) => (accumulator + parseInt(currentValue));
// 	return arr.slice(first, last).reduce(reducer, 0)
// }

// const sumFirstLast = (number, k) => {
// 	let arr = Array.from(number.toString());
// 	let size = arr.length;
// 	let sumFirst = sumArrayK(arr, 0, k);
// 	let sumLast = sumArrayK(arr, size-k, size);
// 	return sumFirst === sumLast;
// }

// console.log(sumFirstLast(1233434423212, 2));



