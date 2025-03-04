function solution(my_string) {
    const set = new Set(Array.from(my_string));
    return [...set].join('');
}