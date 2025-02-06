function solution(my_string, is_prefix) {
    const prefixArr = [my_string[0]];
    for (let i = 1; i < my_string.length; i++) {
        prefixArr.push(my_string.slice(0, i));
    }
    return prefixArr.includes(is_prefix) ? 1 : 0;
}