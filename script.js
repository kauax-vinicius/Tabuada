

function calcular(){
    var n = window.document.getElementById('numero')
    var numero =  Number(n.value)
    var msg = document.getElementById('msg');

    msg.innerHTML = '';

    for(var x = 1; x<=100;x++){
        msg.innerHTML += `${numero} x ${x} = ${numero*x} <br>` 
    }
}