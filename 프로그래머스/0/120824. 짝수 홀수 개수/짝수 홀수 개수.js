function solution(num_list) {
    var answer = [];
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2== 0){
            sum1 += 1;
        }
        else{
            sum2 += 1;
        }
    }
    return [sum1, sum2];
}