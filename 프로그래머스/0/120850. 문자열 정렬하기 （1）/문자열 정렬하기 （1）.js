function solution(my_string) {
    return my_string.replaceAll(/[a-z]/gi, '').split('').map(Number).sort((a,b)=>a-b)
}