function solution(my_string, s, e) {
    return my_string.replace(my_string.slice(s, e + 1), Array.from(my_string.slice(s, e + 1)).reverse().join(''));
}