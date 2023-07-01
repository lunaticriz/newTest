function removeConsecutiveDuplicates(arr) {
  const output = arr.filter((e, index) => {
    return e !== arr[index + 1];
  });

  //Second Method
  //   const output = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== arr[i + 1]) {
  //       output.push(arr[i]);
  //     }
  //   }
  return output;
}

// const arr = [17, 17, 17, 12, 12, 354, 354, 1, 1, 1, 17, 19, 19];
// const result = removeConsecutiveDuplicates(arr);
// console.log(result);

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();
//undefined

console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false

function palindrome(str) {
  let newStr = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() == newStr ? "Yes" : "No";
}

console.log(palindrome("12321"));
console.log(palindrome("Madams"));
