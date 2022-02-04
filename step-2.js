
//run time O(n^2)
//space O(n)
function sumToZero(array) {
    bool = false
  
    for(let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          bool = true;
          return bool;
        } 
      }
    };
    return false;
  }
console.log(sumToZero([2, 5, 18, 7, -5, 24]))


//run time O(n^2)
//space 0(n)
function unique(word){
    let bool = true;
    arr = word.split('');

    for(let i = 0; i < arr.length; i++){
        for(let k = i + 1; k < arr.length; k++){
            if(arr[i] == arr[k]){
                bool = false
            }
        }
    }
    return bool
}
console.log(unique('Moonday'))





//run time O(1)
//space O(n)
isPangram = (string) => 
     new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))




//run time O(log n)
//space o(n)
function wordLength(string){
    let change = string.split(' ');
    let longWord = 0

    for(let i = 0; i < change.length; i++){
        if(change[i].length > longWord){
            longWord = change[i].length
        }
    }
    console.log(longWord)   
}
wordLength("i love riding my bicycle")