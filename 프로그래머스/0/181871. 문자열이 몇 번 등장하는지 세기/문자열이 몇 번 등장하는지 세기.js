function solution(myString, pat) {
    let count = 0;
    let strtIndex = myString.indexOf(pat);

    while (strtIndex !== -1) { 
        count++; 
        strtIndex = myString.indexOf(pat, strtIndex + 1); 
    }

    return count;
}