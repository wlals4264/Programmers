function solution(A, B) {
    let count = 0;
    let arrA = A.split('');
    let originalA = A;

    while (true) {
        if(A === B) return 0;
        
        arrA.unshift(arrA.pop())
        let txt = arrA.join('');
        count++;
        
        if (txt === B) return count;
        
        if (txt === originalA) break;
    }
    
    return -1; 
}
