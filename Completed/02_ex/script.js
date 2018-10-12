let result = document.getElementById('result');
let input = document.getElementById('string');
let radios = document.getElementsByName('ex2');

input.addEventListener('input', function(){
  let str = input.value;
  if(radios[0].checked) {
    result.innerText = str.reverse();
  } else if(radios[1].checked) {
    result.innerText = str.reverseWords();
  } else result.innerText = 'choose one option';
})

let string = 'hello world';

String.prototype.reverse = function reverse() {
  let newStr = "";
  for (let i = this.length -1 ; i >= 0; i--) {
    newStr += this[i];
  }
  
  return newStr;

}

String.prototype.reverseWords = function reverseWords() {
  let newStr = "";
  let words = this.match(/[^\s]+/g);
  for(let i=0; i<words.length;i++) {
    newStr += words[i].reverse()+" ";
  }
  return newStr;
}
