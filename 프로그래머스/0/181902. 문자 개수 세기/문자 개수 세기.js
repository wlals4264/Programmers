function solution(my_string) {
    const alphabetArr = [];
    const countArr = Array(52).fill(0);
    
    for (let i = 65; i <= 90; i++) {
        alphabetArr.push(String.fromCharCode(i));
    }

    for (let i = 97; i <= 122; i++) {
         alphabetArr.push(String.fromCharCode(i));
    }
    
    for (let i = 0; i <= my_string.length; i++) {
        let index = alphabetArr.indexOf(my_string[i]);
        if (index !== -1) {
            countArr[index]++;
        }
    }
    
    return countArr;
}