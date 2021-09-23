const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;
const input = document.querySelector('#input');

inputEl.addEventListener('change', e => {
    const textRef = e.target.value;
    if (textRef.length == inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid');
           }
})
