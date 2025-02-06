function solution(q, r, code) {
    return [...code].filter((_, i) => { return i % q === r }).join('');
}