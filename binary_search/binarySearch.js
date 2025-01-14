function binary_search(list, item) {
  let low = 0;
  let hight = list.length - 1; 
  while(low <= hight) {
    let mid = Math.floor((low + hight) / 2);
    let guess = list[mid];
    if(guess == item) return mid;
    guess > item ? hight = mid - 1 : low = mid + 1
  }
  return null
}
let list= [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
console.log(binary_search(list, 10)) // 9
console.log(binary_search(list, 15)) // null