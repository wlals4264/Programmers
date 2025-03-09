function solution(dots) {
    const [x0, y0] = dots[0];
    let x1 = x0, y1 = y0;

    dots.forEach(([vx, vy]) => {
        if (x0 !== vx) x1 = vx;
        if (y0 !== vy) y1 = vy;
    });

    return Math.abs(x0 - x1) * Math.abs(y0 - y1);
}
