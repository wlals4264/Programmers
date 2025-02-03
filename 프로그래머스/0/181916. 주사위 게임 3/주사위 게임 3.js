function solution(a, b, c, d) {
    // p(4)
    // p(3), q(1)
    // p(2), q(2)
    // p(2), q(1), r(1)
    // p, q, r, t
    const nums = [a, b, c, d]; 
    const set = new Set(nums);
    
    if(set.size === 1) {
        return 1111 * a;
    } 
    
    const countMap = {};
    for (let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    
    const countArr = Object.values(countMap).sort((a, b) => b - a);
    
    if (countArr[0] === 3) {
        let p = Object.keys(countMap).find(key => countMap[key] === 3);
        let q = Object.keys(countMap).find(key => countMap[key] === 1);
        return Math.pow((10 * Number(p)) + Number(q), 2);
    } else if (countArr[0] === 2) {
        if (countArr[1] === 2) {
            let [p, q] = [...set].sort((x, y) => y - x);
            return (p + q) * Math.abs(p - q);
        } else {
            let p = Object.keys(countMap).find(key => countMap[key] === 2);
            let qrs = Object.keys(countMap).filter(key => countMap[key] === 1).map(Number);
            return qrs[0] * qrs[1];
        }
    } else {
        return Math.min(...nums);
    }
}