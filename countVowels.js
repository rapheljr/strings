const countVowels = function(string) {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        if (isVowel(string[index])) {
            count++;
        }
    }
    return count;
}

const isVowel = function(letter) {
    return "aeiou".includes(letter.toLowerCase());
}

const testCountVowels = function(string, expectedCount, message) {
    let testResult = "✅";
    if (countVowels(string) !== expectedCount) {
        testResult = "❌";
    }
    console.log(testResult, " - ", message);
}

const countVowelsTests = function() {
    testCountVowels("a", 1, "Single small letter vowel a");
    testCountVowels("b", 0, "Single small letter consonant b");
    testCountVowels("e", 1, "Single small letter vowel e");
    testCountVowels("c", 0, "Single small letter consonant c");
    testCountVowels("aa", 2, "Single small letter repeated vowel a");
    testCountVowels("bb", 0, "Single small letter repeated consonant b");
    testCountVowels("ab", 1, "Single small letter vowel and consonant a,b");
    testCountVowels("ee", 2, "Single small letter repeated vowel e");
    testCountVowels("cc", 0, "Single small letter repeated consonant c");
    testCountVowels("ec", 1, "Single small letter vowel and consonant e,c");
    testCountVowels("ae", 2, "Couple small letter vowel a,e");
    testCountVowels("bc", 0, "Couple small letter consonant b,c");
    testCountVowels("aeae", 4, "Couple small letter repeated vowel a,e");
    testCountVowels("bcbc", 0, "Couple small letter repeated consonant b,c");
    testCountVowels("aeiou", 5, "All small letter vowel a,e,i,o,u");
    testCountVowels("A", 1, "Single capital letter vowel A");
    testCountVowels("B", 0, "Single capital letter consonant B");
    testCountVowels("E", 1, "Single capital letter vowel E");
    testCountVowels("C", 0, "Single capital letter consonant C");
    testCountVowels("AA", 2, "Single capital letter repeated vowel A");
    testCountVowels("BB", 0, "Single capital letter repeated consonant B");
    testCountVowels("AB", 1, "Single capital letter vowel and consonant A,B");
    testCountVowels("EE", 2, "Single capital letter repeated vowel E");
    testCountVowels("CC", 0, "Single capital letter repeated consonant C");
    testCountVowels("EC", 1, "Single capital letter vowel and consonant E,C");
    testCountVowels("AE", 2, "Couple capital letter vowel A,E");
    testCountVowels("BC", 0, "Couple capital letter consonant B,C");
    testCountVowels("AEAE", 4, "Couple capital letter repeated vowel A,E");
    testCountVowels("BCBC", 0, "Couple capital letter repeated consonant B,C");
    testCountVowels("AEIOU", 5, "All capital letter vowel A,E,I,O,U");
    // and more
}

// countVowelsTests();
string = "1. countVowels - How many vowels in a given string?";
console.log(countVowels(string));