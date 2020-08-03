function countdown(max){
    console.log("countdown is beginning!!")
    for(var i = max; true; i--){
        if(i >= 0){
            continue;
        } else {
            console.log('meow');
        }
    }
    return max + ' countdown'
}
