const countConsonants = function(string) {
    let count = 0;
    for (let index = 0; index < string.length; index++) {
        if (isConsonant(string[index])) {
            count++;
        }
    }
    return count;
}

const isConsonant = function(letter) {
    return "bcdfghjklmnpqrstvwxyz".includes(letter.toLowerCase());
}

const testCountConsonants = function(string, expectedCount, message) {
    let testResult = "✅";
    if (countConsonants(string) !== expectedCount) {
        testResult = "❌";
    }
    console.log(testResult, " - ", message);
}

const countConsonantsTests = function() {
    testCountConsonants("a", 0, "Single small letter vowel a");
    testCountConsonants("b", 1, "Single small letter consonant b");
    testCountConsonants("e", 0, "Single small letter vowel e");
    testCountConsonants("c", 1, "Single small letter consonant c");
    testCountConsonants("aa", 0, "Single small letter repeated vowel a");
    testCountConsonants("bb", 2, "Single small letter repeated consonant b");
    testCountConsonants("ab", 1, "Single small letter vowel and consonant a,b");
    testCountConsonants("ee", 0, "Single small letter repeated vowel e");
    testCountConsonants("cc", 2, "Single small letter repeated consonant c");
    testCountConsonants("ec", 1, "Single small letter vowel and consonant e,c");
    testCountConsonants("ae", 0, "Couple small letter vowel a,e");
    testCountConsonants("bc", 2, "Couple small letter consonant b,c");
    testCountConsonants("aeae", 0, "Couple small letter repeated vowel a,e");
    testCountConsonants("bcbc", 4, "Couple small letter repeated consonant b,c");
    testCountConsonants("aeiou", 0, "All small letter vowel a,e,i,o,u");
    testCountConsonants("A", 0, "Single capital letter vowel A");
    testCountConsonants("B", 1, "Single capital letter consonant B");
    testCountConsonants("E", 0, "Single capital letter vowel E");
    testCountConsonants("C", 1, "Single capital letter consonant C");
    testCountConsonants("AA", 0, "Single capital letter repeated vowel A");
    testCountConsonants("BB", 2, "Single capital letter repeated consonant B");
    testCountConsonants("AB", 1, "Single capital letter vowel and consonant A,B");
    testCountConsonants("EE", 0, "Single capital letter repeated vowel E");
    testCountConsonants("CC", 2, "Single capital letter repeated consonant C");
    testCountConsonants("EC", 1, "Single capital letter vowel and consonant E,C");
    testCountConsonants("AE", 0, "Couple capital letter vowel A,E");
    testCountConsonants("BC", 2, "Couple capital letter consonant B,C");
    testCountConsonants("AEAE", 0, "Couple capital letter repeated vowel A,E");
    testCountConsonants("BCBC", 4, "Couple capital letter repeated consonant B,C");
    testCountConsonants("AEIOU", 0, "All capital letter vowel A,E,I,O,U");
    // and more
}

// countConsonantsTests();
string = "2. countConsonants - How many consonants in a given string?";
console.log(countConsonants(string));