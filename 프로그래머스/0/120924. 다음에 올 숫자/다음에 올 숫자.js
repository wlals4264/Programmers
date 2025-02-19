function solution(common) {
    let sequence;
    sequence = common[1] - common[0] === common[2] - common[1] ? 'geometric' : 'arithmetic';
    
    if(sequence === 'geometric') {
        return common[common.length - 1] + common[1] - common[0];
    } else {
        return common[common.length - 1] * (common[1] / common[0]);
    }
}