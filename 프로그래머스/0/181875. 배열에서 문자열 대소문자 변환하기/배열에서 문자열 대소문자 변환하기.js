function solution(strArr) {
    return strArr.map((str, idx) => 
                      !(idx % 2) ? str.toLowerCase() : str.toUpperCase())
}