function createPhoneNumber(numbers){
    let string = numbers.join("")
    string = "(" + string.slice(0, 3) + ") " + string.slice(3, 6) + "-" + string.slice(6)
    return string

    /* Best method

    var format = "(xxx) xxx-xxxx";
  
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
    */
}
function randomArray(){
    let arr = []
    while(arr.length < 10){
        let random = Math.floor(Math.random() * 10)
        if(!arr.includes(random)){
            arr.push(random)
        }
    }
    return arr
}
document.getElementById("phoneNumber").innerHTML = createPhoneNumber(randomArray()) + "<br>" + createPhoneNumber(randomArray()) + "<br>" + createPhoneNumber(randomArray())