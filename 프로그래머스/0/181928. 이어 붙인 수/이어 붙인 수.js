function solution(num_list) {
    let oddSum = '';
    let evenSum = '';
    num_list.forEach(num => num % 2 === 0 ? evenSum += num : oddSum += num);
    return Number(oddSum) + Number(evenSum);
}