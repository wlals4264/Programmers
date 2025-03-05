function solution(cipher, code) {
    return cipher.split('').map((v,i) => {
        if((i + 1) % code === 0) return v
    }).join('')
}