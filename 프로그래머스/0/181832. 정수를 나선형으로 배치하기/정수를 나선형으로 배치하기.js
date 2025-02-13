function solution(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    let count = 1;
    let x = 0, y = 0;
    let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];
    let dir = 0; 
    
    for (let i = 0; i < n * n; i++) {
        result[x][y] = count++;
        
        let nx = x + dx[dir];
        let ny = y + dy[dir];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n || result[nx][ny] !== 0) {
            dir = (dir + 1) % 4;
            nx = x + dx[dir];
            ny = y + dy[dir];
        }

        x = nx;
        y = ny;
    }

    return result;
}