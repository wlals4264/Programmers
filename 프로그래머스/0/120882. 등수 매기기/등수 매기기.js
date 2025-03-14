function solution(score) {
    const averageArr = score.map(([math,eng], idx) => [idx, (math + eng) / 2])
    
    averageArr.sort((a, b) => b[1] - a[1]);

    let rankArr = new Array(score.length);
    let rank = 1; 
    let prevScore = averageArr[0][1];
    let count = 1; 
    
    averageArr.forEach(([idx, avg], i) => {
        if (avg < prevScore) rank = i + 1; 
        rankArr[idx] = rank;
        prevScore = avg; 
    });

    return rankArr;
}