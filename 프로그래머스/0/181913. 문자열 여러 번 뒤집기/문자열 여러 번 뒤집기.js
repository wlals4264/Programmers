function solution(my_string, queries) {
    let strArr = my_string.split('');
    
     queries.forEach(([a, b]) => {
        const reversedPart = strArr.slice(a, b + 1).reverse();
        strArr.splice(a, b - a + 1, ...reversedPart);
    });
    
    return strArr.join('');
}