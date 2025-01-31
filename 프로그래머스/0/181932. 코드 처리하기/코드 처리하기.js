function solution(code) {
    // 문자열 code를 읽으면서 1이 나오면 mode를 바꾼다. 초기값은 0
    // 0일때는 code[idx]가 1이 아니고 idx가 짝수면 ret의 맨 뒤에 code[idx] 추가
    // 1일때는 code[idx]가 1이 아니고 idx가 홀수면 ret의 맨 뒤에 code[idx] 추가
    // 1일때는 mode를 바꾼다. 1이면 0으로, 0이면 1로
    // return ret
    // ret이 빈 문자열이면 "EMPTY"를 리턴
    const codeArr = Array.from(code);
    let ret = '';
    let mode = 0;
    console.log(codeArr);
    
    
    codeArr.forEach((char, idx) => {
        if(char === '1'){
            mode === 0 ? mode = 1 : mode = 0;
        } else if(mode === 0 && idx % 2 === 0) {
            ret += char;
        } else if(mode === 1 && idx % 2 !== 0) {
            ret += char;
        }
        
        return ret;
    });
                    
    
    return ret || 'EMPTY'
}