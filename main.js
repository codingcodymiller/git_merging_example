function countdown(max){
    for(var i = max; true; i--){
        if(i >= 0){
            continue;
        } else {
            console.log('meow');
        }
    }
    return "countdown is done!";
}
