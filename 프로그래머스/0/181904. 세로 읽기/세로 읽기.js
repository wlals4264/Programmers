function solution(my_string, m, c) {
    const arr = [];
    let answer = '';
    
    while(my_string.length >= m){
        let word = my_string.slice(0, m);
        arr.push(word);
        my_string = my_string.slice(m); 
    }
    
    for(char of arr) {
        answer += char[c - 1];
    }
    return answer;
}