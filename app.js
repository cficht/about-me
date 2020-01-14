import isYes from '/isYes.js';

const quizButton = document.getElementById('quiz-button');
const resultsText = document.getElementById('results-text');


quizButton.addEventListener('click', () => {
    const name = prompt('What\'s your name?');
    const confirmation = confirm(`${name}, do you really want to take this quiz?`);
    if (confirmation === false) return;
    let answerCount = 0;
    
    const answer1 = prompt(`${name}, do I have a cat named Frankie?`);
    const answer2 = prompt(`${name}, have I lived in Brooklyn, NY?`);
    const answer3 = prompt(`${name}, do I have a dog named Snuffles?`);
    
    if (isYes(answer1) === true) answerCount += 1;
    if (isYes(answer2) === true) answerCount += 1;
    if (isYes(answer3) === false) answerCount += 1;

    alert('Quiz is complete! Calculating results');

    resultsText.textContent = `${name}, you got ${answerCount}/3 correct!`;

});