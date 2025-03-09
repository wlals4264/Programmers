function solution(keyinput, board) {
    let [x, y] = [0, 0];
    const limits = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

    keyinput.forEach((key) => {
        if (key === "up" && y < limits[1]) y++;
        if (key === "down" && y > -limits[1]) y--;
        if (key === "left" && x > -limits[0]) x--;
        if (key === "right" && x < limits[0]) x++;
    });

    return [x, y];
}
