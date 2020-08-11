
let num1 = Math.floor(Math.random()*10 +1);
let num2 = Math.floor(Math.random()*10 +1);

document.getElementById('value1').value=num1;
document.getElementById('value2').value=num2;

function CheckAns(){
    let result=num1+num2;
    let answer=document.getElementById('answer').value;
    if(result==answer){
        alert("Correct answer!");
    }
    else{
        alert('try again!')
    }
    answer=document.getElementById('answer').value="";
     num1 = Math.floor(Math.random()*10 +1);
     num2 = Math.floor(Math.random()*10 +1);

    document.getElementById('value1').value=num1;
    document.getElementById('value2').value=num2;

}