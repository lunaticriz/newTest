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

const arr = [17, 17, 17, 12, 12, 354, 354, 1, 1, 1, 17, 19, 19];
const result = removeConsecutiveDuplicates(arr);
console.log(result);
