function solution(code) {
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