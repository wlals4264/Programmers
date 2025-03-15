function solution(chicken) {
    let serviceChicken = 0;
    while (chicken >= 10) {
        let newServiceChicken = Math.floor(chicken / 10);
        serviceChicken += newServiceChicken;
        chicken = chicken % 10 + newServiceChicken;
    }
    return serviceChicken
}