function solution(num_list) {
    const minusArr = num_list.filter(num => num < 0);
    return minusArr.length > 0 ? num_list.indexOf(minusArr[0]) : -1;
}