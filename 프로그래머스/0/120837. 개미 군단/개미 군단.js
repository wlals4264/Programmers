function solution(hp) {
    let ant = 0;

    ant += Math.floor(hp / 5); 
    hp %= 5; 

    ant += Math.floor(hp / 3); 
    hp %= 3;

    ant += hp; 

    return ant;
}
