function solution(arr) {
    let prevArr = [];
    let curArr = [...arr];
    let count = 0;

    while (JSON.stringify(prevArr) !== JSON.stringify(curArr)) {
        prevArr = [...curArr]; 
        curArr = prevArr.map(num => {
            if (num >= 50 && num % 2 === 0) return num / 2;
            if (num < 50 && num % 2 === 1) return num * 2 + 1;
            return num;
        });
        count++;
    }

    return count - 1; 
}
