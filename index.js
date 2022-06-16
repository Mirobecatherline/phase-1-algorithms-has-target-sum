function hasTargetSum(array, target) {

  const known= {};
  for (const number of array) {
    
    const complement = target - number;
    
    if (known[complement]) return true;
    
    known[number] = true;
  }
  // 1 step
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create an array that holds the known values
  get a compilment number that when added to one other number in the array gives the target number
  if number is compliment return true else return false and add number to object
  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
