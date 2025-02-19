function solution(babbling) {
    const pronunciation = ['aya', 'ye', 'woo', 'ma'];
     let count = 0;

    babbling.forEach(word => {
        let temp = word;
        pronunciation.forEach(w => temp = temp.replaceAll(w, " "));
        if (temp.trim() === "") count++;
    });

    return count;
}