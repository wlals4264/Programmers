function solution(my_string) {
    return my_string.match(/\d+/g) ? my_string.match(/\d+/g).reduce((acc,cur) => acc += Number(cur), 0) : 0;
}