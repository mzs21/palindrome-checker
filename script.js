// Getting element using their 'id' values

const inputText = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');


const checkPalindrome = (inputStr) => {
    let modifiedtext = inputStr.toLowerCase().replace(/[\W_]/g, '');;

    let reversedText = modifiedtext.split('').reverse().join('');

    return modifiedtext === reversedText;
}

checkButton.addEventListener('click', () => {
    const textValue = inputText.value;

    if (textValue === '') alert('Please input a value')

    else {
        resultDiv.textContent = checkPalindrome(textValue) ? textValue + " is a palindrome" : textValue + " is not a palindrome";
    }
})
