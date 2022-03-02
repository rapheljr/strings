const countVowels = function(string) {
    return string.length;
}

const testCountVowels = function(string, expectedCount, message) {
    let testResult = "✅";
    if (countVowels(string) !== expectedCount) {
        testResult = "❌";
    }
    console.log(testResult, " - ", message);
}

const countVowelsTests = function() {
    testCountVowels("a", 1, "Single vowel a");
    testCountVowels("b", 0, "Single consonant b");
    testCountVowels("e", 1, "Single vowel e");
    testCountVowels("c", 0, "Single consonant c");
    testCountVowels("aa", 2, "Single repeated vowel a");
    testCountVowels("bb", 0, "Single repeated consonant b");
    testCountVowels("ab", 1, "Single vowel and consonant a,b");
    testCountVowels("ee", 2, "Single repeated vowel e");
    testCountVowels("cc", 0, "Single repeated consonant c");
    testCountVowels("ec", 1, "Single vowel and consonant e,c");
    testCountVowels("ae", 2, "Couple vowel a,e");
    testCountVowels("bc", 0, "Couple consonant b,c");
    testCountVowels("aeae", 4, "Couple repeated vowel a,e");
    testCountVowels("bcbc", 0, "Couple repeated consonant a,e");
    testCountVowels("aeiou", 5, "All vowel a,e,i,o,u");
    // and more
}

countVowelsTests();