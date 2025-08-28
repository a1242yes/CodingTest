function solution(dot) {
    const a = Number(dot[0]);
    const b = Number(dot[1]);
    
    if(a >= 0 && b >= 0){
        return 1;
    }
    else if(a <= 0 && b >= 0){
        return 2;
    }
    else if(a <= 0 && b <= 0){
        return 3;
    }
    else{
        return 4;
    }
}