function solution(num_list) {
    const lastNum = num_list[num_list.length - 1];
    const beforeLastNum = num_list[num_list.length - 2];
    
    lastNum > beforeLastNum ? num_list.push(lastNum - beforeLastNum) : num_list.push(lastNum * 2);
    
    return num_list;
}