function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message);
}

calculateSupply(25, 36);
calculateSupply(26, 1.5);
calculateSupply(27, 200);