function solution(my_string, overwrite_string, s) {
    const start_string = my_string.slice(0, s);
    let end_string;
    if (my_string.length > s + overwrite_string.length) {
        end_string = my_string.slice(s + overwrite_string.length);
    }
    return end_string ? start_string.concat(overwrite_string) + end_string : start_string.concat(overwrite_string)
}