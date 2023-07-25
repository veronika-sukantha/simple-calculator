function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer1").innerHTML="Addition is "+c;
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    if(a<b)
    {
        let temp=a;
        a=b;
        b=temp;
    }
    let c=a-b;
    document.getElementById("answer1").innerHTML="Subtraction is "+c;
}
function mul(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("answer1").innerHTML="Multiplication is "+c;
}
function div(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("answer1").innerHTML="Division is "+c;
}
function mod(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("answer1").innerHTML="Modulus is "+c;
}