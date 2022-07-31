let input = document.querySelector('input');
let btn = document.querySelector('button');
let output = document.querySelector('.output');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let inpValue = input.value;
    inpValue = inpValue.substring(0,17);

    // Find the first 4 character
    let character = inpValue.toString();
    let birthyr = '';
    for (let i = 0; i <= 3; i++) {
        birthyr += Number(character[i]);
    };

    // Find the last 13 characters
    let lastChars = character.substring(4,character.length);
    let lastCharsString = lastChars.toString();

    if (character.length < 13 || character.length > 17) {
        output.innerText = 'Your NID is not valid. Please enter minimum 13 and maximum 17 digit number'
    } else if (birthyr < 1900 || birthyr > 2000) {
        output.innerText = 'Your NID is not valid. The first 4 digit must be your year of birth and between 1900-2000.'
    } else if (lastCharsString.length != 13) {
        output.innerText = 'Your NID is not valid. There should be 13 digit numbers after birth year.'
    } else if (birthyr % 4 == 0 && birthyr % 100 != 0 || birthyr % 400 == 0) {
        output.innerText = 'Your NID is not valid. Birth year should not be leap year.'
    } else {
        output.innerText = 'Congratulations!! Your NID is valid'
    };
});