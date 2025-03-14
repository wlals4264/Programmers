function solution(lines) {
    let count = new Array(201).fill(0);
    
    lines.forEach(([start, end]) => {
        for (let i = start + 100; i < end + 100; i++) {
            count[i]++;
        }
    });

    return count.filter(v => v >= 2).length;
}
