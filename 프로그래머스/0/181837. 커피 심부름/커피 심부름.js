function solution(order) {
    return order.reduce((acc, item) => {
        if(item.includes('cafelatte')) acc += 5000;
        else acc += 4500;
        return acc
    }, 0);
}