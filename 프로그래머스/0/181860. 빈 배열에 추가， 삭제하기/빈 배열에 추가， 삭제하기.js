function solution(arr, flag) {
    return flag.reduce((list, boolean, i) => {
        if(boolean) {
            list.push(...Array(arr[i] * 2).fill(arr[i]));
        } else {
            list.splice(-arr[i]);
        }
        return list;
    }, [])
}