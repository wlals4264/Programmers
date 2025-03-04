function solution(my_string) {
    return my_string.match(/[0-9]/gi).map(Number).reduce((acc,cur) => acc += cur, 0)
}