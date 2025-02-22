function solution(num_list) {
    let oddCount = 0;
    let evenCount = 0;
    
    num_list.forEach(num => num % 2 === 0 ? evenCount++ : oddCount++)
    
    return [evenCount, oddCount]
}