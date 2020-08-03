function countdown(max){
    for(var i = max; true; i--){
        if(i >= 0){
            continue;
        } else {
            break;
        }
    }
    return "countdown is done!";
}
