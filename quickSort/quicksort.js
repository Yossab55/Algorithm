// the funtion
function quickSort(arr) {
  if(arr.length < 2) return arr
  let middleIndex = parseInt(arr.length / 2);
  let middleItem = arr[middleIndex];
  let bigItems = [];
  let smallItems = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > middleItem) bigItems.push(arr[i]);
    if (arr[i] < middleItem) smallItems.push(arr[i]);
  }
  return quickSort(smallItems).concat([middleItem], quickSort(bigItems));
}

console.log(quickSort([1, 7, 4, 11, 10, 90, 50, 4, 2, 1]));

