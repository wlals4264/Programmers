function solution(emergency) {
    const sortedEmergency = [...emergency].sort((a, b) => b - a)
    
    return emergency.map(n => sortedEmergency.indexOf(n) + 1)
}