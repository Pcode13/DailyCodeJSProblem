function displayStr(data) {
    let anagrams = {};

    for (let word of data) {
        let sortedWord = word.split('').sort().join(''); // Sort the word
        console.log("a",sortedWord)
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = []; // Initialize array if not exists
        }
        anagrams[sortedWord].push(word); // Group anagrams
    }

    return Object.values(anagrams); 
}

console.log(displayStr(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
