function sumRec(arr) {
  if (arr.length == 0) return 0;
  if (arr.length == 1) return arr[0];
  return arr.pop() + sumRec(arr);
}
function countItemsRec(arr) {
  if (arr.length == 0) return 0;
  if (arr.length == 1) return 1;
  arr.pop();
  return 1 + countItemsRec(arr);
}
function getMax(arr) {
  if (arr.length === 1) return arr[0];
  if (arr.length === 0) return null;
  let item = arr.shift();
  return item > getMax(arr) ? item : getMax(arr);
}
function binarySearchRec(item, arr) {
  if (arr.length == 0) return null;
  let index = parseInt(arr.length / 2);
  let middleItem = arr[index];
  if (item == middleItem) return middleItem;
  if (item > middleItem) return binarySearchRec(item, makeHigherNewList(arr));
  if (item < middleItem) return binarySearchRec(item, makeLowerNewList(arr));
}
function makeHigherNewList(arr) {
  let result = [];
  let index = parseInt(arr.length / 2);
  for (let i = index + 1; i < arr.length; i++) result.push(arr[i]);
  return result;
}
function makeLowerNewList(arr) {
  let result = [];
  let index = parseInt(arr.length / 2);
  for (let i = 0; i < index; i++) result.push(arr[i]);
  return result;
}
console.log(sumRec([1, 2, 3]));
console.log(countItemsRec([1, 2, 3]));
console.log(getMax([1, 2, 3, 4, 7, 9, 10]));
console.log(binarySearchRec(10, [1, 2, 3, 4, 7, 9, 10]));
