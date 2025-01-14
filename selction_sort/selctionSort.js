function getSmallest(arr) {
  let smallest = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == null) continue;
    if (smallest > arr[i]) {
      smallest = arr[i];
      index = i;
    }
  }
  return index;
}
function deleteItem(arr, indexOfNumberToRemove) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i == indexOfNumberToRemove)) continue;
    result.push(arr[i]);
  }
  return result;
}
function selectionSort(arr) {
  let copiedArray = arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let smallestItemIndex = getSmallest(copiedArray);
    result.push(copiedArray[smallestItemIndex]);
    copiedArray = deleteItem(copiedArray, smallestItemIndex);
  }
  return result;
}

console.log(selectionSort([5, 4, 9, 3, 2, 2, 2, 10, 15, 7]));
