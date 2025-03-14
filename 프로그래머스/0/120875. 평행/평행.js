function solution(dots) {
    function getSlope(dot1, dot2) {
        let [x1, y1] = dot1;
        let [x2, y2] = dot2;
        return (y2 - y1) / (x2 - x1);
    }

    if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;
    if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;
    if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;

    return 0;
}
