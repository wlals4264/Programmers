function solution(myString) {
    let result = '';
    for(let char of myString) {
        if(char === 'a') char = 'A'
        else if(char !== 'A' && char.toUpperCase() === char) char = char.toLowerCase();
        result += char;
    }
    return result
}