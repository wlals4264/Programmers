function solution(quiz) {
    return quiz.map(v => {
        const [x, op, y, eq, answer] = v.split(' ');
        const result = op === '+' ? Number(x) + Number(y) : Number(x) - Number(y);
        return result === Number(answer) ? 'O' : 'X';
    });
}
