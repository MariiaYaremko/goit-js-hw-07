const input = document.querySelector('input#font-size-control');
console.log(input);
const textRef = document.querySelector('span#text');
console.log(textRef);
input.addEventListener('input', event => {
    textRef.style.fontSize = event.target.value + 'px';
   }
)
