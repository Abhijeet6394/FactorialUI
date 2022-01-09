let button=document.getElementById('factorial-btn');
button.addEventListener('click',function(){
    let input=document.getElementById('input-text');
    let num=input.value;
    let result=factorial(num);
    let output=document.getElementById('op');
    output.innerText=result;
});

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}