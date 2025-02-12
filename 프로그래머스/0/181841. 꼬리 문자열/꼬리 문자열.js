function solution(str_list, ex) {
    return str_list.reduce((acc, str) => str.includes(ex) ? acc : acc += str, "")
}