function solution(myString, pat) {
    const arr = [];
    for(let i = 0; i < myString.length; i++) {
        if(myString.slice(i).startsWith(pat)) arr.push(myString.slice(0, i + pat.length))
    }
    return arr[arr.length - 1];
}