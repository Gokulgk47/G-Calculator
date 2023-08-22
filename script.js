function displaynum(num){
    result.value+=num
}
function clearnum(){
    result.value=''
}
function evaluatenum(){
    // exp=result.value
    // output=eval(exp)
    // result.value=output

    result.value=eval(result.value)
}
//remove the last element//

function lastelement(){
    result.value=result.value.slice(0,-1)
}