function solution(num, k) {
    const strNum = num.toString(); 
    const strK = k.toString();

    return strNum.includes(strK) ? strNum.indexOf(strK) + 1 : -1;
}
