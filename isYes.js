export default function isYes(wordInput) {
    if (wordInput.toLowerCase() === 'yes' || wordInput.toLowerCase() === 'y') {
        return true;
    } else {
        return false;
    }
}