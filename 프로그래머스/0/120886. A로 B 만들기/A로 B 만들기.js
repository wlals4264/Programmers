function solution(before, after) {
    const sortedAfter = after.split('').sort().join('')
    const sortedBefore = before.split('').sort().join('')
    return sortedAfter === sortedBefore ? 1 : 0;
}